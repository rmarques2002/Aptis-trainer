import { useState } from 'react';
import type { WritingSet } from '../types';
import { writingSets } from '../data';
import { Timer } from './Timer';
import { LevelBadge } from './Bits';
import { addResponse, uid } from '../utils/storage';
import { countWords } from '../utils/helpers';
import { useProgress } from '../state';

const PART_TIME = [3 * 60, 7 * 60, 10 * 60, 30 * 60];
const PART_NAME = [
  'Part 1 · Respuestas de 1-5 palabras',
  'Part 2 · Texto corto (20-30 palabras)',
  'Part 3 · Tres respuestas en un chat (30-40 palabras cada una)',
  'Part 4 · Email informal (40-50) + email formal (120-150)',
];

interface Answers {
  p1: string[];
  p2: string;
  p3: string[];
  informal: string;
  formal: string;
}

const empty = (): Answers => ({ p1: ['', '', '', '', ''], p2: '', p3: ['', '', ''], informal: '', formal: '' });

function WordCount({ text, min, max }: { text: string; min: number; max: number }) {
  const n = countWords(text);
  const ok = n >= min && n <= max;
  return (
    <div className="small" style={{ marginTop: 4, color: ok ? 'var(--correct)' : n > max ? 'var(--wrong)' : 'var(--text-soft)' }}>
      {n} palabras · objetivo {min}-{max}
    </div>
  );
}

/** Runs one full Writing test. `exam` hides samples and calls onDone at the end. */
export function WritingSetRunner({
  set,
  exam = false,
  onDone,
}: {
  set: WritingSet;
  exam?: boolean;
  onDone?: () => void;
}) {
  const { refresh } = useProgress();
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(empty);
  const [finished, setFinished] = useState(false);

  function save() {
    const date = new Date().toISOString();
    const texts: [string, string][] = [
      ['p1', a.p1.map((x, k) => `${k + 1}) ${x}`).join('\n')],
      ['p2', a.p2],
      ['p3', a.p3.map((x, k) => `${set.part3[k].name}: ${x}`).join('\n\n')],
      ['p4', `INFORMAL:\n${a.informal}\n\nFORMAL:\n${a.formal}`],
    ];
    texts.forEach(([k, text]) =>
      addResponse({ id: uid('ws'), promptId: `${set.id}-${k}`, skill: 'writing', date, text }),
    );
    refresh();
    setFinished(true);
    onDone?.();
  }

  if (finished && !exam) return <WritingReview set={set} a={a} />;

  return (
    <div>
      <div className="notice">
        <strong>Contexto:</strong> {set.context}
      </div>
      <div className="row between" style={{ margin: '14px 0' }}>
        <span className="qcount">{PART_NAME[step]}</span>
        <Timer seconds={PART_TIME[step]} running resetKey={`${set.id}-${step}`} />
      </div>

      <div className="card">
        {step === 0 && (
          <>
            <p className="small muted">Responde a los mensajes con palabras sueltas o frases muy cortas (1-5 palabras).</p>
            {set.part1.map((q, k) => (
              <div key={k} className="task-row" style={{ marginBottom: 8 }}>
                <div className="task-prompt">{q}</div>
                <input
                  className="task-select"
                  value={a.p1[k]}
                  onChange={(e) => setA({ ...a, p1: a.p1.map((x, j) => (j === k ? e.target.value : x)) })}
                />
              </div>
            ))}
          </>
        )}

        {step === 1 && (
          <>
            <p style={{ whiteSpace: 'pre-wrap' }}>{set.part2}</p>
            <textarea className="write" value={a.p2} onChange={(e) => setA({ ...a, p2: e.target.value })} />
            <WordCount text={a.p2} min={20} max={30} />
          </>
        )}

        {step === 2 && (
          <>
            <p className="small muted">Responde a los tres miembros en frases completas (30-40 palabras cada respuesta).</p>
            {set.part3.map((m, k) => (
              <div key={k} style={{ marginBottom: 14 }}>
                <p style={{ marginBottom: 6 }}>
                  <strong>{m.name}:</strong> {m.message}
                </p>
                <textarea
                  className="write"
                  style={{ minHeight: 90 }}
                  value={a.p3[k]}
                  onChange={(e) => setA({ ...a, p3: a.p3.map((x, j) => (j === k ? e.target.value : x)) })}
                />
                <WordCount text={a.p3[k]} min={30} max={40} />
              </div>
            ))}
          </>
        )}

        {step === 3 && (
          <>
            <div className="passage" style={{ whiteSpace: 'pre-wrap' }}>{set.part4Info}</div>
            <p><strong>1.</strong> {set.part4Informal}</p>
            <textarea className="write" style={{ minHeight: 110 }} value={a.informal} onChange={(e) => setA({ ...a, informal: e.target.value })} />
            <WordCount text={a.informal} min={40} max={50} />
            <p style={{ marginTop: 18 }}><strong>2.</strong> {set.part4Formal}</p>
            <textarea className="write" value={a.formal} onChange={(e) => setA({ ...a, formal: e.target.value })} />
            <WordCount text={a.formal} min={120} max={150} />
          </>
        )}
      </div>

      <div className="row between" style={{ marginTop: 16 }}>
        <button className="btn btn-quiet" disabled={step === 0} onClick={() => setStep(step - 1)}>
          ← Parte anterior
        </button>
        {step < 3 ? (
          <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
            Siguiente parte →
          </button>
        ) : (
          <button className="btn btn-primary" onClick={save}>
            {exam ? 'Guardar y ver resultados →' : 'Terminar y ver ejemplos'}
          </button>
        )}
      </div>
    </div>
  );
}

function WritingReview({ set, a }: { set: WritingSet; a: Answers }) {
  const block = (title: string, mine: string, sample: string) => (
    <div className="card" style={{ marginBottom: 14 }}>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <div className="grid grid-2" style={{ gap: 12 }}>
        <div>
          <div className="small muted">Tu respuesta ({countWords(mine)} palabras)</div>
          <div className="passage" style={{ whiteSpace: 'pre-wrap' }}>{mine || '—'}</div>
        </div>
        <div>
          <div className="small muted">Ejemplo B2 ({countWords(sample)} palabras)</div>
          <div className="explain ok" style={{ whiteSpace: 'pre-wrap', marginTop: 0 }}>{sample}</div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="notice">
        Respuestas guardadas. Compáralas con los ejemplos: ¿cumples el número de palabras, respondes a todo
        lo que se pide y cambias de registro entre el email informal y el formal?
      </div>
      {block('Part 1', a.p1.join('\n'), set.samples.part1.join('\n'))}
      {block('Part 2', a.p2, set.samples.part2)}
      {set.part3.map((m, k) => block(`Part 3 · ${m.name}`, a.p3[k], set.samples.part3[k]))}
      {block('Part 4 · Informal', a.informal, set.samples.informal)}
      {block('Part 4 · Formal', a.formal, set.samples.formal)}
    </div>
  );
}

/** List of full writing tests to choose from. */
export function WritingSetPractice() {
  const [active, setActive] = useState<WritingSet | null>(null);
  const [nonce, setNonce] = useState(0);
  if (active) {
    return (
      <div>
        <button className="btn btn-quiet btn-sm" onClick={() => setActive(null)}>← Volver a la lista</button>
        <div className="spacer" />
        <WritingSetRunner key={nonce} set={active} />
      </div>
    );
  }
  return (
    <div>
      <p className="small muted">
        Cada test tiene las 4 partes con el mismo contexto, como en el examen. El temporizador de cada parte
        empieza solo; si se acaba, puedes seguir escribiendo, pero tenlo en cuenta.
      </p>
      <div className="task-list">
        {writingSets.map((s) => (
          <button key={s.id} className="card task-card" onClick={() => { setActive(s); setNonce((n) => n + 1); }}>
            <span>
              <strong style={{ fontFamily: 'var(--font-display)' }}>{s.context}</strong>
              <span className="small muted"> · 4 partes · 50 min</span>
            </span>
            <LevelBadge level={s.level} />
          </button>
        ))}
      </div>
    </div>
  );
}
