// ---- Shared types for the whole app ----

export type Level = 'B1' | 'B2' | 'C1';
export type Skill = 'grammar' | 'reading' | 'listening' | 'speaking' | 'writing';

/** A single auto-corrected question (grammar, reading, listening). */
export interface Question {
  id: string;
  skill: Skill;
  /** Sub-type of task, e.g. "multiple-choice", "cloze", "collocation". */
  type: string;
  /** Optional passage / audio transcript shown or spoken before the prompt. */
  context?: string;
  prompt: string;
  options: string[];
  /** Index into options[] that is correct. */
  answer: number;
  explanation: string;
  level: Level;
  /** Grammar/lexical topic, e.g. "Past perfect", "Phrasal verbs". */
  topic: string;
}

/** A reading/listening passage that groups several questions. */
export interface Passage {
  id: string;
  skill: 'reading' | 'listening';
  type: string;
  title: string;
  /** Text shown (reading) or spoken via TTS (listening). */
  body: string;
  level: Level;
  questions: Question[];
}

/** A speaking prompt (not auto-corrected). */
export interface SpeakingPrompt {
  id: string;
  part: 1 | 2 | 3 | 4;
  prompt: string;
  seconds: number;
  /** Preparation time before speaking (Part 4: 60 s). */
  prepSeconds?: number;
  /** Official Parts 2-3: questions answered one after another, `seconds` each. */
  questions?: string[];
  /** Keys into SCENES (one picture for Part 2, two for Part 3). */
  scenes?: string[];
  level: Level;
  topic: string;
  sampleAnswer: string;
}

/** A writing task (not auto-corrected). */
export interface WritingPrompt {
  id: string;
  part: 1 | 2 | 3 | 4;
  title: string;
  prompt: string;
  minWords: number;
  seconds: number;
  level: Level;
  sampleAnswer: string;
}

/** One recorded attempt at an auto-corrected section. */
export interface Attempt {
  id: string;
  skill: Skill;
  date: string; // ISO
  total: number;
  correct: number;
  wrongTopics: string[];
  wrongItems: string[];
  mode: 'practice' | 'exam';
}

/** Saved (uncorrected) writing / speaking response. */
export interface SavedResponse {
  id: string;
  promptId: string;
  skill: 'writing' | 'speaking';
  date: string;
  text?: string;
  checklist?: Record<string, boolean>;
}

export interface Progress {
  attempts: Attempt[];
  responses: SavedResponse[];
}

// ---- Official-format grouped tasks (matching, gap-fill, ordering) ----

export type TaskKind =
  | 'vocab-definition'
  | 'vocab-pairs'
  | 'vocab-usage'
  | 'vocab-combination'
  | 'reading-gapfill'
  | 'reading-order'
  | 'reading-opinion'
  | 'reading-headings'
  | 'listening-speakers'
  | 'listening-discussion';

/** One gap / statement / paragraph to answer inside a Task. */
export interface TaskItem {
  prompt: string;
  /** Correct option text. */
  answer: string;
  /** Per-item options (e.g. reading gap-fill). If absent, Task.options is used. */
  options?: string[];
}

/** Line of a listening script (lets TTS use different voices per speaker). */
export interface ScriptLine {
  speaker: string;
  text: string;
}

/**
 * A grouped task in the official Aptis layout: several items answered from a
 * shared option list (matching), per-item dropdowns (gap-fill) or an ordering.
 */
export interface Task {
  id: string;
  skill: 'grammar' | 'reading' | 'listening';
  kind: TaskKind;
  title: string;
  instructions: string;
  level: Level;
  topic: string;
  /** Shared option list (matching tasks). */
  options?: string[];
  items: TaskItem[];
  /** Reading texts shown above the items (opinion paragraphs, long text…). */
  texts?: { label: string; text: string }[];
  /** Ordering task: sentences in the CORRECT order; the first one is given. */
  sentences?: string[];
  /** Listening script(s). Each inner array is one recording. */
  audio?: ScriptLine[][];
  /** Short note shown after correction. */
  explanation?: string;
}

/** A full Writing test: four parts linked by one club/course context. */
export interface WritingSet {
  id: string;
  context: string;
  level: Level;
  part1: string[]; // five short questions
  part2: string; // 20-30 words
  part3: { name: string; message: string }[]; // three chat questions
  part4Info: string; // the email/notice received
  part4Informal: string; // task line, 40-50 words
  part4Formal: string; // task line, 120-150 words
  samples: {
    part1: string[];
    part2: string;
    part3: string[];
    informal: string;
    formal: string;
  };
}
