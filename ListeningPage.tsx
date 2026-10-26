import { SectionPractice } from '../components/SectionPractice';
import { TaskPractice } from '../components/TaskPractice';
import { PartTabs } from '../components/PartTabs';
import { listeningQuestions, listeningPassages, listeningPart2, listeningPart3, listeningPart4Passages } from '../data';
import { useState } from 'react';
import { QuestionRunner } from '../components/QuestionRunner';
import { useProgress } from '../state';
import { shuffle } from '../utils/helpers';
import type { Question } from '../types';

const bodyById = new Map(listeningPassages.map((p) => [p.id, p.body]));
const audioFor = (q: Question) => bodyById.get(q.id.slice(0, 5));
const part1 = listeningQuestions.filter((q) => q.type === 'specific-information');
const extra = listeningQuestions.filter((q) => q.type !== 'specific-information' && q.type !== 'monologue');

/** Part 4: two monologues at a time, each with its two questions together. */
function MonologuePractice() {
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');
  const [session, setSession] = useState<Question[] | null>(null);
  const [nonce, setNonce] = useState(0);
  const { refresh } = useProgress();
  const start = () => {
    setSession(shuffle(listeningPart4Passages).slice(0, 2).flatMap((p) => p.questions));
    setNonce((n) => n + 1);
  };
  if (session)
    return (
      <div>
        <button className="btn btn-quiet btn-sm" onClick={() => setSession(null)}>← Volver</button>
        <div className="spacer" />
        <QuestionRunner key={nonce} skill="listening" questions={session} mode={mode} audioFor={audioFor} onFinish={() => refresh()} />
        <div className="spacer" />
        <button className="btn btn-ghost" onClick={start}>🔄 Otros dos monólogos</button>
      </div>
    );
  return (
    <div className="card">
      <p className="small muted" style={{ marginTop: 0 }}>
        Como en el examen: dos monólogos largos, cada uno con dos preguntas sobre la opinión o actitud del
        hablante (3 opciones). {listeningPart4Passages.length} monólogos disponibles.
      </p>
      <div className="tabs">
        <button className={`tab${mode === 'practice' ? ' active' : ''}`} onClick={() => setMode('practice')}>Práctica</button>
        <button className={`tab${mode === 'exam' ? ' active' : ''}`} onClick={() => setMode('exam')}>Examen</button>
      </div>
      <button className="btn btn-primary" onClick={start}>Empezar →</button>
    </div>
  );
}

export function ListeningPage() {
  return (
    <PartTabs
      title="Listening"
      intro="Examen real: 17 tareas en unos 40 minutos; cada grabación se puede escuchar dos veces. Aquí el audio se genera con la voz del navegador (TTS)."
      tabs={[
        {
          label: 'Part 1 · Información',
          content: (
            <SectionPractice
              embedded
              officialToggle
              skill="listening"
              title="Listening"
              intro="Mensajes y diálogos cortos: identifica un dato concreto (hora, lugar, número, persona…)."
              questions={part1}
              audioFor={audioFor}
              defaultCount={10}
            />
          ),
        },
        {
          label: 'Part 2 · Hablantes',
          content: (
            <TaskPractice
              tasks={listeningPart2}
              intro="Cuatro personas hablan del mismo tema. Relaciona a cada una con una frase; sobran dos."
            />
          ),
        },
        {
          label: 'Part 3 · Hombre / mujer',
          content: (
            <TaskPractice
              tasks={listeningPart3}
              intro="Un hombre y una mujer discuten un tema. ¿Quién expresa cada opinión: él, ella o ambos? Si tu navegador tiene varias voces en inglés, cada hablante usa una distinta."
            />
          ),
        },
        { label: 'Part 4 · Monólogos', content: <MonologuePractice /> },
        {
          label: 'Banco extra',
          content: (
            <SectionPractice
              embedded
              officialToggle
              skill="listening"
              title="Listening"
              intro="Diálogos y textos con preguntas de inferencia y matching (formato libre, útil como repaso)."
              questions={extra}
              audioFor={audioFor}
              defaultCount={8}
            />
          ),
        },
      ]}
    />
  );
}
