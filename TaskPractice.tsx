import { useState } from 'react';
import type { Task, Level } from '../types';
import { TaskRunner } from './TaskRunner';
import { LevelBadge } from './Bits';
import { useProgress } from '../state';
import { shuffle } from '../utils/helpers';

interface Props {
  tasks: Task[];
  intro: string;
  /** Label for a single task, e.g. "tarea", "texto". */
  unit?: string;
}

/** Pick one task (or a random set) of an official-format part and run it. */
export function TaskPractice({ tasks, intro, unit = 'tarea' }: Props) {
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [level, setLevel] = useState<Level | 'ALL'>('ALL');
  const [session, setSession] = useState<Task[] | null>(null);
  const [nonce, setNonce] = useState(0);
  const { refresh } = useProgress();

  const pool = level === 'ALL' ? tasks : tasks.filter((t) => t.level === level);
  const levels = [...new Set(tasks.map((t) => t.level))].sort();

  function run(list: Task[]) {
    setSession(list);
    setNonce((n) => n + 1);
  }

  if (session) {
    return (
      <div>
        <button className="btn btn-quiet btn-sm" onClick={() => setSession(null)}>
          ← Volver a la lista
        </button>
        <div className="spacer" />
        <TaskRunner key={nonce} tasks={session} mode={mode} onFinish={() => refresh()} />
      </div>
    );
  }

  return (
    <div>
      <p className="small muted" style={{ whiteSpace: 'pre-wrap' }}>{intro}</p>
      <div className="row between" style={{ flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
        <div className="tabs" style={{ marginBottom: 0 }}>
          <button className={`tab${mode === 'practice' ? ' active' : ''}`} onClick={() => setMode('practice')}>
            Práctica
          </button>
          <button className={`tab${mode === 'exam' ? ' active' : ''}`} onClick={() => setMode('exam')}>
            Examen
          </button>
        </div>
        {levels.length > 1 && (
          <div className="tabs" style={{ marginBottom: 0 }}>
            {(['ALL', ...levels] as (Level | 'ALL')[]).map((l) => (
              <button key={l} className={`tab${level === l ? ' active' : ''}`} onClick={() => setLevel(l)}>
                {l === 'ALL' ? 'Todos' : l}
              </button>
            ))}
          </div>
        )}
        <button className="btn btn-primary btn-sm" onClick={() => run(shuffle(pool).slice(0, 3))} disabled={!pool.length}>
          🎲 3 {unit}s al azar
        </button>
      </div>
      <div className="task-list">
        {pool.map((t) => (
          <button key={t.id} className="card task-card" onClick={() => run([t])}>
            <span>
              <strong style={{ fontFamily: 'var(--font-display)' }}>{t.title}</strong>
              <span className="small muted"> · {t.items.length || (t.sentences ? t.sentences.length - 1 : 0)} ítems</span>
            </span>
            <LevelBadge level={t.level} />
          </button>
        ))}
      </div>
    </div>
  );
}
