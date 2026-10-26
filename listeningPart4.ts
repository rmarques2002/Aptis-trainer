import type { Passage, Level } from '../types';

// Aptis-style Listening Part 4: a longer monologue, two questions about the
// speaker's opinion or attitude, three options each. Original scripts (TTS).

type Q = { prompt: string; options: [string, string, string]; answer: 0 | 1 | 2; explanation: string };

function p4(n: number, title: string, body: string, q1: Q, q2: Q, level: Level = 'B2'): Passage {
  const id = `ls${200 + n}`;
  return {
    id, skill: 'listening', type: 'monologue', title, body, level,
    questions: [q1, q2].map((q, k) => ({
      id: `${id}q${k + 1}`, skill: 'listening' as const, type: 'monologue',
      prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation,
      level, topic: 'Inference: monologue',
    })),
  };
}

export const listeningPart4Passages: Passage[] = [
  p4(1, 'A radio talk about city parks',
    'People often say that cities need more parks, and of course I agree. But in my view, the number of parks matters less than how they are designed. Many new parks are just large areas of grass with a few benches. They look nice in photographs, but nobody actually uses them. The parks that work best are the ones with shade, water fountains, places for children to play and cafés where older people can sit and talk. As for who should pay for them, I know many people think it should all come from local taxes. Personally, I think businesses that benefit from a nearby park, such as restaurants and offices, should contribute something. After all, a good park increases their profits too.',
    { prompt: 'What does the speaker think about new parks?', options: ['There are not enough of them', 'Their design is often poor', 'They are too expensive to maintain'], answer: 1, explanation: 'She says design matters more than number, and many new parks are just grass that nobody uses.' },
    { prompt: 'What is her opinion about funding?', options: ['Local businesses should help pay', 'Taxes should cover everything', 'Visitors should pay to enter'], answer: 0, explanation: 'She thinks businesses that benefit from a park should contribute.' }),

  p4(2, 'A teacher on mobile phones in schools',
    'Last year our school banned mobile phones completely, from the moment students arrive until they leave. I expected a lot of protests, and there were some at first. But after a few weeks, something surprising happened. The playground became noisy again — students were actually talking and playing games together. I’m not saying phones are evil; they can be useful in some lessons, and I’d like to see them used more in research projects, for example. What I am saying is that young people find it almost impossible to control their own use. The apps are designed to keep them looking at the screen, so it isn’t fair to expect a fourteen-year-old to resist on their own.',
    { prompt: 'What effect of the ban surprised the teacher?', options: ['Students’ marks improved', 'Students became more sociable', 'Parents supported the decision'], answer: 1, explanation: 'The playground became noisy again — students were talking and playing together.' },
    { prompt: 'Why does she think students need rules?', options: ['Phones are dangerous for their health', 'Teachers cannot control the class', 'Apps are designed to be hard to stop using'], answer: 2, explanation: 'She says apps are designed to keep them looking at the screen.' }),

  p4(3, 'A chef talks about food waste',
    'When I opened my first restaurant, I was shocked by how much food we threw away. Vegetables that weren’t perfectly shaped, bread from the day before, the ends of fish and meat. Now we use almost everything. Yesterday’s bread becomes breadcrumbs or soup, and vegetable peel goes into stocks. It has cut our costs considerably. At home, though, I think the problem is different. People don’t plan their shopping, so they buy far more than they need. Supermarket offers like “buy two, get one free” don’t help either. Honestly, I’d like to see those offers banned for fresh food, because they encourage people to buy things they’ll never eat.',
    { prompt: 'What does the chef say about reducing waste in his restaurant?', options: ['It has saved money', 'It took a long time to organise', 'Customers did not notice'], answer: 0, explanation: '“It has cut our costs considerably.”' },
    { prompt: 'What would he like to happen?', options: ['People to cook more at home', 'Some supermarket promotions to stop', 'Restaurants to serve smaller portions'], answer: 1, explanation: 'He would like “buy two, get one free” offers banned for fresh food.' }),

  p4(4, 'A scientist on space tourism',
    'A few private companies now offer short trips into space for tourists, at enormous prices. Many people ask me whether this is a good thing. From a scientific point of view, I think it’s mostly harmless and may even be useful, because the money pays for better and cheaper rockets that researchers can use later. But I do have concerns about the environment. Each launch burns huge amounts of fuel, and if these trips become common, the pollution in the upper atmosphere could become a real problem. So my position is this: space tourism shouldn’t be stopped, but it should be strictly regulated before it grows any further.',
    { prompt: 'What positive effect does the scientist mention?', options: ['It inspires young people to study science', 'It helps develop technology for research', 'It makes space travel safer for astronauts'], answer: 1, explanation: 'The money pays for better and cheaper rockets that researchers can use.' },
    { prompt: 'What is her overall position?', options: ['It should be banned', 'It should be controlled by rules', 'It should be encouraged to grow'], answer: 1, explanation: '“It shouldn’t be stopped, but it should be strictly regulated.”' }),

  p4(5, 'A talk about learning musical instruments',
    'I teach piano to adults, and the question I hear most often is: “Am I too old to start?” The answer is no. Adults actually learn some things faster than children, because they understand music theory more quickly. What they lack is patience. They expect to play beautiful pieces within a month, and when they can’t, they give up. My advice is to practise little and often. Ten minutes every day is far better than two hours on Sunday. And please, don’t compare yourself with the people you watch online. Those videos show the result of years of work, not the beginning.',
    { prompt: 'According to the teacher, what is the main problem for adult learners?', options: ['They have too little free time', 'They expect progress too quickly', 'They find theory difficult'], answer: 1, explanation: 'Adults lack patience and expect to play beautiful pieces within a month.' },
    { prompt: 'What does she say about online videos?', options: ['They give an unrealistic impression', 'They are a good way to learn', 'They are better than lessons'], answer: 0, explanation: 'Videos show the result of years of work, so learners should not compare themselves.' }),

  p4(6, 'An architect on old buildings',
    'In many cities, old factories and warehouses are being demolished to build new flats. I think this is often a mistake. These buildings are usually very solid, and converting them uses far less energy and materials than building from scratch. They also give a neighbourhood its character. That said, I’m not against all new construction. Some old buildings are simply unsafe or impossible to adapt, and in those cases demolition is the right choice. The real problem is that the law makes conversion more complicated and expensive than starting again. Until that changes, developers will keep knocking down buildings that could have had a second life.',
    { prompt: 'Why does the architect prefer converting old buildings?', options: ['It is quicker', 'It is more sustainable', 'It is more profitable'], answer: 1, explanation: 'Converting uses far less energy and materials than building from scratch.' },
    { prompt: 'What does he see as the main obstacle?', options: ['Current regulations', 'Residents’ opinions', 'A lack of skilled workers'], answer: 0, explanation: '“The law makes conversion more complicated and expensive.”' }),

  p4(7, 'A travel writer on guidebooks',
    'When I started travelling, everyone carried a printed guidebook. Now most people rely on their phones, and of course apps are more up to date — restaurant hours, prices, reviews from last week. I use them too. But I think something has been lost. A good guidebook was written by someone who knew the place deeply and could explain its history and culture. Online reviews tell you whether the pizza was good, not why the city looks the way it does. My suggestion is simple: use your phone for practical information, but before you go, read at least one serious book about the place you’re visiting. Your trip will mean much more.',
    { prompt: 'What advantage of apps does the writer accept?', options: ['They are more current', 'They are more reliable', 'They are cheaper'], answer: 0, explanation: 'He says apps are more up to date.' },
    { prompt: 'What does he recommend?', options: ['Using only printed guidebooks', 'Reading about a destination’s background before going', 'Avoiding online reviews completely'], answer: 1, explanation: 'Read at least one serious book about the place before you go.' }),

  p4(8, 'A doctor on sleep and teenagers',
    'Parents often tell me their teenagers are lazy because they won’t get up in the morning. In most cases, laziness has nothing to do with it. During adolescence, the body clock changes, and teenagers genuinely don’t feel sleepy until late at night. Forcing them to start school at eight means many are seriously short of sleep. I’d support starting secondary school an hour later; research in several countries suggests attendance and results improve. Parents can help too, mainly by keeping phones out of bedrooms at night. That one rule makes a bigger difference than anything else I know.',
    { prompt: 'What does the doctor say about teenagers who sleep late?', options: ['They are usually lazy', 'Their biology is responsible', 'They have too much homework'], answer: 1, explanation: 'Their body clock changes during adolescence.' },
    { prompt: 'What does she think is the most effective thing parents can do?', options: ['Wake them up earlier', 'Remove phones from bedrooms at night', 'Talk to the school'], answer: 1, explanation: 'Keeping phones out of bedrooms “makes a bigger difference than anything else”.' }),

  p4(9, 'An engineer on public transport',
    'Every time a city builds a new metro line, people celebrate, and I understand why. But metro lines are extremely expensive and take ten years or more to build. In my experience, many cities would get faster results by improving their buses. Dedicated bus lanes, frequent services and modern vehicles can transform a network in two or three years for a fraction of the cost. The challenge is political rather than technical. Taking road space away from cars always causes protests, and many politicians simply don’t want the trouble before an election.',
    { prompt: 'What does the engineer think cities should prioritise?', options: ['New metro lines', 'Better bus services', 'Wider roads'], answer: 1, explanation: 'Improving buses gives faster results for a fraction of the cost.' },
    { prompt: 'What is the main difficulty, according to him?', options: ['A lack of money', 'Engineering problems', 'Politicians fear public reaction'], answer: 2, explanation: 'The challenge is political: taking road space causes protests.' }),

  p4(10, 'A shop owner on online shopping',
    'I’ve run a bookshop in this street for twenty years. When online shopping became popular, I was sure we would close. Sales did fall, but we found a way to survive. We stopped trying to compete on price, because we never could. Instead, we organised events: author talks, children’s reading hours, a monthly book club. People now come for the experience as much as for the books. I don’t blame customers for shopping online. What I would like is for the big online companies to pay the same level of tax that small shops like mine pay. At the moment, the competition simply isn’t fair.',
    { prompt: 'How did the shop survive?', options: ['By lowering its prices', 'By offering activities', 'By selling online'], answer: 1, explanation: 'They organised events and people come for the experience.' },
    { prompt: 'What does the owner think is unfair?', options: ['Customers’ shopping habits', 'The tax system', 'The rent in the street'], answer: 1, explanation: 'Big online companies don’t pay the same level of tax as small shops.' }),
];
