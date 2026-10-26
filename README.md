# Aptis Trainer · B2

Aplicación web **local** para preparar el examen **Aptis ESOL General** (British Council), orientada a alcanzar el nivel **B2 / B2.2**. Interfaz en español, ejercicios en inglés.

Corrige automáticamente Grammar & Vocabulary, Reading y Listening. Speaking y Writing **no se corrigen**: guardan tu respuesta y muestran checklist, rúbrica orientativa y un ejemplo B2.

> Todos los ejercicios son **originales**, inspirados en el formato oficial del Aptis (tipos de tarea, tiempos y criterios). **No** contienen preguntas reales ni material protegido del British Council.

---

## 1. Cómo ejecutarlo en local

Necesitas **Node.js 18+**.

```bash
npm install      # instala dependencias
npm run dev      # arranca el servidor de desarrollo (Vite)
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

### Compilar una versión estática

```bash
npm run build    # genera la carpeta dist/
npm run preview  # sirve dist/ en local para comprobarlo
```

El proyecto usa **HashRouter**, así que la carpeta `dist/` funciona abriendo `index.html`
directamente o subiéndola a cualquier hosting estático (GitHub Pages, Netlify, etc.),
sin necesidad de configurar el servidor.

### Datos y privacidad

Todo el progreso (puntuaciones, estadísticas, respuestas guardadas) se almacena en el
**localStorage** del navegador. No hay backend ni se envía nada a ningún servidor.
Puedes borrarlo todo desde **Estadísticas → Borrar todo el progreso**.

### Audio del Listening

Los audios se generan con la **síntesis de voz del navegador** (`SpeechSynthesis`, TTS).
Funciona sin conexión y sin archivos de audio. Si tu navegador no tiene voces en inglés,
la app muestra automáticamente la transcripción. Chrome y Edge suelen dar el mejor resultado.

### Micrófono del Speaking

La grabación usa `MediaRecorder`. El navegador pedirá permiso de micrófono; las grabaciones
se guardan solo en memoria durante la sesión (puedes reproducirlas al momento). Si deniegas
el permiso, puedes practicar igualmente en voz alta con el temporizador.

---

## 2. Estructura del proyecto

```
src/
├─ components/      Componentes reutilizables
│  ├─ Layout.tsx           Barra lateral + navegación
│  ├─ QuestionRunner.tsx   Motor de preguntas (práctica / examen)
│  ├─ SectionPractice.tsx  Configuración de sesión por sección
│  ├─ Timer.tsx            Temporizador con cuenta atrás
│  └─ Bits.tsx             Badges, barras de progreso, tiles
├─ data/           Banco de ejercicios (ver sección 4)
│  ├─ grammar.ts          105 preguntas de Grammar & Vocabulary
│  ├─ reading.ts          Textos y preguntas de Reading
│  ├─ listening.ts        Transcripciones (TTS) y preguntas
│  ├─ speaking.ts         30 prompts de Speaking
│  ├─ writing.ts          17 tareas de Writing
│  └─ index.ts            Barril + selectores
├─ pages/          Una página por sección + Dashboard, Exam, Stats
├─ utils/          storage (localStorage), tts, stats, helpers
├─ types/          Tipos TypeScript compartidos
├─ styles/         global.css (sistema de diseño)
├─ state.tsx       Contexto de progreso
├─ App.tsx         Rutas
└─ main.tsx        Punto de entrada
```

---

## 3. Secciones

- **Dashboard** — progreso general, última puntuación por sección, recomendaciones
  automáticas y accesos a "Nuevo simulacro" y "Practicar por sección".
- **Grammar & Vocabulary** — multiple choice, cloze, colocaciones, phrasal verbs,
  word formation, sinónimos/antónimos. Corrección automática + explicación.
- **Reading** — comprensión de frases, cohesión, matching de titulares, texto largo.
- **Listening** — audios por TTS; información específica, inferencia, matching.
  En modo examen se limitan las reproducciones.
- **Speaking** — prompts de las 4 partes, temporizador, grabación por micrófono,
  checklist de autoevaluación B2 y ejemplo B2.
- **Writing** — las 4 tareas típicas, temporizador, guardado, checklist de revisión,
  rúbrica orientativa (sin nota automática) y ejemplo B2.
- **Simulacro completo** — las 5 secciones en orden, con temporizador por sección,
  navegación limitada y pantalla final con resultados de las partes corregibles.
- **Estadísticas** — aciertos por sección, errores frecuentes, vocabulario fallado,
  evolución por fecha y recomendaciones de estudio.

**Modo práctica**: corrección inmediata con explicación tras cada respuesta.
**Modo examen**: corrección solo al final; hay que responder todo para terminar.

---

## 4. Cómo añadir más preguntas

Cada tipo de contenido está en su archivo dentro de `src/data/` y es un simple array
tipado. Añade un objeto nuevo respetando el formato.

### Grammar / Vocabulary — `src/data/grammar.ts`

```ts
{
  id: 'gv106',              // id único
  skill: 'grammar',
  type: 'multiple-choice',  // multiple-choice | cloze | collocation |
                            // phrasal-verb | word-formation | synonym | antonym | vocab
  prompt: 'She ____ here since 2019.',
  options: ['work', 'worked', 'have worked', 'has worked'],
  answer: 3,                // índice (0-based) de la opción correcta
  explanation: 'Present perfect con "since".',
  level: 'B1',              // B1 | B2 | C1
  topic: 'Present perfect', // tema gramatical/léxico
}
```

### Reading / Listening — `src/data/reading.ts` · `src/data/listening.ts`

Se agrupan por **pasaje**. En Listening, el campo `body` es lo que lee el TTS.
El `id` de cada pregunta debe empezar por el `id` del pasaje (p. ej. pasaje `rd009`
→ preguntas `rd009q1`, `rd009q2`…), porque la app usa ese prefijo para asociar el texto.

```ts
{
  id: 'rd009',
  skill: 'reading',
  type: 'long-text',
  title: 'Título del texto',
  body: 'El texto completo…',
  level: 'B2',
  questions: [
    {
      id: 'rd009q1', skill: 'reading', type: 'long-text',
      prompt: '¿Qué…?',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: 'Porque…',
      level: 'B2', topic: 'Detalle',
    },
  ],
}
```

### Speaking — `src/data/speaking.ts`

```ts
{
  id: 'sp031', part: 2, seconds: 45, level: 'B2',
  topic: 'Describing images',
  prompt: 'Describe a photo of…',
  sampleAnswer: 'In the picture I can see…',
}
```

### Writing — `src/data/writing.ts`

```ts
{
  id: 'wr018', part: 4, level: 'B2', minWords: 120, seconds: 1200,
  title: 'Formal email (…)',
  prompt: 'Write a formal email (120-150 words)…',
  sampleAnswer: 'Dear Sir or Madam, …',
}
```

Guarda el archivo: Vite recarga en caliente y la pregunta aparece al instante.
Los contadores del Dashboard y los filtros por nivel se actualizan solos.

---

## 5. Sobre los niveles

El objetivo es **B2 / B2.2**, pero el banco incluye ejercicios **B1, B2 y C1** para
progresar. Puedes filtrar por nivel en cada sección. En las secciones corregibles,
una media de **70-80%** de aciertos es una referencia razonable de nivel B2.

---

## 6. Formato oficial (actualización)

El trainer sigue ahora la estructura oficial de Aptis ESOL General publicada por el British Council:

| Sección | Archivo de datos | Formato |
|---|---|---|
| Grammar | `grammar.ts` | 25 preguntas, 3 opciones (las de 4 se reducen automáticamente) |
| Vocabulary | `vocabTasks.ts` | 5 tareas × 5 ítems, 10 palabras por tarea (pares, definiciones, uso, combinaciones) |
| Reading P1-P4 | `readingTasks.ts` | huecos · ordenar frases · opiniones (4 personas, 7 frases) · titulares (7 párrafos, 8 titulares) |
| Listening P1 | `listeningPart1.ts`, `listening.ts` | mensajes cortos, 3 opciones |
| Listening P4 | `listeningPart4.ts` | monólogos largos, 2 preguntas de opinión cada uno |
| Listening P2/P3 | `listeningTasks.ts` | 4 hablantes → 6 opciones · diálogo hombre/mujer/ambos |
| Writing | `writingSets.ts` | tests completos de 4 partes con el mismo contexto |
| Speaking P2/P3 | `speaking.ts` + `scenes.ts` | ilustraciones SVG originales y 3 preguntas de 45 s |

Para añadir una tarea nueva, copia una existente del archivo correspondiente y cambia `id`, textos y respuestas.
La respuesta (`answer`) debe coincidir exactamente con una de las opciones.
El Grammar del simulacro usa solo gramática pura (`pureGrammar` en `data/index.ts`); el resto del banco tipo test queda como "Vocab extra".
La página **Guía y recursos** (`src/pages/GuidePage.tsx`) recoge el formato oficial y los enlaces de estudio.
