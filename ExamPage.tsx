import { useMemo, useState } from 'react';
import {
  pureGrammar,
  listeningQuestions,
  listeningPassages,
  speakingPrompts,
  writingSets,
  vocabTasks,
  readingPart1,
  readingPart2,
  readingPart3,
  readingPart4,
  listeningPart2,
  listeningPart3,
  listeningPart4Passages,
} from '../data';
import type { Question, Task, SpeakingPrompt, WritingSet } from '../types';
import { QuestionRunner, type RunnerResult } from '../components/QuestionRunner';
import { TaskRunner } from '../components/TaskRunner';
import { WritingSetRunner } from '../components/WritingSetRunner';
import { Timer } from '../components/Timer';
import { LevelBadge } from '../components/Bits';
import { SceneView, QuestionSteps } from '../components/SceneView';
import { sample, seededSample, trimOptions } from '../utils/helpers';
import { addAttempt, addResponse, uid } from '../utils/storage';
import { useProgress } from '../state';

type Stage = 'intro' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'writing' | 'results';
type AutoSkill = 'grammar' | 'reading' | 'listening';

const bodyById = new Map(listeningPassages.map((p) => [p.id, p.body]));
const listeningAudio = (q: Question) => bodyById.get(q.id.slice(0, 5));

// Official Aptis ESOL General timings (minutes → seconds).
const TIME = { grammar: 25 * 60, reading: 35 * 60, listening: 40 * 60, speaking: 12 * 60, writing: 50 * 60 };

type FormDef = { id: string; name: string; desc: string; seed: string | null };
const FORMS: FormDef[] = [
  { id: 'A', name: 'Simulacro A', desc: 'Formato oficial completo', seed: 'aptis-form-A' },
  { id: 'B', name: 'Simulacro B', desc: 'Formato oficial completo', seed: 'aptis-form-B' },
  { id: 'C', name: 'Simulacro C', desc: 'Formato oficial completo', seed: 'aptis-form-C' },
  { id: 'D', name: 'Simulacro D', desc: 'Formato oficial completo', seed: 'aptis-form-D' },
  { id: 'E', name: 'Simulacro E', desc: 'Formato oficial completo', seed: 'aptis-form-E' },
  { id: 'R', name: 'Aleatorio', desc: 'Mezcla nueva cada vez', seed: null },
];

type Block =
  | { type: 'mcq'; label: string; qs: Question[]; audio?: boolean }
  | { type: 'tasks'; label: string; tasks: Task[] };

interface Form {
  core: Block[];
  reading: Block[];
  listening: Block[];
  speaking: SpeakingPrompt[];
  writing: WritingSet;
}

const lp1 = listeningQuestions.filter((q) => q.type === 'specific-information');

function buildForm(f: FormDef): Form {
  const pick = <T,>(arr: T[], n: number, key: string) =>
    f.seed ? seededSample(arr, n, `${f.seed}-${key}`) : sample(arr, n);
  const one = <T,>(arr: T[], key: string) => pick(arr, 1, key)[0];

  // Vocabulary: one task of each official type + one extra = 25 items.
  const kinds = ['vocab-pairs', 'vocab-definition', 'vocab-usage', 'vocab-combination'] as const;
  const vocab = kinds.map((k) => one(vocabTasks.filter((t) => t.kind === k), `v-${k}`));
  const extra = one(vocabTasks.filter((t) => !vocab.includes(t)), 'v-extra');

  const sp = (part: number, n: number, key: string) => pick(speakingPrompts.filter((p) => p.part === part), n, key);

  return {
    core: [
      { type: 'mcq', label: 'Part 1 · Grammar (25)', qs: pick(pureGrammar, 25, 'g').map((q) => trimOptions(q, 3)) },
      { type: 'tasks', label: 'Part 2 · Vocabulary (25)', tasks: pick([...vocab, extra], 5, 'v-order') },
    ],
    reading: [
      { type: 'tasks', label: 'Part 1 · Huecos', tasks: [one(readingPart1, 'r1')] },
      { type: 'tasks', label: 'Part 2 · Ordenar', tasks: pick(readingPart2, 2, 'r2') },
      { type: 'tasks', label: 'Part 3 · Opiniones', tasks: [one(readingPart3, 'r3')] },
      { type: 'tasks', label: 'Part 4 · Titulares', tasks: [one(readingPart4, 'r4')] },
    ],
    listening: [
      { type: 'mcq', label: 'Part 1 · Información', audio: true, qs: pick(lp1, 13, 'l1').map((q) => trimOptions(q, 3)) },
      { type: 'tasks', label: 'Part 2 · Hablantes', tasks: [one(listeningPart2, 'l2')] },
      { type: 'tasks', label: 'Part 3 · Hombre / mujer', tasks: [one(listeningPart3, 'l3')] },
      { type: 'mcq', label: 'Part 4 · Monólogos', audio: true, qs: pick(listeningPart4Passages, 2, 'l4').flatMap((p) => p.questions) },
    ],
    speaking: [...sp(1, 3, 's1'), ...sp(2, 1, 's2'), ...sp(3, 1, 's3'), ...sp(4, 1, 's4')],
    writing: one(writingSets, 'w'),
  };
}

const countBlocks = (bs: Block[]) =>
  bs.reduce(
    (s, b) =>
      s +
      (b.type === 'mcq'
        ? b.qs.length
        : b.tasks.reduce((n, t) => n + (t.items.length || (t.sentences ? t.sentences.length - 1 : 0)), 0)),
    0,
  );

export function ExamPage() {
  const { refresh } = useProgress();
  const [stage, setStage] = useState<Stage>('intro');
  const [results, setResults] = useState<Partial<Record<AutoSkill, RunnerResult>>>({});
  const [formDef, setFormDef] = useState<FormDef>(FORMS[0]);
  const [runKey, setRunKey] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const form = useMemo(() => buildForm(formDef), [formDef, runKey]);

  function recordAuto(skill: AutoSkill, r: RunnerResult) {
    addAttempt({
      id: uid('exam'), skill, date: new Date().toISOString(), total: r.total, correct: r.correct,
      wrongTopics: r.wrongTopics, wrongItems: r.wrongItems, mode: 'exam',
    });
    refresh();
  }

  if (stage === 'intro') {
    const rows: [string, string, string, string][] = [
      ['Grammar & Vocabulary', `${countBlocks(form.core)} preguntas`, '25 min', 'Automática'],
      ['Reading (4 partes)', `${countBlocks(form.reading)} ítems`, '35 min', 'Automática'],
      ['Listening (4 partes)', `${countBlocks(form.listening)} ítems`, '40 min', 'Automática'],
      ['Speaking (4 partes)', '4 partes · 12 preguntas', '≈12 min', 'Autoevaluación'],
      ['Writing (4 partes)', '1 test completo', '50 min', 'Ejemplos B2'],
    ];
    return (
      <div>
        <h1>Simulacro completo</h1>
        <p className="lead">
          Examen con la estructura oficial de Aptis ESOL General: mismas partes, mismos tipos de tarea y
          mismos tiempos. Las preguntas son originales. Al final verás la corrección de Grammar &
          Vocabulary, Reading y Listening.
        </p>

        <div className="card">
          <h3>Elige un simulacro</h3>
          <p className="small muted">
            A-E son fijos: puedes repetirlos y comparar. Como el banco es limitado, algunos ejercicios se
            repiten entre simulacros. "Aleatorio" arma una combinación nueva cada vez.
          </p>
          <div className="grid grid-3" style={{ gap: 12 }}>
            {FORMS.map((f) => (
              <button
                key={f.id}
                className={`opt${formDef.id === f.id ? ' selected' : ''}`}
                style={{ textAlign: 'left', flexDirection: 'column', alignItems: 'flex-start' }}
                onClick={() => {
                  setFormDef(f);
                  if (!f.seed) setRunKey((k) => k + 1);
                }}
              >
                <strong style={{ fontFamily: 'var(--font-display)' }}>{f.name}</strong>
                <span className="small muted">{f.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Estructura de {formDef.name}</h3>
          <table className="rubric">
            <thead>
              <tr><th>Sección</th><th>Contenido</th><th>Tiempo</th><th>Corrección</th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
          <div className="notice" style={{ marginTop: 16 }}>
            No verás soluciones hasta el final de cada sección y tendrás que responder todo para avanzar.
            Cada audio se puede escuchar dos veces.
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (!formDef.seed) setRunKey((k) => k + 1);
              setResults({});
              setStage('grammar');
            }}
          >
            Empezar {formDef.name} →
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    const auto: [AutoSkill, string][] = [
      ['grammar', 'Grammar & Vocabulary'],
      ['reading', 'Reading'],
      ['listening', 'Listening'],
    ];
    const totalC = auto.reduce((s, [k]) => s + (results[k]?.correct ?? 0), 0);
    const totalT = auto.reduce((s, [k]) => s + (results[k]?.total ?? 0), 0);
    const pct = totalT ? Math.round((totalC / totalT) * 100) : 0;
    const color = pct >= 75 ? 'var(--correct)' : pct >= 50 ? 'var(--warn)' : 'var(--wrong)';
    const band = pct >= 75 ? 'B2 / B2.2' : pct >= 55 ? 'B1-B2' : 'B1 o inferior';

    return (
      <div>
        <h1>Resultados · {formDef.name}</h1>
        <p className="lead">Corrección automática de las secciones objetivas.</p>
        <div className="card center" style={{ marginBottom: 20 }}>
          <div className="result-ring" style={{ background: color }}>{pct}%</div>
          <h2>Nivel orientativo: {band}</h2>
          <p className="muted">{totalC} de {totalT} respuestas correctas</p>
          <p className="small muted">
            Referencia aproximada basada en tu porcentaje de aciertos. No reproduce la escala 0-50 del
            British Council.
          </p>
        </div>
        <div className="grid grid-3" style={{ marginBottom: 20 }}>
          {auto.map(([k, label]) => {
            const r = results[k];
            const p = r && r.total ? Math.round((r.correct / r.total) * 100) : 0;
            return (
              <div className="card stat" key={k}>
                <div className="num small">{r ? `${p}%` : '—'}</div>
                <div className="lbl">{label}</div>
                <div className="sub">{r ? `${r.correct}/${r.total}` : 'no realizada'}</div>
              </div>
            );
          })}
        </div>
        <div className="card">
          <h3>Speaking y Writing</h3>
          <p className="small muted">
            Tus respuestas están guardadas. En la sección Writing (test completo) puedes comparar cada parte
            con un ejemplo B2. Estas destrezas las corrige un examinador en el examen real.
          </p>
        </div>
        <div className="spacer" />
        <button className="btn btn-primary" onClick={() => { setResults({}); setStage('intro'); }}>
          Hacer otro simulacro
        </button>
      </div>
    );
  }

  const autoStage = (skill: AutoSkill, blocks: Block[], next: Stage, label: string) => (
    <ExamSection
      key={skill}
      label={label}
      seconds={TIME[skill]}
      blocks={blocks}
      skill={skill}
      onDone={(r) => {
        setResults((prev) => ({ ...prev, [skill]: r }));
        recordAuto(skill, r);
        setStage(next);
      }}
    />
  );

  if (stage === 'grammar') return autoStage('grammar', form.core, 'reading', 'Grammar & Vocabulary');
  if (stage === 'reading') return autoStage('reading', form.reading, 'listening', 'Reading');
  if (stage === 'listening') return autoStage('listening', form.listening, 'speaking', 'Listening');

  if (stage === 'speaking') {
    return <ExamSpeaking prompts={form.speaking} onDone={() => setStage('writing')} onSave={refresh} />;
  }

  if (stage === 'writing') {
    return (
      <div>
        <div className="row between" style={{ marginBottom: 18 }}>
          <h1 style={{ margin: 0 }}>Writing</h1>
          <Timer seconds={TIME.writing} running resetKey="exam-writing" />
        </div>
        <WritingSetRunner set={form.writing} exam onDone={() => setStage('results')} />
      </div>
    );
  }

  return null;
}

// ---- Auto-corrected section: runs its blocks in order and adds up the score ----
function ExamSection({
  label,
  seconds,
  blocks,
  skill,
  onDone,
}: {
  label: string;
  seconds: number;
  blocks: Block[];
  skill: AutoSkill;
  onDone: (r: RunnerResult) => void;
}) {
  const [b, setB] = useState(0);
  const [acc, setAcc] = useState<RunnerResult>({ total: 0, correct: 0, wrongTopics: [], wrongItems: [] });
  const block = blocks[b];

  function next(r: RunnerResult) {
    const sum: RunnerResult = {
      total: acc.total + r.total,
      correct: acc.correct + r.correct,
      wrongTopics: [...acc.wrongTopics, ...r.wrongTopics],
      wrongItems: [...acc.wrongItems, ...r.wrongItems],
    };
    if (b < blocks.length - 1) {
      setAcc(sum);
      setB(b + 1);
      window.scrollTo?.(0, 0);
    } else onDone(sum);
  }

  return (
    <div>
      <div className="row between" style={{ marginBottom: 6 }}>
        <h1 style={{ margin: 0 }}>{label}</h1>
        <Timer seconds={seconds} running resetKey={label} />
      </div>
      <p className="small muted" style={{ marginBottom: 16 }}>
        {block.label} · bloque {b + 1} de {blocks.length}
      </p>
      {block.type === 'mcq' ? (
        <QuestionRunner
          key={b}
          skill={skill}
          questions={block.qs}
          mode="exam"
          audioFor={block.audio ? listeningAudio : undefined}
          recordAttempt={false}
          onFinish={next}
        />
      ) : (
        <TaskRunner key={b} tasks={block.tasks} mode="exam" recordAttempt={false} onFinish={next} />
      )}
    </div>
  );
}

// ---- Speaking within the exam (pictures, chained questions, Part 4 prep) ----
function ExamSpeaking({
  prompts,
  onDone,
  onSave,
}: {
  prompts: SpeakingPrompt[];
  onDone: () => void;
  onSave: () => void;
}) {
  const [i, setI] = useState(0);
  const p = prompts[i];
  const qs = p.questions;
  const [phase, setPhase] = useState<'prep' | 'speak'>(p.prepSeconds ? 'prep' : 'speak');
  const [qIdx, setQIdx] = useState(0);
  const [running, setRunning] = useState(true);
  const lastQ = !qs || qIdx >= qs.length - 1;

  function saveAndNext() {
    addResponse({ id: uid('sp'), promptId: p.id, skill: 'speaking', date: new Date().toISOString() });
    onSave();
    if (i < prompts.length - 1) {
      const np = prompts[i + 1];
      setI(i + 1);
      setQIdx(0);
      setPhase(np.prepSeconds ? 'prep' : 'speak');
      setRunning(true);
    } else onDone();
  }

  const secs = phase === 'prep' ? p.prepSeconds! : p.seconds;

  return (
    <div>
      <div className="row between" style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>Speaking</h1>
        <Timer
          seconds={secs}
          running={running}
          resetKey={`${p.id}-${phase}-${qIdx}`}
          onExpire={() => {
            if (phase === 'prep') setPhase('speak');
            else if (!lastQ) setQIdx(qIdx + 1);
            else setRunning(false);
          }}
        />
      </div>
      <div className="card">
        <div className="qhead">
          <span className="qcount">
            Tarea {i + 1} de {prompts.length} · Part {p.part} ·{' '}
            {phase === 'prep'
              ? 'Preparación (toma notas)'
              : `Habla ${p.seconds >= 60 ? `${p.seconds / 60} min` : `${p.seconds} s`}${qs ? ` · pregunta ${qIdx + 1} de ${qs.length}` : ''}`}
          </span>
          <LevelBadge level={p.level} />
        </div>
        <p style={{ fontSize: 17, fontWeight: 600, whiteSpace: 'pre-wrap' }}>{p.prompt}</p>
        <SceneView scenes={p.scenes} />
        {qs && <QuestionSteps questions={qs} current={qIdx} />}
        <p className="small muted">
          Habla en voz alta hasta que se acabe el tiempo. Para grabarte y autoevaluarte, usa la sección
          Speaking.
        </p>
        {phase === 'prep' ? (
          <button className="btn btn-ghost" onClick={() => setPhase('speak')}>Empezar a hablar ya →</button>
        ) : !lastQ ? (
          <button className="btn btn-ghost" onClick={() => setQIdx(qIdx + 1)}>Siguiente pregunta →</button>
        ) : (
          <button className="btn btn-primary" onClick={saveAndNext}>
            {i < prompts.length - 1 ? 'Siguiente tarea →' : 'Terminar Speaking →'}
          </button>
        )}
      </div>
    </div>
  );
}
