import { useState } from 'react';
import { writingPrompts } from '../data';
import type { WritingPrompt } from '../types';
import { LevelBadge } from '../components/Bits';
import { Timer } from '../components/Timer';
import { addResponse, getResponse, uid } from '../utils/storage';
import { countWords } from '../utils/helpers';
import { useProgress } from '../state';
import { PartTabs } from '../components/PartTabs';
import { WritingSetPractice } from '../components/WritingSetRunner';

const REVIEW = [
  'He respondido a todas las partes de la tarea',
  'El registro (formal/informal) es el adecuado',
  'He usado conectores para enlazar las ideas',
  'He variado las estructuras gramaticales',
  'He revisado ortografía y puntuación',
  'Cumplo con el número mínimo de palabras',
];

const RUBRIC: { band: string; desc: string }[] = [
  { band: 'C1 / alto B2', desc: 'Cumple la tarea con soltura; ideas bien organizadas; amplio repertorio léxico y gramatical; errores mínimos que no dificultan la comprensión.' },
  { band: 'B2 (objetivo)', desc: 'Cumple todos los puntos de la tarea; texto coherente y cohesionado; buen control gramatical con algún error; registro apropiado.' },
  { band: 'B1', desc: 'Responde a la tarea de forma básica; ideas simples enlazadas con conectores frecuentes; errores que a veces dificultan la lectura.' },
  { band: 'Por debajo de B1', desc: 'Cumple la tarea de forma parcial; vocabulario y estructuras limitados; errores frecuentes que afectan a la comprensión.' },
];

const PARTS = [1, 2, 3, 4] as const;
const PART_NAMES: Record<number, string> = {
  1: 'Part 1 · Respuestas cortas',
  2: 'Part 2 · Texto breve informal',
  3: 'Part 3 · Tres respuestas sociales',
  4: 'Part 4 · Email formal (practica también el informal en el test completo)',
};

export function WritingPage() {
  return (
    <PartTabs
      title="Writing"
      intro="Examen real: 4 partes enlazadas por un mismo contexto (un club o curso), 50 minutos. Tiempos recomendados: P1 3 min, P2 7, P3 10, P4 30. Sin nota automática: guardas tu texto y lo comparas con un ejemplo B2 y la rúbrica."
      tabs={[
        { label: 'Test completo · 4 partes', content: <WritingSetPractice /> },
        { label: 'Práctica por partes', content: <WritingByPart /> },
      ]}
    />
  );
}

function WritingByPart() {
  const { refresh } = useProgress();
  const [part, setPart] = useState<1 | 2 | 3 | 4>(1);
  const [idx, setIdx] = useState(0);

  const pool = writingPrompts.filter((p) => p.part === part);
  const prompt = pool[idx % pool.length] as WritingPrompt;

  return (
    <div>
      <div className="tabs">
        {PARTS.map((p) => (
          <button
            key={p}
            className={`tab${part === p ? ' active' : ''}`}
            onClick={() => {
              setPart(p);
              setIdx(0);
            }}
          >
            Part {p}
          </button>
        ))}
      </div>
      <p className="small muted" style={{ marginTop: -12, marginBottom: 18 }}>
        {PART_NAMES[part]}
      </p>

      <WritingCard key={prompt.id} prompt={prompt} onSaved={refresh} onNext={() => setIdx((i) => i + 1)} />
    </div>
  );
}

function WritingCard({
  prompt,
  onSaved,
  onNext,
}: {
  prompt: WritingPrompt;
  onSaved: () => void;
  onNext: () => void;
}) {
  const existing = getResponse(prompt.id);
  const [text, setText] = useState(existing?.text ?? '');
  const [running, setRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const words = countWords(text);
  const meetsMin = words >= prompt.minWords;

  function submit() {
    setRunning(false);
    setSubmitted(true);
    addResponse({
      id: uid('wr'),
      promptId: prompt.id,
      skill: 'writing',
      date: new Date().toISOString(),
      text,
      checklist: checks,
    });
    onSaved();
  }

  return (
    <div className="card">
      <div className="qhead">
        <span className="qcount">
          Mínimo {prompt.minWords} palabras · {Math.round(prompt.seconds / 60)} min
        </span>
        <LevelBadge level={prompt.level} />
      </div>

      <h3 style={{ marginBottom: 4 }}>{prompt.title}</h3>
      <p style={{ whiteSpace: 'pre-wrap', fontSize: 15 }}>{prompt.prompt}</p>

      <div className="row between" style={{ margin: '10px 0 12px' }}>
        <Timer seconds={prompt.seconds} running={running} resetKey={prompt.id} onExpire={() => setRunning(false)} />
        {!running ? (
          <button className="btn btn-ghost btn-sm" onClick={() => setRunning(true)}>
            ▶ Iniciar temporizador
          </button>
        ) : (
          <button className="btn btn-quiet btn-sm" onClick={() => setRunning(false)}>
            ⏸ Pausar
          </button>
        )}
      </div>

      <textarea
        className="write"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu respuesta aquí en inglés…"
      />
      <div className="row between small" style={{ marginTop: 8 }}>
        <span className={meetsMin ? 'muted' : ''} style={{ color: meetsMin ? undefined : 'var(--wrong)' }}>
          {words} palabras {meetsMin ? '✓' : `· faltan ${prompt.minWords - words} para el mínimo`}
        </span>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Checklist de revisión</h3>
        {REVIEW.map((r) => (
          <label key={r} className="check">
            <input
              type="checkbox"
              checked={!!checks[r]}
              onChange={() => setChecks((c) => ({ ...c, [r]: !c[r] }))}
            />
            {r}
          </label>
        ))}
      </div>

      <div className="row between" style={{ marginTop: 18 }}>
        <button className="btn btn-primary" onClick={submit} disabled={text.trim() === ''}>
          Enviar y guardar
        </button>
        <button className="btn btn-quiet" onClick={onNext}>
          Otra tarea →
        </button>
      </div>

      {submitted && (
        <>
          <div className="explain ok" style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
            <strong>Ejemplo de respuesta B2</strong>
            <br />
            {prompt.sampleAnswer}
          </div>

          <h3 style={{ marginTop: 24 }}>Rúbrica orientativa (sin nota automática)</h3>
          <table className="rubric">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Banda</th>
                <th>Descriptor</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC.map((r) => (
                <tr key={r.band}>
                  <td>
                    <strong>{r.band}</strong>
                  </td>
                  <td>{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small muted" style={{ marginTop: 10 }}>
            Compara tu texto con el ejemplo y sitúate en la banda que mejor te describa. La nota real
            del Aptis la asigna un examinador.
          </p>
        </>
      )}
    </div>
  );
}
