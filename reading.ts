import type { Passage } from '../types';

// Original, Aptis-style reading tasks. Task types mirror the official format:
// sentence comprehension, text cohesion (gap fill), matching headings, and long-text comprehension.
export const readingPassages: Passage[] = [
  // ---- Sentence comprehension (choose the option with the same meaning) ----
  {
    id: 'rd001',
    skill: 'reading',
    type: 'sentence-comprehension',
    title: 'Sentence comprehension 1',
    body: 'For each sentence, choose the option that keeps the same meaning.',
    level: 'B2',
    questions: [
      {
        id: 'rd001q1', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"The launch was postponed owing to bad weather." This means the launch was…',
        options: ['cancelled forever', 'delayed because of the weather', 'moved to a sunnier place', 'a great success'],
        answer: 1,
        explanation: '"Owing to" = because of; "postponed" = delayed.',
        level: 'B2', topic: 'Cause linkers',
      },
      {
        id: 'rd001q2', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"She rarely misses a deadline." This means she…',
        options: ['is always late', 'usually meets deadlines', 'has no deadlines', 'never works'],
        answer: 1,
        explanation: '"Rarely misses" means she almost always meets them.',
        level: 'B1', topic: 'Frequency adverbs',
      },
      {
        id: 'rd001q3', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"The proposal was turned down." This means it was…',
        options: ['accepted', 'rejected', 'reversed', 'printed'],
        answer: 1,
        explanation: '"Turn down" is a phrasal verb meaning to reject.',
        level: 'B2', topic: 'Phrasal verbs',
      },
    ],
  },
  {
    id: 'rd002',
    skill: 'reading',
    type: 'sentence-comprehension',
    title: 'Sentence comprehension 2',
    body: 'For each sentence, choose the option that keeps the same meaning.',
    level: 'B2',
    questions: [
      {
        id: 'rd002q1', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"He could hardly contain his excitement." This means he was…',
        options: ['very calm', 'extremely excited', 'slightly bored', 'quite angry'],
        answer: 1,
        explanation: '"Could hardly contain" means he was almost unable to hide his excitement.',
        level: 'B2', topic: 'Idiomatic meaning',
      },
      {
        id: 'rd002q2', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"The two theories are at odds with each other." This means they…',
        options: ['agree completely', 'conflict', 'are identical', 'are both wrong'],
        answer: 1,
        explanation: '"At odds with" means in conflict/disagreement.',
        level: 'C1', topic: 'Idioms',
      },
      {
        id: 'rd002q3', skill: 'reading', type: 'sentence-comprehension',
        prompt: '"Attendance has been declining steadily." This means it…',
        options: ['rose sharply', 'stayed the same', 'fell gradually', 'doubled'],
        answer: 2,
        explanation: '"Declining steadily" means falling gradually and consistently.',
        level: 'B2', topic: 'Describing trends',
      },
    ],
  },

  // ---- Text cohesion / gap filling ----
  {
    id: 'rd003',
    skill: 'reading',
    type: 'gap-filling',
    title: 'A short history of the bicycle',
    body: `The bicycle has changed remarkably little in its basic form. The earliest versions, built in the early nineteenth century, had no pedals at all; riders simply pushed along the ground with their feet. ___1___, this design was slow and awkward. When pedals were finally added to the front wheel, cycling became genuinely practical. ___2___, the wheels of these machines were enormous, which made them dangerous. The modern "safety bicycle", with two equal wheels and a chain, appeared in the 1880s. ___3___ it was safer, it quickly became popular with ordinary people. Today, ___4___ millions of design tweaks, the fundamental idea remains the same.`,
    level: 'B2',
    questions: [
      {
        id: 'rd003q1', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 1', options: ['Therefore', 'However', 'For example', 'Moreover'],
        answer: 1,
        explanation: 'A contrast is needed between the idea and its drawback: "However".',
        level: 'B2', topic: 'Cohesion (contrast)',
      },
      {
        id: 'rd003q2', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 2', options: ['As a result', 'Unfortunately', 'In addition', 'Finally'],
        answer: 1,
        explanation: 'The dangerous wheels are a negative point: "Unfortunately".',
        level: 'B2', topic: 'Cohesion (attitude)',
      },
      {
        id: 'rd003q3', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 3', options: ['Although', 'Because', 'Unless', 'Despite'],
        answer: 1,
        explanation: 'A reason clause fits: it became popular "Because" it was safer.',
        level: 'B2', topic: 'Cohesion (cause)',
      },
      {
        id: 'rd003q4', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 4', options: ['despite', 'although', 'because of', 'in order to'],
        answer: 0,
        explanation: '"Despite + noun phrase" concedes the many changes.',
        level: 'B2', topic: 'Cohesion (concession)',
      },
    ],
  },
  {
    id: 'rd004',
    skill: 'reading',
    type: 'gap-filling',
    title: 'Working from home',
    body: `Remote work was once a rare privilege. ___1___, it has become normal for millions of employees. Supporters argue that it saves commuting time and gives people more control over their day. ___2___, critics point out that working from home can blur the line between work and rest. ___3___ these concerns, most surveys show that employees value the flexibility highly. ___4___, many companies now offer a mix of office and home days.`,
    level: 'B2',
    questions: [
      {
        id: 'rd004q1', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 1', options: ['Nowadays', 'In the past', 'Rarely', 'Never'],
        answer: 0,
        explanation: 'A shift to the present is signalled: "Nowadays".',
        level: 'B1', topic: 'Cohesion (time)',
      },
      {
        id: 'rd004q2', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 2', options: ['Similarly', 'However', 'Therefore', 'For instance'],
        answer: 1,
        explanation: 'The critics contrast with the supporters: "However".',
        level: 'B2', topic: 'Cohesion (contrast)',
      },
      {
        id: 'rd004q3', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 3', options: ['Because of', 'Despite', 'Thanks to', 'Instead of'],
        answer: 1,
        explanation: '"Despite these concerns" concedes the criticisms.',
        level: 'B2', topic: 'Cohesion (concession)',
      },
      {
        id: 'rd004q4', skill: 'reading', type: 'gap-filling',
        prompt: 'Gap 4', options: ['As a result', 'Nevertheless', 'By contrast', 'Otherwise'],
        answer: 0,
        explanation: 'The hybrid model is a consequence: "As a result".',
        level: 'B2', topic: 'Cohesion (result)',
      },
    ],
  },

  // ---- Matching headings ----
  {
    id: 'rd005',
    skill: 'reading',
    type: 'matching-headings',
    title: 'Match the heading to each paragraph',
    body: `Paragraph A: Many people believe that drinking coffee is bad for you, but recent research suggests that moderate consumption may actually lower the risk of certain diseases.

Paragraph B: The key word, however, is "moderate". Drinking large amounts can cause anxiety, disturb sleep and raise blood pressure in sensitive individuals.

Paragraph C: If you enjoy coffee, the advice is simple: keep to two or three cups a day, avoid drinking it late in the evening, and pay attention to how your own body reacts.`,
    level: 'B2',
    questions: [
      {
        id: 'rd005q1', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph A',
        options: ['Practical advice for drinkers', 'A surprising health benefit', 'The dangers of too much', 'The history of coffee'],
        answer: 1,
        explanation: 'Paragraph A introduces an unexpected benefit of moderate coffee.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd005q2', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph B',
        options: ['A surprising health benefit', 'The dangers of too much', 'Practical advice for drinkers', 'How coffee is grown'],
        answer: 1,
        explanation: 'Paragraph B warns about drinking large amounts.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd005q3', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph C',
        options: ['The dangers of too much', 'A surprising health benefit', 'Practical advice for drinkers', 'Coffee around the world'],
        answer: 2,
        explanation: 'Paragraph C gives clear, practical recommendations.',
        level: 'B2', topic: 'Main idea',
      },
    ],
  },
  {
    id: 'rd006',
    skill: 'reading',
    type: 'matching-headings',
    title: 'Match the heading (volunteering)',
    body: `Paragraph A: Volunteering is often seen as an act of pure generosity, a way of giving time to help others without expecting anything in return.

Paragraph B: Yet studies consistently show that volunteers themselves benefit enormously, reporting lower stress, wider social networks and a stronger sense of purpose.

Paragraph C: For anyone thinking of starting, experts recommend choosing a cause you genuinely care about and committing to a realistic number of hours each week.`,
    level: 'B2',
    questions: [
      {
        id: 'rd006q1', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph A',
        options: ['How to get started', 'A traditional view of giving', 'Hidden rewards for the helper', 'Problems with charities'],
        answer: 1,
        explanation: 'Paragraph A states the common, traditional view of volunteering.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd006q2', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph B',
        options: ['Hidden rewards for the helper', 'A traditional view of giving', 'How to get started', 'The cost of volunteering'],
        answer: 0,
        explanation: 'Paragraph B describes benefits to the volunteers themselves.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd006q3', skill: 'reading', type: 'matching-headings',
        prompt: 'Best heading for Paragraph C',
        options: ['A traditional view of giving', 'Hidden rewards for the helper', 'How to get started', 'Why people stop'],
        answer: 2,
        explanation: 'Paragraph C offers advice for beginners.',
        level: 'B2', topic: 'Main idea',
      },
    ],
  },

  // ---- Long text comprehension ----
  {
    id: 'rd007',
    skill: 'reading',
    type: 'long-text',
    title: 'The rise of the night train',
    body: `For decades, night trains across Europe seemed destined to disappear. Faced with cheap flights and high-speed daytime services, several operators withdrew their sleeper routes in the 2000s, arguing that they were expensive to run and increasingly unpopular. Carriages aged, timetables shrank, and many travellers assumed the era of sleeping compartments was over.

The last few years, however, have brought an unexpected revival. Growing awareness of the environmental cost of flying has pushed some passengers to look for slower, greener alternatives. A journey that takes ten hours overnight can replace a short flight while allowing travellers to arrive rested and in the city centre. Sensing this shift, a handful of railway companies have reopened old routes and even ordered new sleeper carriages for the first time in a generation.

The revival is not without difficulties. Night trains remain costly to operate, partly because a sleeping car carries far fewer paying passengers than a packed daytime train. Coordinating routes that cross several countries, each with its own rules and ticketing systems, is also complex. Supporters argue that targeted government support, similar to that given to other public transport, could keep the network growing. Whether the night train becomes a mainstream choice or remains a niche pleasure may depend less on nostalgia than on how seriously governments treat the climate argument.`,
    level: 'B2',
    questions: [
      {
        id: 'rd007q1', skill: 'reading', type: 'long-text',
        prompt: 'Why did operators withdraw night trains in the 2000s?',
        options: [
          'Passengers preferred older carriages',
          'They were expensive and seemed unpopular',
          'Governments banned them',
          'Flights became more expensive',
        ],
        answer: 1,
        explanation: 'Paragraph 1: operators argued the routes were expensive and increasingly unpopular.',
        level: 'B2', topic: 'Detail',
      },
      {
        id: 'rd007q2', skill: 'reading', type: 'long-text',
        prompt: 'What is the main reason for the recent revival?',
        options: [
          'Cheaper tickets than flights',
          'Faster journey times',
          'Concern about the environment',
          'A shortage of daytime trains',
        ],
        answer: 2,
        explanation: 'Paragraph 2 links the revival to awareness of the environmental cost of flying.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd007q3', skill: 'reading', type: 'long-text',
        prompt: 'According to the text, one difficulty for night trains is that…',
        options: [
          'they are too fast',
          'they carry fewer paying passengers per car',
          'no one wants to build carriages',
          'they cannot cross borders',
        ],
        answer: 1,
        explanation: 'Paragraph 3: a sleeping car carries far fewer paying passengers.',
        level: 'B2', topic: 'Detail',
      },
      {
        id: 'rd007q4', skill: 'reading', type: 'long-text',
        prompt: 'The writer suggests the future of night trains mainly depends on…',
        options: [
          'nostalgia for the past',
          'the price of sleeping cars',
          'how seriously governments treat the climate argument',
          'the number of tourists',
        ],
        answer: 2,
        explanation: 'The final sentence points to government treatment of the climate argument.',
        level: 'C1', topic: 'Writer\u2019s conclusion',
      },
    ],
  },
  {
    id: 'rd008',
    skill: 'reading',
    type: 'long-text',
    title: 'Learning a language as an adult',
    body: `A common myth holds that adults simply cannot learn languages as well as children. It is true that very young children often pick up near-perfect accents with little apparent effort. However, research increasingly suggests that adults have real advantages of their own. They can use their existing knowledge of grammar, draw on a wider vocabulary in their first language, and study in a focused, strategic way that young children cannot.

What adults often lack is not ability but time and exposure. A child may hear a language for many hours a day, every day, for years. An adult learner, by contrast, might manage only a few hours a week between work and other commitments. When adults are given rich, regular exposure — for example by living abroad — their progress can be surprisingly fast.

Motivation also plays a decisive role. Adults who study because they must pass an exam sometimes make slower progress than those who learn because they love the culture, want to travel, or need the language for a job they enjoy. The lesson is encouraging: the main barriers for adult learners are practical and psychological, not biological.`,
    level: 'B2',
    questions: [
      {
        id: 'rd008q1', skill: 'reading', type: 'long-text',
        prompt: 'What common belief does the text challenge?',
        options: [
          'That children learn slowly',
          'That adults cannot learn languages as well as children',
          'That grammar is unimportant',
          'That travel helps learning',
        ],
        answer: 1,
        explanation: 'Paragraph 1 opens by naming and then challenging this myth.',
        level: 'B2', topic: 'Main idea',
      },
      {
        id: 'rd008q2', skill: 'reading', type: 'long-text',
        prompt: 'According to the writer, what advantage do adults have?',
        options: [
          'A perfect accent',
          'Unlimited free time',
          'Existing knowledge of grammar and strategy',
          'No need to study',
        ],
        answer: 2,
        explanation: 'Paragraph 1 lists grammar knowledge and strategic study as adult strengths.',
        level: 'B2', topic: 'Detail',
      },
      {
        id: 'rd008q3', skill: 'reading', type: 'long-text',
        prompt: 'What does the writer say adults most often lack?',
        options: ['Ability', 'Time and exposure', 'Intelligence', 'Interest in grammar'],
        answer: 1,
        explanation: 'Paragraph 2: "What adults often lack is not ability but time and exposure."',
        level: 'B2', topic: 'Detail',
      },
      {
        id: 'rd008q4', skill: 'reading', type: 'long-text',
        prompt: 'The overall tone of the conclusion is…',
        options: ['pessimistic', 'encouraging', 'neutral', 'angry'],
        answer: 1,
        explanation: 'The final sentence calls the lesson "encouraging".',
        level: 'B2', topic: 'Tone',
      },
    ],
  },
];
