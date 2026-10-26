import { useMemo, useState } from 'react';
import type { Question, Skill } from '../types';
import { LevelBadge, TopicBadge, ProgressBar } from './Bits';
import { addAttempt, uid } from '../utils/storage';
import { speak, stopSpeaking, ttsSupported } from '../utils/tts';

const KEYS = ['A', 'B', 'C', 'D', 'E'];

export interface RunnerResult {
  total: number;
  correct: number;
  wrongTopics: string[];
  wrongItems: string[];
}

interface Props {
  skill: Skill;
  questions: Question[];
  mode: 'practice' | 'exam';
  /** For listening: text to speak per question (or a shared passage). */
  audioFor?: (q: Question) => string | undefined;
  /** Max audio plays in exam mode (listening). */
  maxPlays?: number;
  onFinish?: (r: RunnerResult) => void;
  /** Hide the internal record-attempt call (used by the full mock exam). */
  recordAttempt?: boolean;
  title?: string;
}

export function QuestionRunner({
  skill,
  questions,
  mode,
  audioFor,
  maxPlays = 2,
  onFinish,
  recordAttempt = true,
  title,
}: Props) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(() => questions.map(() => false));
  const [done, setDone] = useState(false);
  const [plays, setPlays] = useState(0);

  const q = questions[i];
  const chosen = answers[i];
  const isRevealed = revealed[i]; // practice-mode reveal
  const audioText = audioFor?.(q);

  const correctCount = useMemo(
    () => answers.reduce((s: number, a, idx) => (a === questions[idx].answer ? s + 1 : s), 0),
    [answers, questions],
  );

  function choose(optIdx: number) {
    if (mode === 'practice' && isRevealed) return; // locked after reveal
    const next = [...answers];
    next[i] = optIdx;
    setAnswers(next);
    if (mode === 'practice') {
      const r = [...revealed];
      r[i] = true;
      setRevealed(r);
    }
  }

  function go(delta: number) {
    stopSpeaking();
    setPlays(0);
    const ni = i + delta;
    if (ni < 0 || ni >= questions.length) return;
    setI(ni);
  }

  function finish() {
    stopSpeaking();
    setDone(true);
    const total = questions.length;
    const correct = answers.reduce(
      (s: number, a, idx) => (a === questions[idx].answer ? s + 1 : s),
      0,
    );
    const wrongTopics: string[] = [];
    const wrongItems: string[] = [];
    questions.forEach((qq, idx) => {
      if (answers[idx] !== qq.answer) {
        wrongTopics.push(qq.topic);
        wrongItems.push(`${qq.topic}: ${qq.options[qq.answer]}`);
      }
    });
    if (recordAttempt) {
      addAttempt({
        id: uid('att'),
        skill,
        date: new Date().toISOString(),
        total,
        correct,
        wrongTopics,
        wrongItems,
        mode,
      });
    }
    onFinish?.({ total, correct, wrongTopics, wrongItems });
  }

  function playAudio() {
    if (mode === 'exam' && plays >= maxPlays) return;
    if (audioText) {
      speak(audioText);
      setPlays((p) => p + 1);
    }
  }

  if (done) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const color = pct >= 75 ? 'var(--correct)' : pct >= 50 ? 'var(--warn)' : 'var(--wrong)';
    return (
      <div className="card center">
        <div className="result-ring" style={{ background: color }}>
          {pct}%
        </div>
        <h2>Resultado</h2>
        <p className="muted">
          {correctCount} de {questions.length} correctas
        </p>
        <div style={{ maxWidth: 380, margin: '16px auto 0' }}>
          <ProgressBar value={pct} ok={pct >= 75} />
        </div>
        <p className="small muted" style={{ marginTop: 16 }}>
          Nivel objetivo B2 ≈ 70-80% de aciertos. Sigue practicando las áreas más débiles.
        </p>
      </div>
    );
  }

  const answeredAll = answers.every((a) => a !== null);

  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className="qhead">
        <span className="qcount">
          Pregunta {i + 1} de {questions.length} ·{' '}
          {mode === 'practice' ? 'Modo práctica' : 'Modo examen'}
        </span>
        <div className="row">
          <LevelBadge level={q.level} />
          <TopicBadge topic={q.topic} />
        </div>
      </div>

      <div style={{ margin: '6px 0 18px' }}>
        <ProgressBar value={((i + 1) / questions.length) * 100} />
      </div>

      {/* audio (listening) */}
      {audioText && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="row between">
            <div>
              <strong>🎧 Audio</strong>
              <div className="small muted">
                {ttsSupported()
                  ? 'Se reproduce con la voz del navegador (TTS).'
                  : 'Tu navegador no soporta síntesis de voz; se muestra la transcripción.'}
              </div>
            </div>
            <div className="row">
              {mode === 'exam' && (
                <span className="chip">
                  {Math.max(0, maxPlays - plays)} reproducciones restantes
                </span>
              )}
              <button
                className="btn btn-ghost btn-sm"
                onClick={playAudio}
                disabled={mode === 'exam' && plays >= maxPlays}
              >
                ▶ Reproducir
              </button>
            </div>
          </div>
          {!ttsSupported() && <div className="passage" style={{ marginTop: 12 }}>{audioText}</div>}
        </div>
      )}

      {/* context passage (reading) */}
      {q.context && <div className="passage">{q.context}</div>}

      <div className="card">
        <p style={{ fontSize: 16, fontWeight: 600, marginTop: 0 }}>{q.prompt}</p>

        {q.options.map((opt, idx) => {
          let cls = 'opt';
          if (mode === 'practice' && isRevealed) {
            if (idx === q.answer) cls += ' correct';
            else if (idx === chosen) cls += ' wrong';
          } else if (chosen === idx) {
            cls += ' selected';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => choose(idx)}
              disabled={mode === 'practice' && isRevealed}
            >
              <span className="key">{KEYS[idx]}</span>
              <span>{opt}</span>
            </button>
          );
        })}

        {mode === 'practice' && isRevealed && (
          <div className={`explain ${chosen === q.answer ? 'ok' : 'no'}`}>
            <strong>{chosen === q.answer ? '✓ Correcto. ' : '✗ Incorrecto. '}</strong>
            {q.explanation}
          </div>
        )}
      </div>

      <div className="row between" style={{ marginTop: 20 }}>
        <button className="btn btn-quiet" onClick={() => go(-1)} disabled={i === 0}>
          ← Anterior
        </button>
        <div className="row">
          {i < questions.length - 1 ? (
            <button className="btn btn-ghost" onClick={() => go(1)}>
              Siguiente →
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={finish}
              disabled={mode === 'exam' && !answeredAll}
            >
              Finalizar
            </button>
          )}
        </div>
      </div>
      {mode === 'exam' && !answeredAll && i === questions.length - 1 && (
        <p className="small muted center" style={{ marginTop: 10 }}>
          Responde todas las preguntas para finalizar.
        </p>
      )}
    </div>
  );
}
