// Exam guide: official format (British Council, "Prepare for Aptis ESOL General")
// plus the external resources linked in the user's study guide.

type L = { label: string; url: string; note?: string };

const OFFICIAL: L[] = [
  { label: 'Prepare for Aptis ESOL General (British Council)', url: 'https://www.britishcouncil.org/exam/english/aptis/prepare-general', note: 'Formato, consejos y enlaces a los practice tests oficiales.' },
  { label: 'Practice test oficial · Grammar & Vocabulary', url: 'https://admin.testreach.com/rest/auth-service/v1/deeplinks/987654789474/practice' },
  { label: 'Answer key · Grammar & Vocabulary', url: 'https://www.britishcouncil.org/sites/default/files/aptis_general_-_practice_test_answer_key_grammar_and_vocabulary_0.pdf' },
  { label: 'Practice test oficial · Listening', url: 'https://admin.testreach.com/rest/auth-service/v1/deeplinks/987654789473/practice' },
  { label: 'Answer key · Listening', url: 'https://www.britishcouncil.org/sites/default/files/aptis_general_-_practice_test_answer_key_listening.pdf' },
  { label: 'Practice test oficial · Reading', url: 'https://admin.testreach.com/rest/auth-service/v1/deeplinks/987654789475/practice' },
  { label: 'Answer key · Reading', url: 'https://www.britishcouncil.org/sites/default/files/aptis_general_-_practice_test_answer_key_reading.pdf' },
  { label: 'Practice test oficial · Speaking', url: 'https://admin.testreach.com/rest/auth-service/v1/deeplinks/987654789472/practice' },
  { label: 'Escalas de corrección · Speaking', url: 'https://www.britishcouncil.org/sites/default/files/aptis_general_-_practice_test_answer_key_speaking.pdf' },
  { label: 'Practice test oficial · Writing', url: 'https://admin.testreach.com/rest/auth-service/v1/deeplinks/987654789476/practice' },
  { label: 'Escalas de corrección · Writing', url: 'https://www.britishcouncil.org/sites/default/files/aptis_general_-_practice_test_answer_key_writing.pdf' },
  { label: 'Aptis ESOL General – Test format overview (PDF)', url: 'https://www.britishcouncil.org/sites/default/files/aptis_esol_general_test_format_overview_2023.pdf' },
  { label: 'Aptis en España: información e inscripción', url: 'https://www.britishcouncil.es/examenes/aptis' },
];

const GUIDE: { section: string; links: L[] }[] = [
  {
    section: 'Speaking',
    links: [
      { label: 'Vídeo teórico', url: 'https://youtu.be/Afhec1xl7JI' },
      { label: 'Apuntes (Suit Academy, PDF)', url: 'https://suitacademy.com/wp-content/uploads/2021/05/Lesson-1-Breaking-Aptis-Suit-Academy.pdf' },
      { label: 'Examen de prueba (vídeo)', url: 'https://www.youtube.com/watch?v=0I1MESKkAc0' },
    ],
  },
  {
    section: 'Listening',
    links: [
      { label: 'Teoría (vídeo)', url: 'https://youtu.be/d6Ft-c2oRS0' },
      { label: 'Examen de prueba (vídeo)', url: 'https://www.youtube.com/watch?v=1MQtncgc6Ls', note: 'En la guía, “Prueba 1” y “Prueba 2” enlazan al mismo vídeo.' },
    ],
  },
  {
    section: 'Grammar & Vocabulary',
    links: [
      { label: 'Apuntes de vocabulario (Wuolah)', url: 'https://wuolah.com/apuntes/ingles-b2/aptis-examenes-y-apuntes-vocabulario-aptis-pdf-3970064', note: 'Puede requerir registro.' },
      { label: 'Apuntes de gramática (Wuolah)', url: 'https://wuolah.com/apuntes/ingles-b1/grammar-aptis-pdf-9405105', note: 'Puede requerir registro.' },
      { label: 'Ejemplos de gramática (vídeo)', url: 'https://www.youtube.com/watch?v=uWfnFOimhKA' },
      { label: 'Ejemplos de vocabulario (lista de vídeos)', url: 'https://www.youtube.com/watch?v=SjlDaqQTrQw&list=PL85PYDtYYquhjhW1PjrUMJe5cXMdH45h3' },
    ],
  },
  {
    section: 'Reading',
    links: [
      { label: 'Teoría del examen (vídeo)', url: 'https://www.youtube.com/watch?v=btbJLM6KDw8' },
      { label: 'Ejercicios de repaso (Wuolah)', url: 'https://wuolah.com/tema/vocabulario-aptis/explorar?searchText=APTIS+READING+APUNTES&folder=544192', note: 'Puede requerir registro.' },
    ],
  },
  {
    section: 'Writing',
    links: [
      { label: 'Teoría del examen (vídeo)', url: 'https://www.youtube.com/watch?v=mJHpjpmnZZQ' },
      { label: 'Notas y apuntes (Wuolah)', url: 'https://wuolah.com/home/explorar?searchText=APTIS+WRITING&document=9448423', note: 'Puede requerir registro.' },
    ],
  },
  {
    section: 'Exámenes de práctica',
    links: [
      { label: 'Aptisweb · Aptis General (3 simulacros)', url: 'https://aptisweb.com/aptis-exam-library/aptis-general', note: 'Web no oficial: sus tests son simulaciones propias, no exámenes del British Council.' },
    ],
  },
];

const FORMAT: { skill: string; time: string; parts: string[] }[] = [
  {
    skill: 'Grammar & Vocabulary',
    time: '25 min · 50 preguntas',
    parts: [
      'Grammar: 25 frases para completar eligiendo una opción.',
      'Vocabulary: 25 ítems de cuatro tipos: definiciones, pares de palabras (sinónimos), uso en frase y combinaciones frecuentes.',
      'No da nivel MCER propio: la puntuación se usa para ajustar el nivel de las demás destrezas.',
    ],
  },
  {
    skill: 'Reading',
    time: '35 min · 4 partes',
    parts: [
      'Part 1 · Comprensión de frases: una nota o email con 5 huecos.',
      'Part 2 · Cohesión: dos textos de 6 frases; la primera está en su sitio, ordena las otras 5.',
      'Part 3 · Opiniones: 4 párrafos de personas distintas y 7 afirmaciones para emparejar.',
      'Part 4 · Texto largo (~750 palabras): elige el titular de cada párrafo; siempre sobra uno.',
    ],
  },
  {
    skill: 'Listening',
    time: '≈40 min · 17 tareas',
    parts: [
      'Part 1 · Reconocer información concreta (teléfono, hora, lugar…) en mensajes o diálogos cortos.',
      'Part 2 · Cuatro personas hablan de un tema: empareja a cada una con una información.',
      'Part 3 · Un hombre y una mujer discuten: identifica quién expresa cada opinión.',
      'Part 4 · Dos monólogos largos: identifica la opinión o punto de vista del hablante.',
      'Cada grabación se puede escuchar dos veces.',
    ],
  },
  {
    skill: 'Speaking',
    time: '≈12 min · 4 partes',
    parts: [
      'Part 1 · Tres preguntas personales, 30 s cada una.',
      'Part 2 · Describir una foto y responder dos preguntas, 45 s cada respuesta.',
      'Part 3 · Describir y comparar dos fotos y responder dos preguntas, 45 s cada respuesta.',
      'Part 4 · Tres preguntas sobre un tema abstracto: 1 min para preparar (puedes tomar notas) y 2 min hablando.',
    ],
  },
  {
    skill: 'Writing',
    time: '50 min · 4 partes con el mismo contexto',
    parts: [
      'Part 1 · Responder a 5 mensajes con palabras sueltas o frases cortas.',
      'Part 2 · Texto corto de 20-30 palabras.',
      'Part 3 · Responder a 3 preguntas de otros miembros, unas 40 palabras cada una.',
      'Part 4 · Email informal a un amigo (40-50) y email formal (120-150) sobre el mismo tema.',
    ],
  },
];

const TIPS = [
  'Lee todas las opciones antes de elegir y vuelve a leer la frase completa para comprobar.',
  'Grammar & Vocabulary son 50 preguntas en 25 minutos: si una se te atasca, márcala y sigue.',
  'Listening: lee las preguntas antes de escuchar y busca sinónimos, no las mismas palabras. Usa la segunda escucha para confirmar.',
  'Reading Part 2: fíjate en las palabras que enlazan frases (pronombres, “however”, “then”, “this”).',
  'Speaking Part 4: usa el minuto de preparación para anotar 2-3 ideas por pregunta, no frases completas.',
  'Writing: respeta los límites de palabras (hay contador), planifica antes de escribir, revisa errores y cambia de registro entre el email informal y el formal.',
];

function LinkList({ links }: { links: L[] }) {
  return (
    <ul className="link-list" style={{ margin: 0, paddingLeft: 18 }}>
      {links.map((l) => (
        <li key={l.url + l.label}>
          <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
          {l.note && <span className="small muted"> — {l.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export function GuidePage() {
  return (
    <div>
      <h1>Guía del examen</h1>
      <p className="lead">
        Formato oficial de Aptis ESOL General según el British Council y los recursos de tu guía de estudio,
        organizados por sección. Los enlaces se abren en una pestaña nueva y necesitan conexión.
      </p>

      <h2>Formato oficial</h2>
      <div className="grid grid-2" style={{ marginBottom: 22 }}>
        {FORMAT.map((f) => (
          <div className="card" key={f.skill}>
            <strong style={{ fontFamily: 'var(--font-display)' }}>{f.skill}</strong>
            <div className="small muted" style={{ marginBottom: 8 }}>{f.time}</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }} className="small">
              {f.parts.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2>Consejos oficiales</h2>
      <div className="card" style={{ marginBottom: 22 }}>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>

      <h2>Recursos oficiales del British Council</h2>
      <div className="card" style={{ marginBottom: 22 }}>
        <p className="small muted" style={{ marginTop: 0 }}>
          Los practice tests oficiales no dan nota: apunta tus respuestas y compáralas con la answer key.
        </p>
        <LinkList links={OFFICIAL} />
      </div>

      <h2>Recursos de tu guía de estudio</h2>
      <div className="grid grid-2" style={{ marginBottom: 22 }}>
        {GUIDE.map((g) => (
          <div className="card" key={g.section}>
            <strong style={{ fontFamily: 'var(--font-display)' }}>{g.section}</strong>
            <div className="spacer" style={{ height: 8 }} />
            <LinkList links={g.links} />
          </div>
        ))}
      </div>

      <h2>El día del examen</h2>
      <div className="card">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Lleva tu DNI: es obligatorio para acceder.</li>
          <li>El Speaking se hace en sala con más candidatos hablando a la vez: concéntrate en tu pantalla.</li>
          <li>Fechas, sedes y precio: consúltalos en la web del British Council España (enlace arriba), ya que cambian.</li>
        </ul>
      </div>
    </div>
  );
}
