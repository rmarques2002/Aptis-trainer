import { SectionPractice } from '../components/SectionPractice';
import { TaskPractice } from '../components/TaskPractice';
import { PartTabs } from '../components/PartTabs';
import {
  readingQuestions, readingPassages, readingPart1, readingPart2, readingPart3, readingPart4,
} from '../data';

// Extra bank: attach the passage body as context so it shows above the question.
const passageById = new Map(readingPassages.map((p) => [p.id, p]));
const withContext = readingQuestions.map((q) => {
  const pass = passageById.get(q.id.slice(0, 5));
  return pass && pass.type !== 'sentence-comprehension'
    ? { ...q, context: `${pass.title}\n\n${pass.body}` }
    : q;
});

export function ReadingPage() {
  return (
    <PartTabs
      title="Reading"
      intro="Examen real: 4 partes de dificultad creciente en 35 minutos."
      tabs={[
        {
          label: 'Part 1 · Huecos',
          content: (
            <TaskPractice
              tasks={readingPart1}
              intro="Un email o nota corta con 5 huecos. Elige la palabra correcta de 3 opciones para cada frase."
            />
          ),
        },
        {
          label: 'Part 2 · Ordenar',
          content: (
            <TaskPractice
              tasks={readingPart2}
              unit="texto"
              intro="Seis frases de un texto; la primera está en su sitio. Asigna a cada una de las otras cinco su posición (2-6). En el examen hay dos textos."
            />
          ),
        },
        {
          label: 'Part 3 · Opiniones',
          content: (
            <TaskPractice
              tasks={readingPart3}
              intro="Cuatro personas opinan sobre un tema. Relaciona cada una de las 7 afirmaciones con la persona que la expresa (se pueden repetir)."
            />
          ),
        },
        {
          label: 'Part 4 · Titulares',
          content: (
            <TaskPractice
              tasks={readingPart4}
              unit="texto"
              intro="Texto largo de 7 párrafos y 8 titulares. Elige el titular de cada párrafo: sobra uno."
            />
          ),
        },
        {
          label: 'Banco extra',
          content: (
            <SectionPractice
              embedded
              skill="reading"
              title="Reading"
              intro="Preguntas de comprensión tipo test sobre textos variados (formato libre, útil como repaso)."
              questions={withContext}
              defaultCount={10}
            />
          ),
        },
      ]}
    />
  );
}
