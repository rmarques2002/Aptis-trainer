import { useEffect, useMemo, useRef, useState } from 'react';
import type { Task } from '../types';
import { LevelBadge, TopicBadge, ProgressBar } from './Bits';
import { addAttempt, uid } from '../utils/storage';
import { speakScript, stopSpeaking, ttsSupported } from '../utils/tts';
import { seededSample } from '../utils/helpers';
import type { RunnerResult } from './QuestionRunner';

interface Props {
  tasks: Task[];
  mode: 'practice' | 'exam';
  onFinish?: (r: RunnerResult) => void;
  recordAttempt?: boolean;
  /** Max plays per recording (official: 2). */
  maxPlays?: number;
}

/** Items to answer for a task. Ordering tasks become "sentence → position". */
function itemsOf(t: Task) {
  if (t.kind === 'reading-order' && t.sentences) {
    const rest = t.sentences.slice(1).map((s, k) => ({ text: s, pos: k + 2 }));
    const shuffled = seededSample(rest, rest.length, t.id);
    const positions = rest.map((r) => String(r.pos));
    return shuffled.map((r) => ({ prompt: r.text, answer: String(r.pos), options: positions }));
  }
  return t.items.map((it) => ({
    prompt: it.prompt,
    answer: it.answer,
    options: it.options ?? t.options ?? [],
  }));
}

function scoreTask(t: Task, ans: Record<number, string>) {
  const items = itemsOf(t);
  let correct = 0;
  const wrong: string[] = [];
  items.forEach((it, k) => {
    if (ans[k] === it.answer) correct++;
    else wrong.push(`${t.topic}: ${it.prompt.slice(0, 50)} → ${it.answer}`);
  });
  return { correct, total: items.length, wrong };
}

export function TaskRunner({ tasks, mode, onFinish, recordAttempt = true, maxPlays = 2 }: Props) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>[]>(() => tasks.map(() => ({})));
  const [checked, setChecked] = useState<boolean[]>(() => tasks.map(() => false));
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<RunnerResult | null>(null);

  const t = tasks[i];
  const items = useMemo(() => itemsOf(t), [t]);
  const ans = answers[i];
  const isChecked = checked[i] || done;
  const allAnswered = (k: number) => itemsOf(tasks[k]).every((_, j) => answers[k][j]);

  function set(j: number, v: string) {
    if (isChecked) return;
    setAnswers((prev) => prev.map((a, k) => (k === i ? { ...a, [j]: v } : a)));
  }

  function finish() {
    stopSpeaking();
    let correct = 0;
    let total = 0;
    const wrongTopics: string[] = [];
    const wrongItems: string[] = [];
    tasks.forEach((task, k) => {
      const s = scoreTask(task, answers[k]);
      correct += s.correct;
      total += s.total;
      if (s.wrong.length) {
        wrongTopics.push(...s.wrong.map(() => task.topic));
        wrongItems.push(...s.wrong);
      }
    });
    const r = { correct, total, wrongTopics, wrongItems };
    if (recordAttempt) {
      addAttempt({
        id: uid('task'),
        skill: tasks[0].skill,
        date: new Date().toISOString(),
        total,
        correct,
        wrongTopics,
        wrongItems,
        mode,
      });
    }
    setResult(r);
    setDone(true);
    onFinish?.(r);
  }

  if (done && result && recordAttempt) {
    const pct = result.total ? Math.round((result.correct / result.total) * 100) : 0;
    const color = pct >= 75 ? 'var(--correct)' : pct >= 50 ? 'var(--warn)' : 'var(--wrong)';
    return (
      <div>
        <div className="card center" style={{ marginBottom: 20 }}>
          <div className="result-ring" style={{ background: color }}>{pct}%</div>
          <p className="muted">
            {result.correct} de {result.total} respuestas correctas
          </p>
        </div>
        <h3>Revisión</h3>
        {tasks.map((task, k) => (
          <TaskView key={task.id} task={task} ans={answers[k]} checked onSet={() => {}} maxPlays={99} />
        ))}
      </div>
    );
  }

  const s = isChecked ? scoreTask(t, ans) : null;

  return (
    <div>
      <div className="qhead">
        <span className="qcount">
          Tarea {i + 1} de {tasks.length}
        </span>
        <div className="row">
          <LevelBadge level={t.level} />
          <TopicBadge topic={t.topic} />
        </div>
      </div>
      <ProgressBar value={((i + 1) / tasks.length) * 100} />
      <div className="spacer" />

      <TaskView
        key={t.id}
        task={t}
        ans={ans}
        checked={isChecked}
        onSet={set}
        maxPlays={mode === 'exam' ? maxPlays : 99}
        items={items}
      />

      {s && (
        <div className={`explain ${s.correct === s.total ? 'ok' : 'no'}`}>
          <strong>
            {s.correct}/{s.total} correctas.
          </strong>{' '}
          {t.explanation}
        </div>
      )}

      <div className="row between" style={{ marginTop: 20 }}>
        <button className="btn btn-quiet" onClick={() => { stopSpeaking(); setI(i - 1); }} disabled={i === 0}>
          ← Anterior
        </button>
        <div className="row">
          {mode === 'practice' && !checked[i] && (
            <button
              className="btn btn-ghost"
              disabled={!allAnswered(i)}
              onClick={() => setChecked((c) => c.map((v, k) => (k === i ? true : v)))}
            >
              Comprobar
            </button>
          )}
          {i < tasks.length - 1 ? (
            <button className="btn btn-primary" onClick={() => { stopSpeaking(); setI(i + 1); }}>
              Siguiente tarea →
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={finish}
              disabled={mode === 'exam' && !tasks.every((_, k) => allAnswered(k))}
            >
              Terminar y corregir
            </button>
          )}
        </div>
      </div>
      {mode === 'exam' && i === tasks.length - 1 && !tasks.every((_, k) => allAnswered(k)) && (
        <p className="small muted center" style={{ marginTop: 10 }}>
          Responde todos los huecos de todas las tareas para terminar.
        </p>
      )}
    </div>
  );
}

// ---------- Presentation of a single task ----------

function TaskView({
  task,
  ans,
  checked,
  onSet,
  maxPlays,
  items: itemsProp,
}: {
  task: Task;
  ans: Record<number, string>;
  checked: boolean;
  onSet: (j: number, v: string) => void;
  maxPlays: number;
  items?: ReturnType<typeof itemsOf>;
}) {
  const items = itemsProp ?? itemsOf(task);
  const [showScript, setShowScript] = useState(false);
  const isOrder = task.kind === 'reading-order';

  return (
    <div className="card" style={{ marginBottom: 16 }}>
      <h3 style={{ marginBottom: 4 }}>{task.title}</h3>
      <p className="small muted" style={{ marginTop: 0 }}>{task.instructions}</p>

      {task.audio && (
        <div style={{ margin: '12px 0' }}>
          {task.audio.map((rec, k) => (
            <AudioButton
              key={k}
              label={task.audio!.length > 1 ? `Grabación ${k + 1}` : 'Reproducir audio'}
              script={rec}
              maxPlays={maxPlays}
            />
          ))}
          {(checked || !ttsSupported()) && (
            <button className="btn btn-quiet btn-sm" onClick={() => setShowScript((v) => !v)}>
              {showScript ? 'Ocultar transcripción' : 'Ver transcripción'}
            </button>
          )}
          {(showScript || !ttsSupported()) &&
            task.audio.map((rec, k) => (
              <div className="passage" key={k} style={{ marginTop: 8 }}>
                {rec.map((l, j) => (
                  <div key={j}>
                    <strong>{l.speaker}:</strong> {l.text}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}

      {task.texts && (
        <div className="passage" style={{ maxHeight: 420, overflowY: 'auto' }}>
          {task.texts.map((tx) => (
            <p key={tx.label} style={{ marginTop: 0 }}>
              <strong>{tx.label}.</strong> {tx.text}
            </p>
          ))}
        </div>
      )}

      {isOrder && task.sentences && (
        <div className="passage" style={{ marginBottom: 8 }}>
          <strong>1.</strong> {task.sentences[0]} <span className="chip">dada</span>
        </div>
      )}

      <div style={{ display: 'grid', gap: 10, marginTop: 10 }}>
        {items.map((it, j) => {
          const val = ans[j] ?? '';
          const ok = checked && val === it.answer;
          const bad = checked && val !== it.answer;
          return (
            <div
              key={j}
              className="task-row"
              style={{
                borderColor: ok ? 'var(--correct)' : bad ? 'var(--wrong)' : undefined,
                background: ok ? 'var(--correct-wash)' : bad ? 'var(--wrong-wash)' : undefined,
              }}
            >
              <div className="task-prompt">{it.prompt}</div>
              <select
                className="task-select"
                value={val}
                disabled={checked}
                onChange={(e) => onSet(j, e.target.value)}
              >
                <option value="">{isOrder ? 'Posición…' : 'Elige…'}</option>
                {it.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {bad && (
                <div className="small" style={{ gridColumn: '1 / -1', color: 'var(--wrong)' }}>
                  Correcta: <strong>{it.answer}</strong>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isOrder && checked && task.sentences && (
        <div className="passage" style={{ marginTop: 12 }}>
          <strong>Orden correcto:</strong>
          <ol style={{ margin: '6px 0 0', paddingLeft: 20 }}>
            {task.sentences.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function AudioButton({
  label,
  script,
  maxPlays,
}: {
  label: string;
  script: { speaker: string; text: string }[];
  maxPlays: number;
}) {
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  const cancelRef = useRef<() => void>(() => {});
  useEffect(() => () => cancelRef.current(), []);
  if (!ttsSupported()) return null;
  const left = maxPlays - plays;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginRight: 10, marginBottom: 8 }}>
      <button
        className="btn btn-ghost btn-sm"
        disabled={playing || left <= 0}
        onClick={() => {
          setPlays((p) => p + 1);
          setPlaying(true);
          cancelRef.current = speakScript(script, { onEnd: () => setPlaying(false) });
        }}
      >
        {playing ? '🔊 Reproduciendo…' : `▶ ${label}`}
      </button>
      {maxPlays < 99 && <span className="chip">{Math.max(0, left)} restantes</span>}
    </span>
  );
}
