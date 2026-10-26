import { SectionPractice } from '../components/SectionPractice';
import { TaskPractice } from '../components/TaskPractice';
import { PartTabs } from '../components/PartTabs';
import { pureGrammar, vocabMCQ, vocabTasks } from '../data';

const kinds = [
  { kind: 'vocab-pairs', label: 'Word pairs', desc: 'Elige la palabra de la lista con el significado más parecido (sinónimos).' },
  { kind: 'vocab-definition', label: 'Definiciones', desc: 'Completa cada definición con una palabra de la lista.' },
  { kind: 'vocab-usage', label: 'Uso en frase', desc: 'Completa cada frase con la palabra adecuada.' },
  { kind: 'vocab-combination', label: 'Combinaciones', desc: 'Elige la palabra que suele combinarse con la de la izquierda (colocaciones).' },
] as const;

export function GrammarPage() {
  return (
    <PartTabs
      title="Grammar & Vocabulary"
      intro="Examen real: 25 preguntas de gramática (3 opciones) + 25 de vocabulario en 5 tareas de 5 ítems, en 25 minutos. Esta parte no da nivel MCER propio: su nota se usa para ajustar el nivel de las demás destrezas."
      tabs={[
        {
          label: 'Grammar · 3 opciones',
          content: (
            <SectionPractice
              embedded
              officialToggle
              skill="grammar"
              title="Grammar"
              intro="Completa la frase eligiendo la opción correcta. Con el formato oficial activado, cada pregunta muestra 3 opciones, como en el examen."
              questions={pureGrammar}
              defaultCount={25}
            />
          ),
        },
        ...kinds.map((k) => ({
          label: `Vocab · ${k.label}`,
          content: (
            <TaskPractice
              tasks={vocabTasks.filter((t) => t.kind === k.kind)}
              intro={`${k.desc} Cada tarea tiene 5 ítems y 10 palabras: sobran 5.`}
            />
          ),
        })),
        {
          label: 'Vocab extra · tipo test',
          content: (
            <SectionPractice
              embedded
              skill="grammar"
              title="Vocabulary"
              intro="Repaso de vocabulario en formato tipo test: phrasal verbs, colocaciones, word formation, sinónimos, antónimos e idioms. No es el formato del examen, pero refuerza el léxico que sí entra."
              questions={vocabMCQ}
              defaultCount={15}
            />
          ),
        },
      ]}
    />
  );
}
