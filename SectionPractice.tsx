import { useState } from 'react';
import type { Question, Skill, Level } from '../types';
import { QuestionRunner } from './QuestionRunner';
import { sample, trimOptions } from '../utils/helpers';
import { useProgress } from '../state';

interface Props {
  skill: Skill;
  title: string;
  intro: string;
  questions: Question[];
  /** for listening: build the audio text for a question */
  audioFor?: (q: Question) => string | undefined;
  /** default number of questions in a session */
  defaultCount?: number;
  /** Rendered inside a tabbed page: no big title. */
  embedded?: boolean;
  /** Offer the official 3-option format (trims 4-option questions). */
  officialToggle?: boolean;
}

const LEVELS: (Level | 'ALL')[] = ['ALL', 'B1', 'B2', 'C1'];

export function SectionPractice({
  skill,
  title,
  intro,
  questions,
  audioFor,
  defaultCount = 10,
  embedded = false,
  officialToggle = false,
}: Props) {
  const [official, setOfficial] = useState(true);
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [level, setLevel] = useState<Level | 'ALL'>('ALL');
  const [count, setCount] = useState(defaultCount);
  const [session, setSession] = useState<Question[] | null>(null);
  const [nonce, setNonce] = useState(0);
  const { refresh } = useProgress();

  const pool = level === 'ALL' ? questions : questions.filter((q) => q.level === level);
  const maxCount = Math.min(pool.length, 25);

  function start() {
    const picked = sample(pool, Math.min(count, pool.length));
    setSession(officialToggle && official ? picked.map((q) => trimOptions(q, 3)) : picked);
    setNonce((n) => n + 1);
  }

  if (session) {
    return (
      <div>
        <button className="btn btn-quiet btn-sm" onClick={() => setSession(null)}>
          ← Volver a la configuración
        </button>
        <div className="spacer" />
        <QuestionRunner
          key={nonce}
          skill={skill}
          questions={session}
          mode={mode}
          audioFor={audioFor}
          onFinish={() => refresh()}
        />
        <div className="spacer" />
        <button className="btn btn-ghost" onClick={start}>
          🔄 Nueva sesión con la misma configuración
        </button>
      </div>
    );
  }

  return (
    <div>
      {embedded ? (
        <p className="small muted">{intro}</p>
      ) : (
        <>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </>
      )}

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Modo</h3>
        <div className="tabs" style={{ marginBottom: 20 }}>
          <button
            className={`tab${mode === 'practice' ? ' active' : ''}`}
            onClick={() => setMode('practice')}
          >
            Práctica · corrección inmediata
          </button>
          <button
            className={`tab${mode === 'exam' ? ' active' : ''}`}
            onClick={() => setMode('exam')}
          >
            Examen · corrección al final
          </button>
        </div>

        {officialToggle && (
          <label className="check" style={{ marginBottom: 16 }}>
            <input type="checkbox" checked={official} onChange={() => setOfficial((v) => !v)} />
            Formato oficial: 3 opciones por pregunta
          </label>
        )}

        <h3>Nivel</h3>
        <div className="tabs" style={{ marginBottom: 20 }}>
          {LEVELS.map((l) => (
            <button
              key={l}
              className={`tab${level === l ? ' active' : ''}`}
              onClick={() => setLevel(l)}
            >
              {l === 'ALL' ? 'Todos' : l}
            </button>
          ))}
        </div>

        <h3>Número de preguntas: {Math.min(count, maxCount)}</h3>
        <input
          type="range"
          min={5}
          max={maxCount}
          step={1}
          value={Math.min(count, maxCount)}
          onChange={(e) => setCount(Number(e.target.value))}
          style={{ width: '100%', accentColor: 'var(--primary)' }}
        />
        <div className="small muted">
          {pool.length} preguntas disponibles con este filtro.
        </div>

        <div className="spacer" />
        <button className="btn btn-primary" onClick={start} disabled={pool.length === 0}>
          Empezar sesión →
        </button>
      </div>
    </div>
  );
}
