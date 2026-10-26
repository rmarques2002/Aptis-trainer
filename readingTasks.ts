import type { Task } from '../types';

// Aptis-style Reading tasks (original content), one file per official part.

const P1 = 'Choose the word that fits in each gap.';
const P2 = 'The sentences below are from a text. The first sentence is given. Put the other five sentences in the correct order.';
const P3 = 'Read the four people’s opinions. For each statement, choose the person who expresses it. People can be chosen more than once.';
const P4 = 'Read the text. Choose the best heading for each paragraph. There is one heading you do not need.';

// ---------------- Part 1: sentence comprehension (gap-fill) ----------------
export const readingPart1: Task[] = [
  {
    id: 'r1a01', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Email from Marta', instructions: `${P1}\n\nHi Tom,`,
    items: [
      { prompt: 'I’m writing to ___ you about Saturday.', options: ['remind', 'remember', 'remain'], answer: 'remind' },
      { prompt: 'The football match starts ___ 3 pm.', options: ['at', 'on', 'in'], answer: 'at' },
      { prompt: 'Let’s meet at the café ___ the stadium.', options: ['opposite', 'among', 'during'], answer: 'opposite' },
      { prompt: 'Don’t forget to ___ your ticket with you.', options: ['bring', 'borrow', 'lend'], answer: 'bring' },
      { prompt: 'Text me if you are going to be ___.', options: ['late', 'slow', 'delay'], answer: 'late' },
    ],
  },
  {
    id: 'r1a02', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Note to a flatmate', instructions: `${P1}\n\nHi Sam,`,
    items: [
      { prompt: 'I’ve gone to the supermarket ___ some bread.', options: ['to buy', 'buying', 'bought'], answer: 'to buy' },
      { prompt: 'The plumber is coming at 11 ___ fix the sink.', options: ['to', 'for', 'and'], answer: 'to' },
      { prompt: 'Could you ___ the door for him if I’m not back?', options: ['open', 'answer to', 'enter'], answer: 'open' },
      { prompt: 'There’s some pasta in the ___ if you get hungry.', options: ['fridge', 'sofa', 'garage'], answer: 'fridge' },
      { prompt: 'I’ll be ___ by lunchtime.', options: ['back', 'again', 'return'], answer: 'back' },
    ],
  },
  {
    id: 'r1a03', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Message from your manager', instructions: `${P1}\n\nDear team,`,
    items: [
      { prompt: 'The meeting has been ___ to Thursday.', options: ['moved', 'removed', 'stayed'], answer: 'moved' },
      { prompt: 'Please ___ your reports before then.', options: ['finish', 'finished', 'finishing'], answer: 'finish' },
      { prompt: 'We will meet in room 4 ___ the second floor.', options: ['on', 'in', 'at'], answer: 'on' },
      { prompt: 'It will ___ about an hour.', options: ['last', 'spend', 'pass'], answer: 'last' },
      { prompt: 'Let me know if you ___ attend.', options: ['can’t', 'won’t to', 'don’t able'], answer: 'can’t' },
    ],
  },
  {
    id: 'r1a04', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Party invitation', instructions: `${P1}\n\nHi everyone,`,
    items: [
      { prompt: 'We’re having a party ___ Anna’s birthday.', options: ['for', 'to', 'of'], answer: 'for' },
      { prompt: 'It’s at our house ___ Saturday evening.', options: ['on', 'in', 'at'], answer: 'on' },
      { prompt: 'Please ___ something to drink.', options: ['bring', 'send', 'steal'], answer: 'bring' },
      { prompt: 'Anna ___ know about it — it’s a surprise!', options: ['doesn’t', 'isn’t', 'don’t'], answer: 'doesn’t' },
      { prompt: 'Reply ___ Friday so I know how many people are coming.', options: ['by', 'until', 'since'], answer: 'by' },
    ],
  },
  {
    id: 'r1a05', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Hotel information', instructions: `${P1}\n\nWelcome to the Harbour Hotel.`,
    items: [
      { prompt: 'Breakfast is ___ from 7 to 10 am.', options: ['served', 'spent', 'taken'], answer: 'served' },
      { prompt: 'Guests must ___ their room by 11 am on the last day.', options: ['leave', 'stay', 'arrive'], answer: 'leave' },
      { prompt: 'Towels for the pool are ___ at reception.', options: ['available', 'possible', 'able'], answer: 'available' },
      { prompt: 'The gym is ___ the ground floor.', options: ['on', 'in', 'at'], answer: 'on' },
      { prompt: 'Please ___ reception if you need anything.', options: ['contact', 'contact to', 'contacting'], answer: 'contact' },
    ],
  },
  {
    id: 'r1a06', skill: 'reading', kind: 'reading-gapfill', level: 'B1', topic: 'Sentence comprehension',
    title: 'Cycling club notice', instructions: `${P1}\n\nNew members welcome!`,
    items: [
      { prompt: 'The cycling club meets ___ Sunday morning.', options: ['every', 'all', 'each of'], answer: 'every' },
      { prompt: 'Rides are usually ___ 30 and 50 kilometres long.', options: ['between', 'from', 'among'], answer: 'between' },
      { prompt: 'Beginners are ___ welcome.', options: ['always', 'never', 'ever'], answer: 'always' },
      { prompt: 'You need a helmet and a bike in good ___.', options: ['condition', 'health', 'form'], answer: 'condition' },
      { prompt: 'Send us an email to ___ up.', options: ['sign', 'write', 'take'], answer: 'sign' },
    ],
  },
];

// ---------------- Part 2: text cohesion (ordering) ----------------
function order(id: string, title: string, level: 'B1' | 'B2', sentences: string[]): Task {
  return {
    id, skill: 'reading', kind: 'reading-order', title, instructions: P2, level,
    topic: 'Text cohesion', items: [], sentences,
    explanation: 'Fíjate en pronombres (it, they, this), conectores (however, then, as a result) y en qué información necesita ir antes.',
  };
}

export const readingPart2: Task[] = [
  order('r2a01', 'Library renovation', 'B1', [
    'The city library will close next month for major renovation work.',
    'The work is expected to take about six months.',
    'During this time, a temporary library will open in the community centre.',
    'It will not have as many books, but members will be able to order any title online.',
    'These orders can then be collected from the temporary library within two days.',
    'Finally, when the main library reopens, it will have a new café and a children’s area.',
  ]),
  order('r2a02', 'Making bread at home', 'B1', [
    'Making your own bread at home is easier than most people think.',
    'First, mix flour, water, yeast and a little salt in a large bowl.',
    'Then knead the dough for about ten minutes until it becomes smooth.',
    'After that, leave it in a warm place for an hour so that it can rise.',
    'Once it has doubled in size, bake it in a hot oven for thirty minutes.',
    'The result is a fresh loaf that is much cheaper than one from a shop.',
  ]),
  order('r2a03', 'The new skate park', 'B1', [
    'Last year, the council built a new skate park next to Riverside School.',
    'At first, local residents were worried that it would be noisy.',
    'However, these fears soon disappeared.',
    'The park closes at eight in the evening, so it is quiet at night.',
    'It has also become a popular meeting place for teenagers who previously had nowhere to go.',
    'Because of this success, the council plans to build a second park in the north of the town.',
  ]),
  order('r2a04', 'A summer abroad', 'B1', [
    'When I was nineteen, I decided to spend a summer working abroad.',
    'I found a job in a hotel in the south of France.',
    'The work there was hard, and my French was very poor at the beginning.',
    'But the other staff were patient and helped me learn.',
    'By the end of the summer, I could have simple conversations with the guests.',
    'That experience gave me the confidence to study languages at university.',
  ]),
  order('r2a05', 'A new office', 'B1', [
    'We are pleased to announce that our company is opening a new office in Valencia.',
    'The office will be located in the city centre, close to the train station.',
    'Around forty people will work there when it opens in March.',
    'Most of these positions will be filled by local candidates.',
    'Anyone interested in applying should visit the careers page of our website.',
    'Applications must be received by the end of January.',
  ]),
  order('r2a06', 'Why bees matter', 'B2', [
    'Bees play a vital role in producing much of the food we eat.',
    'As they move from flower to flower, they carry the pollen that plants need to produce fruit.',
    'Without this process, crops such as apples and almonds would fail.',
    'Unfortunately, bee populations have fallen sharply in many countries.',
    'Scientists believe this decline is caused by pesticides, disease and the loss of wild flowers.',
    'To help, some cities are now planting flowers on rooftops and along roads.',
  ]),
  order('r2a07', 'A hotel complaint', 'B2', [
    'I am writing to complain about my recent stay at your hotel.',
    'When I arrived, I was told that the room I had booked was not available.',
    'Instead, I was given a much smaller room overlooking the car park.',
    'In addition, the air conditioning in this room did not work.',
    'I reported the problem twice, but nobody came to repair it.',
    'I would therefore like a partial refund for the three nights I stayed.',
  ]),
  order('r2a08', 'The summer festival', 'B2', [
    'The town’s summer festival began in 1985 as a small music event.',
    'In its first year, only a few hundred people attended.',
    'Over the following decade, however, it grew steadily in popularity.',
    'By 2000, it was attracting more than twenty thousand visitors.',
    'This growth brought money into the town, but it also caused problems with traffic and rubbish.',
    'As a result, the organisers now limit the number of tickets they sell each day.',
  ]),
  order('r2a09', 'Studying online', 'B2', [
    'A recent study looked at how well students learn when they study online.',
    'The researchers followed three hundred university students for a full year.',
    'Half of them attended classes in person, while the other half studied from home.',
    'At the end of the year, both groups took the same exam.',
    'Surprisingly, there was little difference between their results.',
    'However, the students who studied online said they had felt more isolated.',
  ]),
  order('r2a10', 'Welcome to the gym', 'B1', [
    'Welcome to Fitline Gym, and thank you for joining us.',
    'Before you use any machines, you must book an introductory session with one of our trainers.',
    'During this session, the trainer will show you how to use the equipment safely.',
    'They will also help you create a personal training plan.',
    'Once you have completed the session, you will receive your membership card.',
    'This card gives you access to the gym seven days a week.',
  ]),
];

// ---------------- Part 3: opinion matching ----------------
const PEOPLE = ['Person A', 'Person B', 'Person C', 'Person D'];

export const readingPart3: Task[] = [
  {
    id: 'r3a01', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'City or countryside?', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I grew up on a farm and moved to the city for university. At first I loved the energy, but after a few years the noise and the cost of rent became too much. Now I live in a village again and do my job online. Anyone who can work from home should consider leaving the city; the quality of life is simply better.' },
      { label: 'Person B', text: 'People romanticise the countryside, but they forget how isolated it can be. My grandparents live in a small village and have to drive forty minutes to see a doctor. For young people especially, the city offers jobs, culture and friends. I can’t imagine living anywhere else.' },
      { label: 'Person C', text: 'I think it depends on your stage of life. When I was single, the city was perfect. Now I have two small children, and I want them to grow up with fresh air and space to play. We moved out last year and I don’t regret it, although I do miss the restaurants.' },
      { label: 'Person D', text: 'Honestly, the countryside isn’t as peaceful as people say. Where I live, tractors start at five in the morning and the internet connection is terrible. The city is noisy too, of course, but at least services are close. The government should invest more in rural areas so that people have a real choice.' },
    ],
    items: [
      { prompt: 'Who thinks the best place to live changes as your life changes?', answer: 'Person C' },
      { prompt: 'Who mentions difficult access to healthcare outside cities?', answer: 'Person B' },
      { prompt: 'Who believes the authorities should improve life in villages?', answer: 'Person D' },
      { prompt: 'Who says working remotely makes country life possible?', answer: 'Person A' },
      { prompt: 'Who says rural areas can be noisy?', answer: 'Person D' },
      { prompt: 'Who misses something about living in a city?', answer: 'Person C' },
      { prompt: 'Who thinks young people are better off in the city?', answer: 'Person B' },
    ],
  },
  {
    id: 'r3a02', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Should children have smartphones?', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'My daughter got her first phone at twelve, when she started taking the bus to school on her own. For me it was mainly about being able to reach her. We agreed some rules: no phone at the dinner table and no phone in her bedroom at night. So far it has worked well.' },
      { label: 'Person B', text: 'As a teacher, I see the effect of phones every day. Students are more distracted and find it harder to concentrate on long texts. I’m glad our school has banned phones during lessons, but the ban should include break times too, so that children actually talk to each other.' },
      { label: 'Person C', text: 'Phones aren’t the problem; it’s how they’re used. My son learns the guitar with online videos and video-calls his cousins abroad. Instead of banning phones, we should be teaching children how to use technology responsibly. That’s a skill they’ll need for the rest of their lives.' },
      { label: 'Person D', text: 'I didn’t give my kids smartphones until they were sixteen, and I’m glad I waited. They complained a lot because all their friends had one, but they spent their free time doing sport and reading. If parents are worried about safety, there are basic phones that only make calls.' },
    ],
    items: [
      { prompt: 'Who gave their child a phone mainly to stay in contact?', answer: 'Person A' },
      { prompt: 'Who thinks phones should not be allowed at any time during the school day?', answer: 'Person B' },
      { prompt: 'Who suggests an alternative to a smartphone?', answer: 'Person D' },
      { prompt: 'Who describes ways a phone can help a child learn?', answer: 'Person C' },
      { prompt: 'Who set limits on when the phone can be used?', answer: 'Person A' },
      { prompt: 'Who says their children were unhappy with a decision?', answer: 'Person D' },
      { prompt: 'Who thinks children need to be taught to use technology well?', answer: 'Person C' },
    ],
  },
  {
    id: 'r3a03', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Tourism in popular cities', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I’ve lived in the old town for thirty years, and I hardly recognise it now. Most of the flats in my building are holiday rentals, so my neighbours change every week. The bakery I used to go to has become a souvenir shop. Tourism brings money, I understand that, but the people who actually live here are being pushed out.' },
      { label: 'Person B', text: 'Without tourists, my restaurant would close tomorrow. Around seventy percent of my customers come from abroad, especially in summer. Of course there are problems, but people forget how many jobs depend on visitors.' },
      { label: 'Person C', text: 'The issue is not the number of tourists but where they go. Everyone visits the same three streets at the same time. If we promoted other neighbourhoods and encouraged people to come outside the peak season, the pressure would be much lower.' },
      { label: 'Person D', text: 'I love travelling, but I’ve started to feel guilty about it. When I visited a famous city last spring, it was so crowded that I couldn’t enjoy anything. Now I choose smaller destinations and travel by train whenever I can. I’d happily pay a tourist tax if it helped local people.' },
    ],
    items: [
      { prompt: 'Who has changed the way they go on holiday?', answer: 'Person D' },
      { prompt: 'Who says visitors should be spread across more areas?', answer: 'Person C' },
      { prompt: 'Who regrets that local shops have disappeared?', answer: 'Person A' },
      { prompt: 'Who depends on tourists for their income?', answer: 'Person B' },
      { prompt: 'Who would accept paying more to visit a place?', answer: 'Person D' },
      { prompt: 'Who suggests visiting at different times of the year?', answer: 'Person C' },
      { prompt: 'Who says residents are being forced to leave?', answer: 'Person A' },
    ],
  },
  {
    id: 'r3a04', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Learning a language as an adult', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I started learning German at fifty-five, and I’m proof that it’s never too late. Progress is slower than when you’re young, I admit, but adults are more disciplined. I study for twenty minutes every morning before work, and after three years I can read newspapers.' },
      { label: 'Person B', text: 'Apps are fun, but in my experience they don’t take you very far. I used one for a year and learned lots of words, yet I still couldn’t hold a conversation. It was only when I joined a weekly class with a real teacher that I started speaking.' },
      { label: 'Person C', text: 'The best way is to live in the country. I moved to Italy for work without speaking a word, and within six months I could manage everyday situations. You have no choice but to communicate, and that pressure makes you learn fast.' },
      { label: 'Person D', text: 'People give up because they set unrealistic goals. They want to be fluent in a year, and when that doesn’t happen they feel like failures. I tell my students to focus on small achievements, like ordering a meal or understanding a song.' },
    ],
    items: [
      { prompt: 'Who found a class more useful than technology?', answer: 'Person B' },
      { prompt: 'Who thinks having to use the language helps you learn?', answer: 'Person C' },
      { prompt: 'Who has a daily study routine?', answer: 'Person A' },
      { prompt: 'Who thinks learners expect too much too quickly?', answer: 'Person D' },
      { prompt: 'Who says older learners have an advantage?', answer: 'Person A' },
      { prompt: 'Who teaches languages?', answer: 'Person D' },
      { prompt: 'Who learned mainly through everyday life abroad?', answer: 'Person C' },
    ],
  },
  {
    id: 'r3a05', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'A four-day working week', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'We tried a four-day week in our company for six months, and productivity actually went up. Staff were more focused because they knew they had less time, and fewer people were off sick. We’ve decided to keep it permanently.' },
      { label: 'Person B', text: 'It sounds great, but it isn’t realistic for everyone. Hospitals need staff seven days a week. If nurses worked fewer days, we would need to hire many more people, and there simply aren’t enough of them.' },
      { label: 'Person C', text: 'My company introduced a four-day week, but in practice we do the same amount of work in four days. I’m more tired than before, although I do enjoy the long weekends. I’d prefer shorter days rather than fewer days.' },
      { label: 'Person D', text: 'The evidence so far comes mainly from office jobs and small trials. Before governments make it law, we need larger studies across different sectors. I’m not against the idea, but we shouldn’t rush.' },
    ],
    items: [
      { prompt: 'Who says the change reduced staff illness?', answer: 'Person A' },
      { prompt: 'Who feels their workload has not become smaller?', answer: 'Person C' },
      { prompt: 'Who thinks more research is needed?', answer: 'Person D' },
      { prompt: 'Who mentions a lack of available workers?', answer: 'Person B' },
      { prompt: 'Who would prefer a different kind of change?', answer: 'Person C' },
      { prompt: 'Who has made the change permanent?', answer: 'Person A' },
      { prompt: 'Who says the idea cannot work in some jobs?', answer: 'Person B' },
    ],
  },
  {
    id: 'r3a06', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Electric cars', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I bought an electric car last year and I’ll never go back. It’s silent, it’s cheap to run, and I charge it at home overnight. The only thing that worries me is long journeys, because there still aren’t enough charging points on the motorway.' },
      { label: 'Person B', text: 'Everyone talks about electric cars as if they were the answer, but a car is still a car. It takes up space, it causes traffic jams and it needs roads. If we really want cleaner cities, we should invest in buses, trams and cycle lanes instead.' },
      { label: 'Person C', text: 'I’d like to switch, but they’re simply too expensive for me. A second-hand petrol car costs a third of the price of a new electric one. Until the government offers bigger discounts, people on normal salaries will keep driving what they can afford.' },
      { label: 'Person D', text: 'As a mechanic, I’ve noticed that electric cars need far less maintenance. There’s no oil to change and the brakes last much longer. However, when the battery fails, the repair can cost a fortune, and few garages are trained to do it.' },
    ],
    items: [
      { prompt: 'Who thinks public transport is a better solution?', answer: 'Person B' },
      { prompt: 'Who cannot afford an electric car at the moment?', answer: 'Person C' },
      { prompt: 'Who mentions a lack of infrastructure for long trips?', answer: 'Person A' },
      { prompt: 'Who talks about electric cars from a professional point of view?', answer: 'Person D' },
      { prompt: 'Who believes financial help from the state is needed?', answer: 'Person C' },
      { prompt: 'Who says one particular repair can be very expensive?', answer: 'Person D' },
      { prompt: 'Who is completely satisfied with their decision?', answer: 'Person A' },
    ],
  },
  {
    id: 'r3a07', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Homework', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'As a primary school teacher, I stopped giving homework three years ago. Young children need time to play, read for pleasure and be with their families. I haven’t seen any drop in results, and the children arrive at school more relaxed.' },
      { label: 'Person B', text: 'My son is sixteen and has two hours of homework every night. Some of it is useful, but much of it is just copying from the textbook. I’m not against homework, but it should be shorter and it should make students think.' },
      { label: 'Person C', text: 'I always did my homework, and I believe it taught me discipline. Learning to work alone, without a teacher next to you, is something you need at university and at work. Schools that abolish homework are not preparing students for real life.' },
      { label: 'Person D', text: 'Homework makes inequality worse. Children whose parents can help them, or pay for a private tutor, do well. Children from homes where nobody has time or the right knowledge fall behind. If practice is needed, it should happen at school.' },
    ],
    items: [
      { prompt: 'Who thinks homework helps students develop independence?', answer: 'Person C' },
      { prompt: 'Who says that removing homework has not harmed learning?', answer: 'Person A' },
      { prompt: 'Who thinks some families have an unfair advantage?', answer: 'Person D' },
      { prompt: 'Who criticises the type of tasks given as homework?', answer: 'Person B' },
      { prompt: 'Who believes extra practice should take place in the classroom?', answer: 'Person D' },
      { prompt: 'Who links homework to success in later life?', answer: 'Person C' },
      { prompt: 'Who mentions the importance of family time for young children?', answer: 'Person A' },
    ],
  },
  {
    id: 'r3a08', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Fast fashion', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I love fashion, and cheap clothes mean I can follow trends without spending much. I know the factories aren’t perfect, but I don’t think it’s fair to blame shoppers. It’s the companies and governments that should improve working conditions.' },
      { label: 'Person B', text: 'A few years ago I decided to buy only second-hand clothes. Charity shops and online apps have amazing things, and it’s much better for the planet. The only problem is that it takes time to find clothes in my size.' },
      { label: 'Person C', text: 'I work in a clothing shop, and I see how much is thrown away. Items that don’t sell are often destroyed rather than given away. Customers would be shocked if they knew. I’m trying to change this policy in my company.' },
      { label: 'Person D', text: 'I prefer to spend more on fewer clothes. A good coat can last ten years, while a cheap one is finished after one winter. In the long run, quality clothes are actually the economical option.' },
    ],
    items: [
      { prompt: 'Who says buying better clothes saves money over time?', answer: 'Person D' },
      { prompt: 'Who describes a practice that customers are not aware of?', answer: 'Person C' },
      { prompt: 'Who thinks consumers should not be held responsible?', answer: 'Person A' },
      { prompt: 'Who finds it difficult to find clothes that fit?', answer: 'Person B' },
      { prompt: 'Who is trying to change things where they work?', answer: 'Person C' },
      { prompt: 'Who chooses clothes mainly for environmental reasons?', answer: 'Person B' },
      { prompt: 'Who enjoys keeping up with new styles?', answer: 'Person A' },
    ],
  },
  {
    id: 'r3a09', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Keeping pets in flats', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'We have a large dog in a small flat, and it works because we walk him three times a day. People who say dogs need a garden are wrong; what they need is exercise and company. A garden doesn’t help if the dog is alone all day.' },
      { label: 'Person B', text: 'My neighbours’ dog barks for hours when they are at work. I’ve spoken to them twice and nothing has changed. I like animals, but I think building owners should be allowed to set clear rules about pets.' },
      { label: 'Person C', text: 'For older people living alone, a pet can make an enormous difference. My grandmother adopted a cat after my grandfather died, and it gave her a reason to get up every morning. It’s a pity that some landlords don’t allow animals.' },
      { label: 'Person D', text: 'People should think carefully before getting a pet. Every summer, animal shelters fill up with dogs and cats that were bought as presents and later abandoned. A pet is a commitment of ten or fifteen years, not a toy.' },
    ],
    items: [
      { prompt: 'Who has had a problem with noise?', answer: 'Person B' },
      { prompt: 'Who says an animal’s needs are not about space?', answer: 'Person A' },
      { prompt: 'Who talks about the emotional benefits of having a pet?', answer: 'Person C' },
      { prompt: 'Who mentions animals that people no longer want?', answer: 'Person D' },
      { prompt: 'Who thinks there should be more regulations?', answer: 'Person B' },
      { prompt: 'Who criticises property owners who ban animals?', answer: 'Person C' },
      { prompt: 'Who says owning a pet is a long-term responsibility?', answer: 'Person D' },
    ],
  },
  {
    id: 'r3a10', skill: 'reading', kind: 'reading-opinion', level: 'B2', topic: 'Opinion matching',
    title: 'Volunteering', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'I started volunteering at a food bank to add something to my CV, if I’m honest. But after a few months it became the best part of my week. I’ve made close friends there, and I go now simply because I enjoy it.' },
      { label: 'Person B', text: 'I think volunteering should be part of the school curriculum. Teenagers would learn about their own community and develop skills like teamwork and responsibility. Some countries already do this, and it seems to work well.' },
      { label: 'Person C', text: 'I run a charity, and we couldn’t survive without volunteers. However, I worry when governments rely on them to provide basic services. Caring for elderly people, for example, is a job that should be properly paid.' },
      { label: 'Person D', text: 'I’d love to volunteer, but with two jobs and a child, I have no free time at all. Organisations should offer more flexible options, like helping online for an hour from home. Not everyone can commit to a fixed timetable.' },
    ],
    items: [
      { prompt: 'Who had a practical reason for starting to volunteer?', answer: 'Person A' },
      { prompt: 'Who thinks young people should be required to volunteer?', answer: 'Person B' },
      { prompt: 'Who believes some work should not be done for free?', answer: 'Person C' },
      { prompt: 'Who suggests a way to make volunteering easier?', answer: 'Person D' },
      { prompt: 'Who mentions examples from other countries?', answer: 'Person B' },
      { prompt: 'Who says volunteering has improved their social life?', answer: 'Person A' },
      { prompt: 'Who manages an organisation?', answer: 'Person C' },
    ],
  },
  {
    id: 'r3a11', skill: 'reading', kind: 'reading-opinion', level: 'C1', topic: 'Opinion matching',
    title: 'Artificial intelligence at work', instructions: P3, options: PEOPLE,
    texts: [
      { label: 'Person A', text: 'In my translation agency, AI tools now produce first drafts in seconds. Our translators spend their time checking and improving the text instead. We take on twice as many projects as before, although clients now expect lower prices.' },
      { label: 'Person B', text: 'I’m a graphic designer, and I’m genuinely worried. Clients who used to pay me for illustrations now generate images themselves for almost nothing. I’ve lost about a third of my income in two years, and nobody seems to care.' },
      { label: 'Person C', text: 'Every new technology causes panic. People said computers would destroy office jobs, and instead they created millions of new ones. AI will be the same: some tasks will disappear, but others we can’t imagine yet will appear.' },
      { label: 'Person D', text: 'What concerns me is not jobs but mistakes. These systems sound very confident even when they are completely wrong. In fields like medicine or law, a human expert must always check the result before anyone acts on it.' },
    ],
    items: [
      { prompt: 'Who compares AI with earlier changes in technology?', answer: 'Person C' },
      { prompt: 'Who has experienced a fall in earnings?', answer: 'Person B' },
      { prompt: 'Who thinks AI should always be supervised in certain professions?', answer: 'Person D' },
      { prompt: 'Who says their business has become more productive?', answer: 'Person A' },
      { prompt: 'Who points out a disadvantage of increased efficiency?', answer: 'Person A' },
      { prompt: 'Who feels their situation is being ignored?', answer: 'Person B' },
      { prompt: 'Who is optimistic about future employment?', answer: 'Person C' },
    ],
  },
];

// ---------------- Part 4: long text comprehension (headings) ----------------
const PARAS = ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'];
function headings(
  id: string, title: string, level: 'B2' | 'C1', paragraphs: string[], answers: string[], extra: string,
): Task {
  const options = [...answers, extra].sort();
  return {
    id, skill: 'reading', kind: 'reading-headings', title, instructions: P4, level,
    topic: 'Long text: headings', options,
    texts: paragraphs.map((p, k) => ({ label: PARAS[k], text: p })),
    items: answers.map((a, k) => ({ prompt: PARAS[k], answer: a })),
    explanation: `Titular que sobra: “${extra}”.`,
  };
}

export const readingPart4: Task[] = [
  headings('r4a01', 'Sleep and memory', 'B2', [
    'For centuries, sleep was seen as a simple period of rest, a time when the brain more or less switched off. Scientists had few ways to study what happened at night. That changed in the twentieth century, when new equipment allowed researchers to record the electrical activity of the sleeping brain, and they discovered that it was surprisingly busy.',
    'We now know that sleep is not one single state. During the night we move through light sleep, deep sleep and a stage in which the eyes move rapidly behind closed eyelids, when most dreams happen. One full cycle lasts about ninety minutes, and most adults go through four or five cycles every night.',
    'Deep sleep seems especially important for learning. During this stage, the brain appears to replay experiences from the day, strengthening the connections that form memories. Information is gradually transferred from a short-term store to areas of the brain where it can be kept for much longer.',
    'In one well-known type of experiment, volunteers learn a list of words in the evening. Half of them then sleep normally, while the other half stay awake all night. When everyone is tested the next day, the group that slept usually remembers far more, even after the tired group has had time to recover.',
    'Teenagers face a particular difficulty. During adolescence, the body clock shifts, so young people naturally feel sleepy later at night and want to wake up later in the morning. Early school start times therefore leave many of them seriously short of sleep, which may affect their results at school.',
    'Modern lifestyles do not help. Phones and tablets give off light that tells the brain it is still daytime, delaying the moment we feel tired. Coffee and energy drinks taken in the afternoon can stay in the body for many hours, and late meals can also make it harder to fall asleep.',
    'Fortunately, there are easy ways to improve sleep. Going to bed and getting up at the same time every day helps the body clock stay regular. A dark, cool bedroom makes a real difference, and putting screens away an hour before bed is one of the most effective changes people can make.',
  ], [
    'An old belief proved wrong',
    'A repeating pattern through the night',
    'Storing the day’s lessons',
    'Evidence from the laboratory',
    'A problem for younger people',
    'Modern habits that get in the way',
    'Simple steps to rest better',
  ], 'The dangers of sleeping too much'),

  headings('r4a02', 'Community gardens', 'B2', [
    'In many cities, community gardens began on land that nobody wanted. When factories closed, they often left behind empty plots full of rubbish. Local residents started clearing these spaces by hand, bringing in soil and planting vegetables, and slowly the abandoned land turned green.',
    'For some neighbourhoods, these gardens are an important source of food. In areas without a large supermarket, fresh fruit and vegetables can be expensive or hard to find. A shared garden allows families to grow tomatoes, beans and salad for very little money.',
    'The gardens also create strong social ties. Retired people who have gardened all their lives work side by side with young families who have never grown anything. Neighbours who once only nodded at each other in the street now share tools, seeds and recipes.',
    'The benefits go beyond people. Plants help to cool streets during hot summers and absorb rainwater that would otherwise flood drains. Flowers attract bees and butterflies, and some gardens have become small shelters for birds in the middle of the city.',
    'However, many gardens have an uncertain future. Most are built on land that the gardeners do not own. When property prices rise, owners are often tempted to sell the land for flats or offices, and years of work can disappear in a few weeks.',
    'In response, some city councils have started to protect gardens officially. They offer long-term agreements that allow groups to use the land for ten or twenty years, and some even provide free water and compost to help new projects get started.',
    'If you would like to take part, the first step is usually to find an existing group through your local council or community centre. If there is none nearby, experienced gardeners suggest starting small, with a few raised beds, before trying anything more ambitious.',
  ], [
    'From empty land to green spaces',
    'Filling a gap in food supply',
    'Bringing people together',
    'Benefits for the local environment',
    'A threat from property owners',
    'Official support grows',
    'How to get involved',
  ], 'Why gardening is so expensive'),

  headings('r4a03', 'Electric scooters in cities', 'B2', [
    'Only a few years ago, electric scooters were rarely seen on city streets. Then, almost overnight, rental companies placed thousands of them in cities around the world. Users simply download an app, find the nearest scooter on a map and unlock it with their phone.',
    'It is easy to see why they became popular. For short journeys they are faster than walking and often quicker than waiting for a bus. There is no need to look for a parking space, and many young people enjoy the feeling of freedom they offer.',
    'Hospitals, however, soon began to report a rise in injuries. Many riders do not wear helmets, and some travel on pavements at high speed. Pedestrians, especially older people, have been hit, and in some cases the injuries have been serious.',
    'Another common complaint concerns parking. Because rental scooters can be left almost anywhere, they are often abandoned in the middle of pavements. For wheelchair users and people with pushchairs, this can make walking along a street difficult or even impossible.',
    'Scooters are often promoted as a green form of transport, but studies suggest the picture is more complicated. Rental scooters used to wear out within months, and many trips replace walking or cycling rather than car journeys, which reduces the environmental benefit.',
    'City authorities have responded in different ways. Some have introduced speed limits and special parking areas, while others require riders to be over a certain age. A few cities have decided the problems are too great and have banned rental scooters completely.',
    'The companies involved say that newer scooters are stronger and last much longer. In the future, scooters may be parked at fixed stations near metro stops, so that they become part of the public transport network instead of competing with it.',
  ], [
    'A sudden arrival',
    'Why users like them',
    'Concerns about safety',
    'Clutter on the streets',
    'Not as green as it seems',
    'Cities respond with rules',
    'What comes next',
  ], 'The inventor of the scooter'),

  headings('r4a04', 'Mountain rescue volunteers', 'C1', [
    'Every weekend, while most people are relaxing, groups of volunteers in mountain areas keep their phones close. They are teachers, electricians, nurses and farmers, and none of them is paid for this work. When a call comes in, they leave whatever they are doing and head for the hills.',
    'Joining a team is not easy. New members usually spend two or three years training before they take part in real rescues. They learn advanced first aid, how to use ropes on steep ground and how to navigate in fog or darkness without relying on a phone signal.',
    'Team leaders say that a large proportion of their calls could have been prevented. Walkers set out in trainers instead of boots, without a map or warm clothes, or start a long route in the late afternoon and are caught out when it gets dark.',
    'Technology has transformed the way searches are carried out. A lost walker can now send their exact location from a phone, and some teams use drones with heat cameras that can find a person on a hillside in minutes rather than hours.',
    'The work can be dangerous for the rescuers themselves. Conditions that cause accidents, such as ice, high winds and falling rocks, are the same conditions teams must work in. Several volunteers have been seriously injured while trying to reach people in difficulty.',
    'Most teams receive little or no money from the government. They depend on donations and fundraising events to pay for vehicles, radios and medical equipment, and members often spend their own money on clothing and training courses.',
    'Rescuers ask walkers to do a few simple things: check the weather forecast before leaving, carry the right equipment, and tell someone the route they plan to take and when they expect to return. These small steps can save a life — including a rescuer’s.',
  ], [
    'Ordinary people, extraordinary work',
    'A long preparation',
    'Many emergencies could be avoided',
    'New tools make searches faster',
    'Risking their own safety',
    'Paying for the service',
    'How walkers can help',
  ], 'A career with a good salary'),

  headings('r4a05', 'Tiny houses', 'B2', [
    'A tiny house is usually defined as a home of less than forty square metres. Many are built on wheels, so they can be moved from one place to another. Some owners design and build their homes themselves, while others buy them ready-made from specialist companies.',
    'The main reason most people give for choosing one is money. A tiny house can cost less than a tenth of the price of a normal flat, and bills for heating and electricity are very low. For young people who cannot get a mortgage, it can be the only way to own a home.',
    'Living in such a small space forces people to think about what they really need. Owners often say that getting rid of most of their possessions made them feel lighter and less stressed. They spend less time cleaning and shopping, and more time outdoors.',
    'However, the lifestyle is not for everyone. Couples can find it difficult to have so little personal space, and working from home becomes almost impossible. Families with children usually discover that a tiny house works for a holiday but not for everyday life.',
    'Finding somewhere to put the house is another challenge. In many countries, planning laws do not allow people to live permanently on land without a proper building. Some owners have been forced to move their homes several times after complaints from neighbours.',
    'A few towns have decided to welcome tiny-house communities. They provide land with water and electricity connections, and residents share facilities such as a laundry and a garden. Supporters say these villages help to fill empty land and bring young residents to areas that are losing population.',
    'Whether tiny houses become a mainstream solution to the housing crisis remains to be seen. Critics argue that they do not use land efficiently compared with blocks of flats. For now, they remain an attractive option for a small number of people who value freedom over space.',
  ], [
    'What counts as a tiny house',
    'A cheaper way to own a home',
    'Owning less, living better',
    'Drawbacks for some households',
    'Problems with the law',
    'Communities that say yes',
    'An uncertain future',
  ], 'Building your own house in a weekend'),

  headings('r4a06', 'How habits work', 'B2', [
    'Psychologists estimate that a large part of what we do each day is not the result of conscious decisions but of habits. We brush our teeth, check our phones and take the same route to work without really thinking about it. This saves mental energy for more important choices.',
    'Researchers describe a habit as a loop with three parts. First there is a trigger, such as a time of day or a feeling. Then comes the routine itself, and finally a reward that makes the brain want to repeat the behaviour next time.',
    'Understanding this loop explains why bad habits are so hard to break. If you eat biscuits every afternoon because you feel tired, simply deciding to stop rarely works. The trigger and the need for a reward are still there, so the old routine soon returns.',
    'A more effective strategy is to keep the trigger and the reward but change the routine. When the afternoon tiredness arrives, a short walk or a cup of tea may provide a similar feeling of relief. Over time, the new routine can replace the old one.',
    'A popular belief says that it takes twenty-one days to form a new habit. Studies suggest the reality is less precise. In one experiment, the time needed varied from a few weeks to almost a year, depending on the person and on how difficult the behaviour was.',
    'Our surroundings also play a powerful role. People who keep fruit on the kitchen table eat more of it, and those who leave their running shoes by the door are more likely to exercise. Making a good habit easy to start is often more useful than relying on willpower.',
    'Finally, experts recommend starting small. Someone who wants to read more might begin with just two pages a night. The goal at first is not the result but the repetition, because once a behaviour becomes automatic, it is much easier to increase it.',
  ], [
    'Acting without thinking',
    'The three stages of a habit',
    'Why stopping is difficult',
    'Replacing rather than removing',
    'A popular myth examined',
    'The influence of the environment',
    'Begin with tiny steps',
  ], 'Habits that animals share with us'),

  headings('r4a07', 'Turning seawater into drinking water', 'C1', [
    'As droughts become longer and more frequent, many coastal regions are turning to the sea for their water supply. Desalination plants remove the salt from seawater to produce water that is safe to drink. Today, they supply millions of people in the Middle East, Australia and southern Europe.',
    'Most modern plants use a process called reverse osmosis. Seawater is pushed at very high pressure through membranes with tiny holes. Water molecules pass through, while salt and other impurities are left behind. The technique has largely replaced older methods that boiled the water.',
    'The biggest disadvantage is energy. Producing the high pressure required uses large amounts of electricity, which makes desalinated water considerably more expensive than water from rivers or underground sources. If that electricity comes from fossil fuels, the plants also add to carbon emissions.',
    'Engineers have made significant progress in reducing these costs. New membranes allow water through more easily, and devices that recover energy from the high-pressure waste stream can cut electricity use by more than half. Some plants are now powered directly by solar or wind farms.',
    'Another concern is what happens to the salt that is removed. Plants return a concentrated salty liquid, known as brine, to the sea. If it is not spread properly, it can sink to the seabed and harm marine plants and animals that cannot survive in such salty conditions.',
    'Because of these issues, many experts argue that desalination should be a last resort. Repairing leaking pipes, reusing treated waste water for agriculture and encouraging households to save water are usually cheaper and less damaging ways of increasing supply.',
    'Nevertheless, for some regions there is little alternative. As populations grow and rainfall becomes less reliable, desalination is likely to play an increasingly important role, especially if it can be combined with clean energy and careful management of its waste.',
  ], [
    'A growing source of supply',
    'How the technology works',
    'An expensive process',
    'Making it more efficient',
    'A risk to marine life',
    'Cheaper options come first',
    'A necessary part of the future',
  ], 'Why the sea is salty'),

  headings('r4a08', 'Digital nomads', 'B2', [
    'Digital nomads are people who work online while travelling from place to place. With a laptop and an internet connection, they can do their jobs from a beach in Thailand one month and a café in Lisbon the next. Their numbers grew rapidly after many companies accepted remote working.',
    'For many, the attraction is freedom. Nomads can choose where to live according to the weather, the cost of living or simply curiosity. Some say that experiencing different cultures has made them more creative and more open-minded than they were in an office.',
    'The reality, however, can be less glamorous. Time differences mean that meetings may take place in the middle of the night. Unreliable internet connections cause stress, and constantly organising accommodation and transport takes a surprising amount of time.',
    'Loneliness is one of the most common complaints. Moving every few weeks makes it hard to build deep friendships, and family and old friends are far away. To solve this, many nomads use shared workspaces where they can meet people in a similar situation.',
    'Several countries have created special visas to attract these workers. The visas allow them to stay for a year or more as long as they earn a minimum income from abroad. Governments hope the visitors will spend money in local shops and restaurants.',
    'Not everyone welcomes them. In some popular cities, residents complain that nomads, who earn foreign salaries, have pushed up rents in central neighbourhoods. Local people on local wages can no longer afford to live in the areas where they grew up.',
    'Many nomads eventually choose to settle down. Some find a city they love and stay; others return home with new skills and contacts. For most, it seems, the nomadic life is a stage rather than a permanent way of living.',
  ], [
    'Working from anywhere',
    'The appeal of a mobile life',
    'Practical difficulties',
    'Feeling isolated',
    'Countries compete for remote workers',
    'Tension with residents',
    'A temporary phase for most',
  ], 'How to become a successful travel blogger'),

  headings('r4a09', 'Bringing rivers back to life', 'C1', [
    'During the last century, thousands of rivers across Europe were straightened, narrowed and enclosed between concrete walls. The aim was to drain farmland, protect towns from floods and make room for roads and buildings. At the time, this was seen as a symbol of progress.',
    'Over the decades, the consequences became clear. Fish and birds lost the habitats they depended on, and straight channels made water flow faster, which often increased flooding further downstream. In cities, many rivers were hidden underground and almost forgotten.',
    'Today a growing number of projects are attempting to reverse this damage. Engineers remove concrete banks, recreate natural curves and reconnect rivers with the land around them. The approach is known as river restoration, and it is now included in European environmental policy.',
    'One of the main benefits is better flood protection. When a river is allowed to spread onto meadows and wetlands during heavy rain, the water slows down and is stored temporarily. This reduces the peak of the flood that reaches towns and cities.',
    'Nature responds remarkably quickly. Within a few years of restoration, scientists often record the return of fish species, insects and water birds that had disappeared. Plants along the banks also help to clean the water by filtering out pollution from farmland.',
    'Projects are not always popular at first. Farmers may lose land that floods more often, and residents can worry about mosquitoes or about losing parking spaces in urban areas. Successful schemes usually involve local communities from the planning stage and offer compensation where necessary.',
    'In cities, uncovering hidden rivers has transformed neighbourhoods. Former roads have become green corridors with paths for walking and cycling, and summer temperatures along the water can be several degrees lower than in nearby streets.',
  ], [
    'Taming rivers in the past century',
    'Unexpected consequences',
    'Undoing the damage',
    'Giving floods room to spread',
    'Wildlife comes back',
    'Winning local support',
    'New life in urban areas',
  ], 'The cost of building new dams'),

];
