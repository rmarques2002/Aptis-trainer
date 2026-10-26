import type { Task } from '../types';

// Aptis-style vocabulary tasks (original content). Official vocabulary part:
// 25 questions in 5 tasks of 5 items, each answered from a list of 10 words
// (5 are not needed). Types: word pairs, definitions, usage, combinations.

const PAIRS = 'Select a word from the list that has the most similar meaning to the word on the left.';
const DEF = 'Complete each definition using a word from the list. Use each word once only. You will not need five of the words.';
const USE = 'Finish each sentence using a word from the list. Use each word once only. You will not need five of the words.';
const COMB = 'Select the word from the list that is most often used with the word on the left.';

export const vocabTasks: Task[] = [
  // ---------- Word pairs (synonyms) ----------
  {
    id: 'vp01', skill: 'grammar', kind: 'vocab-pairs', title: 'Word pairs 1', instructions: PAIRS,
    level: 'B1', topic: 'Synonyms',
    options: ['answer', 'borrow', 'break', 'buy', 'carry', 'finish', 'fix', 'select', 'start', 'wonder'],
    items: [
      { prompt: 'purchase', answer: 'buy' },
      { prompt: 'begin', answer: 'start' },
      { prompt: 'reply', answer: 'answer' },
      { prompt: 'repair', answer: 'fix' },
      { prompt: 'choose', answer: 'select' },
    ],
  },
  {
    id: 'vp02', skill: 'grammar', kind: 'vocab-pairs', title: 'Word pairs 2', instructions: PAIRS,
    level: 'B1', topic: 'Synonyms',
    options: ['brave', 'empty', 'enormous', 'foolish', 'neat', 'polite', 'quick', 'slow', 'tiny', 'wealthy'],
    items: [
      { prompt: 'huge', answer: 'enormous' },
      { prompt: 'rapid', answer: 'quick' },
      { prompt: 'silly', answer: 'foolish' },
      { prompt: 'rich', answer: 'wealthy' },
      { prompt: 'tidy', answer: 'neat' },
    ],
  },
  {
    id: 'vp03', skill: 'grammar', kind: 'vocab-pairs', title: 'Word pairs 3', instructions: PAIRS,
    level: 'B2', topic: 'Synonyms',
    options: ['admire', 'allow', 'decrease', 'get', 'hide', 'lend', 'raise', 'refuse', 'show', 'try'],
    items: [
      { prompt: 'attempt', answer: 'try' },
      { prompt: 'permit', answer: 'allow' },
      { prompt: 'reduce', answer: 'decrease' },
      { prompt: 'obtain', answer: 'get' },
      { prompt: 'demonstrate', answer: 'show' },
    ],
  },
  {
    id: 'vp04', skill: 'grammar', kind: 'vocab-pairs', title: 'Word pairs 4', instructions: PAIRS,
    level: 'C1', topic: 'Synonyms',
    options: ['cheap', 'essential', 'generous', 'hidden', 'loud', 'precise', 'regular', 'rough', 'short', 'strange'],
    items: [
      { prompt: 'accurate', answer: 'precise' },
      { prompt: 'frequent', answer: 'regular' },
      { prompt: 'vital', answer: 'essential' },
      { prompt: 'brief', answer: 'short' },
      { prompt: 'peculiar', answer: 'strange' },
    ],
  },
  {
    id: 'vp05', skill: 'grammar', kind: 'vocab-pairs', title: 'Word pairs 5', instructions: PAIRS,
    level: 'B2', topic: 'Synonyms',
    options: ['appear', 'continue', 'damage', 'explain', 'gather', 'improve', 'invent', 'mend', 'shout', 'want'],
    items: [
      { prompt: 'harm', answer: 'damage' },
      { prompt: 'desire', answer: 'want' },
      { prompt: 'collect', answer: 'gather' },
      { prompt: 'carry on', answer: 'continue' },
      { prompt: 'emerge', answer: 'appear' },
    ],
  },

  // ---------- Definitions ----------
  {
    id: 'vd01', skill: 'grammar', kind: 'vocab-definition', title: 'Definitions 1', instructions: DEF,
    level: 'B1', topic: 'Word definition',
    options: ['argue', 'borrow', 'deliver', 'invite', 'promise', 'prove', 'reduce', 'repair', 'solve', 'whisper'],
    items: [
      { prompt: 'To make something smaller in size or amount is to…', answer: 'reduce' },
      { prompt: 'To say that you will certainly do something is to…', answer: 'promise' },
      { prompt: 'To ask someone to come to an event is to…', answer: 'invite' },
      { prompt: 'To find the answer to a problem is to…', answer: 'solve' },
      { prompt: 'To show that something is true is to…', answer: 'prove' },
    ],
  },
  {
    id: 'vd02', skill: 'grammar', kind: 'vocab-definition', title: 'Definitions 2', instructions: DEF,
    level: 'B1', topic: 'Word definition',
    options: ['apprentice', 'cashier', 'guest', 'journalist', 'landlord', 'lawyer', 'plumber', 'referee', 'surgeon', 'tourist'],
    items: [
      { prompt: 'A person who travels to a place for pleasure is a…', answer: 'tourist' },
      { prompt: 'A person who writes news stories is a…', answer: 'journalist' },
      { prompt: 'A person who gives advice about the law is a…', answer: 'lawyer' },
      { prompt: 'A person learning a trade from an expert is an…', answer: 'apprentice' },
      { prompt: 'A person who is staying in a hotel is a…', answer: 'guest' },
    ],
  },
  {
    id: 'vd03', skill: 'grammar', kind: 'vocab-definition', title: 'Definitions 3', instructions: DEF,
    level: 'B2', topic: 'Word definition',
    options: ['budget', 'contract', 'discount', 'fee', 'loan', 'profit', 'receipt', 'refund', 'salary', 'tax'],
    items: [
      { prompt: 'A piece of paper that shows you have paid for something is a…', answer: 'receipt' },
      { prompt: 'An amount of money you pay to enter or join something is a…', answer: 'fee' },
      { prompt: 'A written legal agreement between two people or companies is a…', answer: 'contract' },
      { prompt: 'A plan of how money will be spent over a period is a…', answer: 'budget' },
      { prompt: 'Money you receive for your job, usually every month, is a…', answer: 'salary' },
    ],
  },
  {
    id: 'vd04', skill: 'grammar', kind: 'vocab-definition', title: 'Definitions 4', instructions: DEF,
    level: 'B2', topic: 'Word definition',
    options: ['anxious', 'brave', 'clumsy', 'curious', 'generous', 'jealous', 'modest', 'patient', 'punctual', 'stubborn'],
    items: [
      { prompt: 'Someone who feels nervous about what might happen is…', answer: 'anxious' },
      { prompt: 'Someone who happily gives money or time to others is…', answer: 'generous' },
      { prompt: 'Someone who does dangerous or difficult things without fear is…', answer: 'brave' },
      { prompt: 'Someone who can wait calmly without getting annoyed is…', answer: 'patient' },
      { prompt: 'Someone who always arrives at the right time is…', answer: 'punctual' },
    ],
  },
  {
    id: 'vd05', skill: 'grammar', kind: 'vocab-definition', title: 'Definitions 5', instructions: DEF,
    level: 'C1', topic: 'Word definition',
    options: ['abolish', 'assess', 'consult', 'donate', 'exaggerate', 'hesitate', 'postpone', 'reveal', 'sponsor', 'withdraw'],
    items: [
      { prompt: 'To make something seem bigger or worse than it really is is to…', answer: 'exaggerate' },
      { prompt: 'To move an event to a later time is to…', answer: 'postpone' },
      { prompt: 'To ask an expert for advice or information is to…', answer: 'consult' },
      { prompt: 'To make something secret known to others is to…', answer: 'reveal' },
      { prompt: 'To officially end a law or system is to…', answer: 'abolish' },
    ],
  },

  // ---------- Word usage (sentence completion) ----------
  {
    id: 'vu01', skill: 'grammar', kind: 'vocab-usage', title: 'Word usage 1', instructions: USE,
    level: 'B1', topic: 'Word usage',
    options: ['boring', 'borrow', 'crowded', 'distracting', 'generous', 'honest', 'luxurious', 'postpone', 'promotion', 'salary'],
    items: [
      { prompt: 'The film was so ___ that I fell asleep halfway through.', answer: 'boring' },
      { prompt: 'After years of hard work, she finally got a ___ to manager.', answer: 'promotion' },
      { prompt: 'Please switch off your phone; the light is very ___ during the concert.', answer: 'distracting' },
      { prompt: 'The hotel room was ___: it had a jacuzzi and a view of the sea.', answer: 'luxurious' },
      { prompt: 'We need to ___ the meeting because the director is ill.', answer: 'postpone' },
    ],
  },
  {
    id: 'vu02', skill: 'grammar', kind: 'vocab-usage', title: 'Word usage 2', instructions: USE,
    level: 'B1', topic: 'Word usage',
    options: ['afford', 'bright', 'clear', 'crowded', 'donation', 'loan', 'poor', 'silent', 'stand', 'wide'],
    items: [
      { prompt: 'The streets were so ___ that we could hardly move.', answer: 'crowded' },
      { prompt: 'He makes a small ___ to a children’s charity every month.', answer: 'donation' },
      { prompt: 'I can’t ___ the noise from the neighbours any longer.', answer: 'stand' },
      { prompt: 'The instructions were very ___, so everyone understood them.', answer: 'clear' },
      { prompt: 'She has a ___ memory; she forgets people’s names all the time.', answer: 'poor' },
    ],
  },
  {
    id: 'vu03', skill: 'grammar', kind: 'vocab-usage', title: 'Word usage 3', instructions: USE,
    level: 'B2', topic: 'Word usage',
    options: ['advice', 'announced', 'borrowed', 'cancelled', 'compulsory', 'fare', 'fee', 'loud', 'tidy', 'weather'],
    items: [
      { prompt: 'The museum is free, so there is no entrance ___.', answer: 'fee' },
      { prompt: 'My flight was ___ because of the heavy snow.', answer: 'cancelled' },
      { prompt: 'In most countries it is ___ to wear a helmet on a motorbike.', answer: 'compulsory' },
      { prompt: 'The winners of the competition will be ___ next week.', answer: 'announced' },
      { prompt: 'She gave me some useful ___ about how to prepare for the interview.', answer: 'advice' },
    ],
  },
  {
    id: 'vu04', skill: 'grammar', kind: 'vocab-usage', title: 'Word usage 4', instructions: USE,
    level: 'B2', topic: 'Word usage',
    options: ['breathtaking', 'built', 'careless', 'cheap', 'crowded', 'hire', 'invented', 'reduce', 'terrified', 'whisper'],
    items: [
      { prompt: 'The company plans to ___ fifty new employees this year.', answer: 'hire' },
      { prompt: 'The bridge was ___ in 1890 and is still in use today.', answer: 'built' },
      { prompt: 'I’m ___ of spiders, so I never go into the basement.', answer: 'terrified' },
      { prompt: 'Recycling helps to ___ the amount of waste we send to landfill.', answer: 'reduce' },
      { prompt: 'The view from the top of the mountain was absolutely ___.', answer: 'breathtaking' },
    ],
  },
  {
    id: 'vu05', skill: 'grammar', kind: 'vocab-usage', title: 'Word usage 5', instructions: USE,
    level: 'C1', topic: 'Word usage',
    options: ['ambiguous', 'confidential', 'deadline', 'feasible', 'launch', 'reluctant', 'restore', 'scarce', 'thorough', 'vague'],
    items: [
      { prompt: 'Water becomes ___ in the region during long, dry summers.', answer: 'scarce' },
      { prompt: 'The documents are ___, so please do not share them with anyone.', answer: 'confidential' },
      { prompt: 'The company will ___ its new app at a conference in May.', answer: 'launch' },
      { prompt: 'Before buying a house, you should arrange a ___ inspection of the building.', answer: 'thorough' },
      { prompt: 'He was ___ to admit his mistake, but eventually he apologised.', answer: 'reluctant' },
    ],
  },

  // ---------- Word combinations (collocations) ----------
  {
    id: 'vc01', skill: 'grammar', kind: 'vocab-combination', title: 'Word combinations 1', instructions: COMB,
    level: 'B1', topic: 'Collocations',
    options: ['a mistake', 'a photo', 'attention', 'garden', 'happiness', 'homework', 'idea', 'pencil', 'rain', 'window'],
    items: [
      { prompt: 'heavy', answer: 'rain' },
      { prompt: 'pay', answer: 'attention' },
      { prompt: 'do', answer: 'homework' },
      { prompt: 'take', answer: 'a photo' },
      { prompt: 'make', answer: 'a mistake' },
    ],
  },
  {
    id: 'vc02', skill: 'grammar', kind: 'vocab-combination', title: 'Word combinations 2', instructions: COMB,
    level: 'B1', topic: 'Collocations',
    options: ['bottle', 'chair', 'coffee', 'food', 'friend', 'lesson', 'sense', 'sky', 'story', 'transport'],
    items: [
      { prompt: 'strong', answer: 'coffee' },
      { prompt: 'junk', answer: 'food' },
      { prompt: 'close', answer: 'friend' },
      { prompt: 'public', answer: 'transport' },
      { prompt: 'common', answer: 'sense' },
    ],
    explanation: 'strong coffee, junk food, close friend, public transport, common sense.',
  },
  {
    id: 'vc03', skill: 'grammar', kind: 'vocab-combination', title: 'Word combinations 3', instructions: COMB,
    level: 'B2', topic: 'Collocations',
    options: ['a business', 'a cloud', 'a holiday', 'a kitchen', 'a promise', 'a rumour', 'a sandwich', 'a secret', 'an agreement', 'awareness'],
    items: [
      { prompt: 'break', answer: 'a promise' },
      { prompt: 'raise', answer: 'awareness' },
      { prompt: 'reach', answer: 'an agreement' },
      { prompt: 'run', answer: 'a business' },
      { prompt: 'keep', answer: 'a secret' },
    ],
    explanation: 'break a promise, raise awareness, reach an agreement, run a business, keep a secret.',
  },
  {
    id: 'vc04', skill: 'grammar', kind: 'vocab-combination', title: 'Word combinations 4', instructions: COMB,
    level: 'C1', topic: 'Collocations',
    options: ['aware', 'concerned', 'disappointed', 'hungry', 'known', 'polite', 'recommended', 'square', 'sunny', 'tall'],
    items: [
      { prompt: 'highly', answer: 'recommended' },
      { prompt: 'deeply', answer: 'concerned' },
      { prompt: 'fully', answer: 'aware' },
      { prompt: 'bitterly', answer: 'disappointed' },
      { prompt: 'widely', answer: 'known' },
    ],
    explanation: 'highly recommended, deeply concerned, fully aware, bitterly disappointed, widely known.',
  },
  {
    id: 'vc05', skill: 'grammar', kind: 'vocab-combination', title: 'Word combinations 5', instructions: COMB,
    level: 'B2', topic: 'Collocations',
    options: ['account', 'blanket', 'breath', 'carrot', 'effort', 'mirror', 'progress', 'risk', 'river', 'spoon'],
    items: [
      { prompt: 'run the', answer: 'risk' },
      { prompt: 'make every', answer: 'effort' },
      { prompt: 'hold your', answer: 'breath' },
      { prompt: 'open a bank', answer: 'account' },
      { prompt: 'make rapid', answer: 'progress' },
    ],
    explanation: 'run the risk, make every effort, hold your breath, open a bank account, make rapid progress.',
  },
];
