import type { Question } from '../types';
import { grammarQuestions } from './grammar';
import { readingPassages } from './reading';
import { listeningPassages as baseListening } from './listening';
import { listeningPart1Passages } from './listeningPart1';
import { listeningPart4Passages } from './listeningPart4';
import { speakingPrompts } from './speaking';
import { writingPrompts } from './writing';
import { vocabTasks } from './vocabTasks';
import { readingPart1, readingPart2, readingPart3, readingPart4 } from './readingTasks';
import { listeningPart2, listeningPart3 } from './listeningTasks';
import { writingSets } from './writingSets';

export {
  vocabTasks, readingPart1, readingPart2, readingPart3, readingPart4,
  listeningPart2, listeningPart3, writingSets, listeningPart4Passages,
};

/** All listening passages: original bank + Part 1 short messages. */
const listeningPassages = [...baseListening, ...listeningPart1Passages, ...listeningPart4Passages];

export { grammarQuestions, readingPassages, listeningPassages, speakingPrompts, writingPrompts };

/**
 * Pure grammar items (official Grammar part). Vocabulary-type multiple-choice
 * items (synonyms, phrasal verbs, collocations, idioms…) go to a separate bank.
 */
const NON_GRAMMAR_TOPICS = new Set(['Idioms', 'Idiomatic phrases', 'Collocations', 'Collocations (make/do)']);
export const pureGrammar: Question[] = grammarQuestions.filter(
  (q) => (q.type === 'multiple-choice' || q.type === 'cloze') && !NON_GRAMMAR_TOPICS.has(q.topic),
);
export const vocabMCQ: Question[] = grammarQuestions.filter((q) => !pureGrammar.includes(q));

/** Flatten every reading question out of its passage. */
export const readingQuestions: Question[] = readingPassages.flatMap((p) => p.questions);

/** Flatten every listening question out of its passage. */
export const listeningQuestions: Question[] = listeningPassages.flatMap((p) => p.questions);

const itemsIn = (ts: { items: unknown[]; sentences?: string[] }[]) =>
  ts.reduce((s, t) => s + (t.items.length || (t.sentences ? t.sentences.length - 1 : 0)), 0);

/** Number of answerable items per section (questions + official-format task items). */
export const bankCounts = {
  grammar: grammarQuestions.length + itemsIn(vocabTasks),
  reading:
    readingQuestions.length + itemsIn([...readingPart1, ...readingPart2, ...readingPart3, ...readingPart4]),
  listening: listeningQuestions.length + itemsIn([...listeningPart2, ...listeningPart3]),
  speaking: speakingPrompts.length,
  writing: writingPrompts.length + writingSets.length,
};
