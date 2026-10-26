import type { Task, ScriptLine } from '../types';

// Aptis-style Listening tasks (original scripts, spoken with browser TTS).
// Part 2: four speakers on one topic → match each to a statement (6 options, 2 not used).
// Part 3: a man and a woman discuss a topic → who expresses each opinion?

const P2 = 'Four people talk about the same topic. Match each speaker to the correct sentence. There are two sentences you do not need. You can listen twice.';
const P3 = 'Listen to a man and a woman discussing a topic. Who expresses each opinion: the man, the woman, or both? You can listen twice.';

const mono = (text: string): ScriptLine[] => [{ speaker: 'Speaker', text }];
const SPEAKERS = ['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4'];

function speakers(
  id: string, title: string, level: 'B1' | 'B2', topic: string,
  scripts: string[], answers: string[], distractors: string[],
): Task {
  return {
    id, skill: 'listening', kind: 'listening-speakers', title, instructions: P2, level, topic,
    options: [...answers, ...distractors].sort(),
    audio: scripts.map((s, k) => [{ speaker: SPEAKERS[k], text: s }]),
    items: answers.map((a, k) => ({ prompt: SPEAKERS[k], answer: a })),
    explanation: 'Escucha sinónimos: el audio rara vez usa las mismas palabras que la opción correcta.',
  };
}

export const listeningPart2: Task[] = [
  speakers('l2a01', 'Why I chose my job', 'B1', 'Information matching', [
    'I’d always been good with numbers, but what really decided it was my uncle. He ran a small accounting firm and let me work there every summer while I was at school. By the time I finished, I knew exactly what I wanted to do.',
    'Honestly, I didn’t plan any of it. I needed money to pay my rent, and a hotel near my flat was looking for a night receptionist. I only meant to stay a few months. Fifteen years later, I manage the whole hotel.',
    'After I spent a week in hospital as a teenager, I saw how much the nurses did for the patients. It made me realise I wanted a job where I could really improve people’s lives, even if the pay isn’t great.',
    'I always wanted a job that would take me to different places. I work as a flight attendant now, and in the last year alone I’ve been to more than twenty countries. The hours are long, but I never get bored.',
  ], [
    'gained experience in a relative’s business',
    'started the job by chance',
    'wanted to make a difference to others',
    'wanted to see the world',
  ], ['chose the job because of the salary', 'followed a teacher’s advice']),

  speakers('l2a02', 'My ideal holiday', 'B1', 'Information matching', [
    'I don’t see the point of spending a fortune on hotels. We take a tent, drive to the coast and cook our own food. A week away costs us less than a weekend in a city.',
    'My job is so stressful that on holiday I just want to switch off. Give me a sunbed, a good book and the sea, and I won’t move for a week. I don’t even check my emails.',
    'I love wandering around old cities, visiting museums and finding out how people lived hundreds of years ago. Last year I went to Rome and spent a whole day in the ancient Forum.',
    'Lying on a beach bores me after half an hour. I need to be doing something, so I usually go walking in the mountains in summer and skiing in winter. I come back exhausted but happy.',
  ], [
    'prefers holidays that cost little',
    'wants to rest completely',
    'enjoys learning about the past',
    'likes physically active holidays',
  ], ['always travels with a large group', 'prefers to stay at home']),

  speakers('l2a03', 'Public transport', 'B2', 'Information matching', [
    'A monthly pass in my city now costs almost as much as running a small car. I still use the metro, but I think it’s unfair that prices keep going up while the service stays the same.',
    'I actually enjoy my train journey. It takes forty minutes, and that’s when I answer emails and plan my day. By the time I get to the office, half my admin is done.',
    'I used to take the bus every day, but it was late so often that I missed meetings. In the end I bought a bike, and now I always know exactly when I’ll arrive.',
    'I sold my car two years ago. I was worried about the air quality in the city, and I felt I should do something myself rather than just complain about it.',
  ], [
    'thinks tickets are too expensive',
    'uses the journey time productively',
    'stopped using it because it was unreliable',
    'uses it to help reduce pollution',
  ], ['is afraid of crowded trains', 'prefers to drive to work']),

  speakers('l2a04', 'Learning to cook', 'B1', 'Information matching', [
    'Everything I know about cooking comes from my grandmother. Every Sunday I’d stand next to her in the kitchen, and she never used a recipe — she just knew. I still make her soup every winter.',
    'I’d love to cook more, but from Monday to Friday I leave home at seven and get back after eight. So cooking is really a weekend thing for me. Saturday is when I try something new.',
    'I taught myself, really. Whenever I want to make something, I search for it on the internet and follow a video step by step. There are thousands of them, and they’re free.',
    'I started cooking properly when my doctor told me I was eating too much salt. Ready meals are full of it. Now I prepare my own food and I know exactly what goes into it.',
  ], [
    'learned from an older relative',
    'has little time during the week',
    'learns recipes online',
    'cooks to eat more healthily',
  ], ['works as a professional chef', 'dislikes cooking']),

  speakers('l2a05', 'Social media', 'B2', 'Information matching', [
    'As a wedding photographer, I couldn’t survive without it. Almost all my new clients find me through the pictures I post. I spend at least an hour a day answering messages from couples.',
    'Two years ago I deleted every account I had. For the first week I kept reaching for my phone, but now I don’t miss it at all. I sleep better and I read far more.',
    'My brother lives in Canada and my parents are in Chile, so for us it’s the easiest way to share photos and stay part of each other’s lives. I don’t really use it for anything else.',
    'I noticed I was spending three hours a day scrolling, so I set a timer on my phone. After thirty minutes, the apps lock. It was annoying at first, but it has really helped.',
  ], [
    'uses it to promote their business',
    'gave it up completely',
    'stays in contact with family far away',
    'controls how long they spend on it',
  ], ['mainly uses it to follow the news', 'only uses it to watch videos']),

  speakers('l2a06', 'Where I live', 'B1', 'Information matching', [
    'I live on the tenth floor, right in the centre. It’s noisy at night, but I can walk to work in five minutes and there are cafés everywhere. I wouldn’t swap it for anything.',
    'We moved to a village last year so the kids could have a garden. The houses are much bigger for the same money, but I spend nearly two hours a day driving to the office and back.',
    'My flat is tiny and the building is old, but my neighbours are wonderful. We look after each other’s plants, share meals at the weekend, and someone always helps if there’s a problem.',
    'I rent a room in a shared house near the university. It isn’t ideal, because I have to share the kitchen with five people, but it’s the only thing I can afford while I’m studying.',
  ], [
    'enjoys being close to everything',
    'has a long journey to work',
    'gets on very well with the people nearby',
    'lives there for financial reasons',
  ], ['is planning to move abroad', 'designed the house themselves']),

  speakers('l2a07', 'A memorable trip', 'B2', 'Information matching', [
    'We’d planned everything for months, and then the airline cancelled our flight the day before. We ended up taking two trains and a ferry. It took forever, but honestly, that journey became the best part of the holiday.',
    'I went to Japan on my own, which I’d never done before. I was nervous at first, but I discovered I really enjoy deciding everything myself. Now I prefer travelling alone.',
    'What I remember most is the food. Every day we tried something completely new, from street markets to tiny family restaurants. I came home and started cooking dishes I’d never even heard of before.',
    'It rained every single day of our week in Scotland. We hardly saw the mountains we’d gone there for. Still, we spent a lot of time in pubs chatting to locals, and they were incredibly friendly.',
  ], [
    'enjoyed an unexpected change of plan',
    'found out something about themselves',
    'was inspired to try something at home',
    'had bad luck with the weather',
  ], ['lost their luggage', 'travelled for work']),

  speakers('l2a08', 'My first job', 'B1', 'Information matching', [
    'My first job was in a supermarket when I was sixteen. The pay was terrible, but I saved every penny, and by the end of the summer I could buy my first bike.',
    'I started as a waiter in my aunt’s restaurant. The work was hard, but I learned how to deal with difficult customers. That skill has helped me in every job since.',
    'I got my first job straight after university in a big bank. I hated it. The hours were long and I never saw daylight. After six months, I left to retrain as a teacher.',
    'I helped a neighbour with his garden every weekend. He paid me a little, but more importantly he taught me the names of all the plants. Now I’m a professional gardener.',
  ], [
    'used the money for a specific purchase',
    'developed a useful ability',
    'quickly decided to change career',
    'discovered what they wanted to do in life',
  ], ['was promoted very quickly', 'worked abroad']),

  speakers('l2a09', 'Reading habits', 'B2', 'Information matching', [
    'I read on my phone, mostly on the train. People say it’s bad for your eyes, but it means I always have a book with me, and I read far more than I used to.',
    'I belong to a book club that meets once a month. I’d never have chosen most of the books myself, but that’s the point. I’ve discovered authors I now love.',
    'I hardly read novels any more. I prefer history and science books, because I like to learn something real. Fiction just doesn’t hold my attention these days.',
    'I listen to audiobooks while I’m running or cooking. Some people say that isn’t real reading, but I don’t care. It’s the only way I can fit books into my busy life.',
  ], [
    'reads more since changing format',
    'reads books chosen by other people',
    'prefers factual books',
    'combines books with other activities',
  ], ['buys a lot of second-hand books', 'writes book reviews online']),

  speakers('l2a10', 'Sport and exercise', 'B1', 'Information matching', [
    'I joined a basketball team at forty. I’m not very good, but it doesn’t matter. After the game we all go for dinner together, and those evenings are the highlight of my week.',
    'I go to the gym at six every morning before work. It’s the only time nobody can disturb me. By eight o’clock I’ve exercised, showered and I feel ready for anything.',
    'I used to run marathons, but I hurt my knee badly two years ago. Now I swim instead. It’s gentler on my body, and actually I enjoy it more than I expected.',
    'I don’t do any sport, really. I walk to work and take the stairs instead of the lift. That’s enough exercise for me, and it doesn’t cost anything.',
  ], [
    'values the social side of sport',
    'exercises at a fixed time each day',
    'changed activity because of an injury',
    'stays active through daily routines',
  ], ['competes at a professional level', 'trains with a personal coach']),

  speakers('l2a11', 'Saving money', 'B2', 'Information matching', [
    'I write down everything I spend in an app. At the end of each month I can see exactly where my money went. It was a shock at first — I was spending a fortune on takeaway coffee.',
    'Every time I get paid, a fixed amount goes straight into a separate account. I never touch it. That way I save without having to think about it.',
    'I’ve stopped buying new things whenever possible. Furniture, clothes, even my bike — they’re all second-hand. I save money, and it’s better for the environment too.',
    'Honestly, I’m terrible at saving. Whenever I have a bit extra, I spend it on travelling. My parents worry about me, but I’d rather have the memories.',
  ], [
    'keeps a record of their expenses',
    'saves automatically',
    'buys used items',
    'prefers spending on experiences',
  ], ['has just bought a house', 'works in a bank']),

];

// ---------------- Part 3: discussion (man / woman / both) ----------------
const MWB = ['Man', 'Woman', 'Both'];
const d = (lines: [string, string][]): ScriptLine[] =>
  lines.map(([speaker, text]) => ({ speaker, text }));

export const listeningPart3: Task[] = [
  {
    id: 'l3a01', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Choosing a flat', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'I really think we should take the flat near the station. The commute would be so much easier.'],
      ['Man', 'Maybe, but did you see how small the kitchen was? I cook every day. I need space.'],
      ['Woman', 'True, the kitchen is tiny. But we’d save an hour a day travelling, and for me that matters more than anything.'],
      ['Man', 'The other one has a garden, though. I’d love to grow our own vegetables.'],
      ['Woman', 'A garden means work. I honestly don’t have time for that.'],
      ['Man', 'Well, let’s look at a couple more places before we decide.'],
      ['Woman', 'Fine, but not too many.'],
    ])],
    items: [
      { prompt: 'The kitchen in the flat near the station is too small.', answer: 'Both' },
      { prompt: 'Looking after a garden would take too much time.', answer: 'Woman' },
      { prompt: 'Growing food would be enjoyable.', answer: 'Man' },
      { prompt: 'Travel time is the most important factor.', answer: 'Woman' },
    ],
  },
  {
    id: 'l3a02', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Shopping online', instructions: P3, options: MWB,
    audio: [d([
      ['Man', 'I buy almost everything online now. It’s just more convenient.'],
      ['Woman', 'I do for books, but never for clothes. I need to try them on.'],
      ['Man', 'You can always send them back.'],
      ['Woman', 'That’s the problem — returning things is such a nuisance. And all that packaging is terrible for the environment.'],
      ['Man', 'I agree about the packaging, actually. Some parcels arrive in boxes three times too big.'],
      ['Woman', 'Also, I like supporting the small shops in my neighbourhood. If we don’t use them, they’ll close.'],
      ['Man', 'That’s fair, but they’re usually more expensive.'],
    ])],
    items: [
      { prompt: 'Sending items back is annoying.', answer: 'Woman' },
      { prompt: 'Online orders create too much packaging.', answer: 'Both' },
      { prompt: 'Local businesses need customers’ support.', answer: 'Woman' },
      { prompt: 'Small shops charge higher prices.', answer: 'Man' },
    ],
  },
  {
    id: 'l3a03', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Running a marathon', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'I’ve signed up for the city marathon in April.'],
      ['Man', 'Wow. I’d never do that. Running such long distances must be terrible for your knees.'],
      ['Woman', 'Not if you train properly. I’m following a sixteen-week plan so I don’t get injured.'],
      ['Man', 'Sixteen weeks! That’s a huge commitment.'],
      ['Woman', 'It is, and it’s hard to fit around work. Some mornings I get up at five.'],
      ['Man', 'I prefer team sports. I play football on Sundays; it’s more sociable.'],
      ['Woman', 'I get that. Running on your own can be lonely. That’s why I joined a club.'],
      ['Man', 'Having other people around definitely keeps you motivated.'],
      ['Woman', 'Absolutely.'],
    ])],
    items: [
      { prompt: 'Long-distance running can damage your body.', answer: 'Man' },
      { prompt: 'Preparing for a marathon takes a lot of time.', answer: 'Both' },
      { prompt: 'Exercising with others is motivating.', answer: 'Both' },
      { prompt: 'Careful training helps to avoid injuries.', answer: 'Woman' },
    ],
  },
  {
    id: 'l3a04', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'A new sports centre', instructions: P3, options: MWB,
    audio: [d([
      ['Man', 'Have you heard the council wants to build a new sports centre where the park is?'],
      ['Woman', 'Yes, and I’m completely against it. That park is the only green space in the area.'],
      ['Man', 'I see your point, but the town really needs a swimming pool. The nearest one is twenty kilometres away.'],
      ['Woman', 'I don’t disagree that we need a pool. I just think they should build it somewhere else.'],
      ['Man', 'Like where, though? There’s no other free land.'],
      ['Woman', 'What about the old car factory? It’s been empty for years.'],
      ['Man', 'That could work, but cleaning up that site would cost a fortune.'],
      ['Woman', 'More than losing the park forever?'],
    ])],
    items: [
      { prompt: 'The town needs a swimming pool.', answer: 'Both' },
      { prompt: 'The park should be protected.', answer: 'Woman' },
      { prompt: 'There is nowhere else to build.', answer: 'Man' },
      { prompt: 'Using the factory site would be expensive.', answer: 'Man' },
    ],
  },
  {
    id: 'l3a05', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Cinema or home?', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'Do you want to go to the cinema on Friday?'],
      ['Man', 'Honestly, I’d rather watch something at home. Tickets are so expensive now.'],
      ['Woman', 'They are, but the experience is different. The big screen, the sound…'],
      ['Man', 'My TV is pretty big. And at home I can pause the film whenever I want.'],
      ['Woman', 'That’s exactly what I don’t like. At home I always end up checking my phone.'],
      ['Man', 'Fair enough. I’m the same, actually. I never get through a whole film without looking at it.'],
      ['Woman', 'So come on Friday. We’ll leave our phones in our pockets.'],
      ['Man', 'Okay, but you’re buying the popcorn.'],
    ])],
    items: [
      { prompt: 'Cinema tickets cost too much.', answer: 'Both' },
      { prompt: 'It is hard to concentrate when watching at home.', answer: 'Both' },
      { prompt: 'Being able to stop the film is an advantage.', answer: 'Man' },
      { prompt: 'The cinema offers a better experience.', answer: 'Woman' },
    ],
  },
  {
    id: 'l3a06', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Getting a dog', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'The kids keep asking for a dog. I think it’s time we said yes.'],
      ['Man', 'I’d love one too, but who’s going to walk it? We both work all day.'],
      ['Woman', 'That’s true, we’d need someone to come in at lunchtime. That costs money.'],
      ['Man', 'And vet bills can be huge. My brother spent hundreds last year.'],
      ['Woman', 'Still, I think it would teach the children responsibility.'],
      ['Man', 'Maybe. Or maybe they’ll get bored after a month and we’ll do everything.'],
      ['Woman', 'Let’s start by looking after my sister’s dog for a week and see how it goes.'],
      ['Man', 'Good idea. That’s a sensible test.'],
    ])],
    items: [
      { prompt: 'Their work schedules make it difficult to own a dog.', answer: 'Both' },
      { prompt: 'Medical care for animals can be expensive.', answer: 'Man' },
      { prompt: 'Having a dog would be good for the children’s development.', answer: 'Woman' },
      { prompt: 'Trying it out for a short period is a good plan.', answer: 'Both' },
    ],
  },
  {
    id: 'l3a07', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Learning to drive', instructions: P3, options: MWB,
    audio: [d([
      ['Man', 'My daughter wants to start driving lessons. Honestly, I’m not sure she needs a car in the city.'],
      ['Woman', 'Maybe not now, but a licence is useful for jobs later on.'],
      ['Man', 'I suppose so. But lessons are so expensive these days.'],
      ['Woman', 'They are. Could you teach her yourself for some of the practice?'],
      ['Man', 'Me? I’d be far too nervous. I’d shout at every corner.'],
      ['Woman', 'Ha! I was the same with my son. In the end a professional instructor is better.'],
      ['Man', 'And safer, I imagine.'],
      ['Woman', 'Definitely safer.'],
    ])],
    items: [
      { prompt: 'A driving licence can help with future employment.', answer: 'Woman' },
      { prompt: 'Driving lessons cost a lot.', answer: 'Both' },
      { prompt: 'Teaching your own child to drive is stressful.', answer: 'Both' },
      { prompt: 'Young people may not need a car in a city.', answer: 'Man' },
    ],
  },
  {
    id: 'l3a08', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Working from home', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'My company wants everyone back in the office five days a week.'],
      ['Man', 'Really? I’d hate that. I get so much more done at home.'],
      ['Woman', 'I don’t know. At home I find it hard to separate work from the rest of my life.'],
      ['Man', 'I can see that. I sometimes answer emails at eleven at night.'],
      ['Woman', 'Exactly. And I miss chatting with colleagues. Ideas come up over coffee.'],
      ['Man', 'For me, the commute is the deal-breaker. Ninety minutes a day, wasted.'],
      ['Woman', 'I suppose two or three days in the office would be the best compromise.'],
      ['Man', 'I could live with two.'],
    ])],
    items: [
      { prompt: 'People are more productive at home.', answer: 'Man' },
      { prompt: 'Working from home can lead to working too late.', answer: 'Both' },
      { prompt: 'Informal conversations at work are valuable.', answer: 'Woman' },
      { prompt: 'A mix of home and office would be acceptable.', answer: 'Both' },
    ],
  },
  {
    id: 'l3a09', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Planning a holiday', instructions: P3, options: MWB,
    audio: [d([
      ['Man', 'So, where shall we go this summer? I was thinking of Greece again.'],
      ['Woman', 'Again? We’ve been three times. I’d like to try somewhere new.'],
      ['Man', 'But we know it’s good. New places can be a disappointment.'],
      ['Woman', 'That’s part of the adventure, though. What about Norway?'],
      ['Man', 'Norway is beautiful, but it’s very expensive.'],
      ['Woman', 'It is, I won’t deny that. But we could camp to save money.'],
      ['Man', 'Camping? At my age? Well… maybe for a few nights.'],
      ['Woman', 'That’s all I’m asking.'],
    ])],
    items: [
      { prompt: 'Going to a familiar place is the safer choice.', answer: 'Man' },
      { prompt: 'Discovering new places is exciting.', answer: 'Woman' },
      { prompt: 'Norway is a costly destination.', answer: 'Both' },
      { prompt: 'Camping is acceptable for part of the holiday.', answer: 'Both' },
    ],
  },
  {
    id: 'l3a10', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Video games', instructions: P3, options: MWB,
    audio: [d([
      ['Woman', 'My son plays video games for about three hours a day. It worries me.'],
      ['Man', 'Three hours is a lot. But some games are actually quite good for problem-solving.'],
      ['Woman', 'Maybe, but he doesn’t go outside any more.'],
      ['Man', 'That’s the real problem, I agree. Kids need fresh air and exercise.'],
      ['Woman', 'I’m thinking of limiting it to one hour on school days.'],
      ['Man', 'Make sure you explain why, though. If you just ban it, he’ll play at his friends’ houses.'],
      ['Woman', 'Good point. I’ll talk to him tonight.'],
    ])],
    items: [
      { prompt: 'Some games can develop useful skills.', answer: 'Man' },
      { prompt: 'Children are spending too little time outdoors.', answer: 'Both' },
      { prompt: 'Setting a daily time limit is a good idea.', answer: 'Woman' },
      { prompt: 'Rules work better when they are explained.', answer: 'Man' },
    ],
  },
  {
    id: 'l3a11', skill: 'listening', kind: 'listening-discussion', level: 'B2', topic: 'Inference: discussion',
    title: 'Eating less meat', instructions: P3, options: MWB,
    audio: [d([
      ['Man', 'I’ve decided to stop eating meat during the week.'],
      ['Woman', 'Really? Why?'],
      ['Man', 'Partly for the environment. Producing meat uses so much water and land.'],
      ['Woman', 'That’s true, I’ve read about that. But I’d find it hard. I love a good steak.'],
      ['Man', 'I do too, that’s why I still eat it at weekends. And I’ve been saving money, actually. Vegetables and beans are cheap.'],
      ['Woman', 'Hmm. The problem for me is that vegetarian food takes longer to cook.'],
      ['Man', 'Not necessarily. Lentil soup takes twenty minutes.'],
      ['Woman', 'Maybe you could send me the recipe.'],
    ])],
    items: [
      { prompt: 'Meat production has a big environmental impact.', answer: 'Both' },
      { prompt: 'Giving up meat completely would be difficult.', answer: 'Both' },
      { prompt: 'A diet with less meat is cheaper.', answer: 'Man' },
      { prompt: 'Vegetarian cooking is time-consuming.', answer: 'Woman' },
    ],
  },
];

export { mono };
