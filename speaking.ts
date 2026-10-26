import type { SpeakingPrompt } from '../types';

export const speakingPrompts: SpeakingPrompt[] = [
  {
    "id": "sp001",
    "part": 1,
    "prompt": "Tell me about the town or city where you live.",
    "seconds": 30,
    "level": "B1",
    "topic": "Hometown",
    "sampleAnswer": "I live in a medium-sized coastal city. It's lively but not too crowded, and I especially like the old town, where there are lots of small cafés. The weather is mild most of the year, which makes it easy to spend time outdoors."
  },
  {
    "id": "sp002",
    "part": 1,
    "prompt": "What do you usually do at the weekend?",
    "seconds": 30,
    "level": "B1",
    "topic": "Free time",
    "sampleAnswer": "At weekends I like to relax and catch up with friends. On Saturdays I often go for a long walk or meet people for coffee, and on Sundays I usually cook something at home and read. I try to stay off my phone a bit more than during the week."
  },
  {
    "id": "sp003",
    "part": 1,
    "prompt": "Tell me about a subject you enjoyed studying.",
    "seconds": 30,
    "level": "B1",
    "topic": "Studies",
    "sampleAnswer": "I really enjoyed studying geography at school. I liked learning how cities grow and why people move from one place to another. The teacher used lots of maps and real examples, which made it feel relevant rather than just facts to memorise."
  },
  {
    "id": "sp004",
    "part": 1,
    "prompt": "What kind of music do you like?",
    "seconds": 30,
    "level": "B1",
    "topic": "Preferences",
    "sampleAnswer": "I listen to quite a wide range, but I mostly enjoy relaxed music with acoustic guitar. I put it on while I'm working or cooking. I'm not very keen on very loud electronic music, although I don't mind it at a party."
  },
  {
    "id": "sp005",
    "part": 1,
    "prompt": "Describe a typical meal in your country.",
    "seconds": 30,
    "level": "B1",
    "topic": "Food",
    "sampleAnswer": "A typical meal where I'm from usually starts with a small salad or soup, followed by a main dish with meat or fish and vegetables. We often eat together as a family and take our time, so lunch can last quite a while at weekends."
  },
  {
    "id": "sp006",
    "part": 1,
    "prompt": "What did you do on your last holiday?",
    "seconds": 30,
    "level": "B1",
    "topic": "Travel",
    "sampleAnswer": "On my last holiday I visited the mountains for a few days. I went hiking every morning and relaxed in the afternoons. The air was fresh and it was a real change from the city. I came back feeling much more rested."
  },
  {
    "id": "sp007",
    "part": 1,
    "prompt": "Tell me about your best friend.",
    "seconds": 30,
    "level": "B1",
    "topic": "People",
    "sampleAnswer": "My best friend and I have known each other since school. She's very calm and always gives sensible advice, which balances me out because I can be impatient. We don't see each other every week, but when we do, it feels like no time has passed."
  },
  {
    "id": "sp008",
    "part": 1,
    "prompt": "How do you usually travel around your city?",
    "seconds": 30,
    "level": "B1",
    "topic": "Transport",
    "sampleAnswer": "I mostly get around by public transport and on foot. The bus network is quite good, so I rarely need a car in the centre. For longer trips I use the train, which is usually faster than driving because of the traffic."
  },
  {
    "id": "sp009",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Do you prefer working alone or in a team? Why?", "How has technology changed the way people work together?"],
    "scenes": ["office"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "In the picture I can see a small group of colleagues gathered around a table, looking at a laptop. They seem to be discussing a project, because one person is pointing at the screen while the others listen. The atmosphere looks relaxed but focused, and there are notebooks and coffee cups on the table, which suggests they've been there for a while."
  },
  {
    "id": "sp010",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Tell me about a market or shop you like to visit.", "Why do some people prefer markets to supermarkets?"],
    "scenes": ["market"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "This photo shows a lively outdoor market on what looks like a sunny morning. There are several stalls selling fruit and vegetables, and quite a few shoppers walking between them with bags. In the foreground a vendor is weighing something for a customer. The whole scene feels cheerful and full of energy."
  },
  {
    "id": "sp011",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "How often do you eat with your family?", "Why is it important for families to eat together?"],
    "scenes": ["dinner"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "In this image a family of four is sitting around a dining table, sharing a meal. They all look happy and relaxed, and one of the children is laughing at something. There are dishes of food in the middle of the table, so it seems like an informal, home-cooked dinner rather than a special occasion."
  },
  {
    "id": "sp012",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "What do you do to stay healthy?", "Why don’t some people do enough exercise?"],
    "scenes": ["park"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "The picture shows a person jogging along a path in a park early in the morning. She's wearing sports clothes and headphones, and there are trees on both sides. The light is soft, so I'd guess it's just after sunrise. She looks determined and seems to be enjoying the quiet."
  },
  {
    "id": "sp013",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Tell me about a teacher you remember.", "How do you think classrooms will change in the future?"],
    "scenes": ["classroom"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "In the photo there's a bright classroom with rows of desks and a teacher standing at the front near a whiteboard. Several students have their hands raised, which suggests the teacher has just asked a question. The room is decorated with posters, so it looks like a welcoming place to learn."
  },
  {
    "id": "sp014",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Tell me about your last summer holiday.", "What are the advantages and disadvantages of beach tourism?"],
    "scenes": ["beach"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "This photo captures a wide, sandy beach on a hot summer afternoon. There are families under colourful umbrellas and a few people swimming in the sea. In the distance I can see some boats on the horizon. The sky is completely clear, and the whole scene looks very relaxing."
  },
  {
    "id": "sp015",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Tell me about a long journey you have made.", "Why do some people prefer trains to cars?"],
    "scenes": ["station"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "The image shows the inside of a busy train station. People are hurrying across the concourse with suitcases, and there's a large departure board on the wall. A train is waiting at one of the platforms. Everyone seems to be in a rush, which is typical of a station at a busy time of day."
  },
  {
    "id": "sp016",
    "part": 2,
    "prompt": "Describe the picture and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Describe this picture.", "Do you enjoy spending time in nature? Why?", "Why are green spaces important in cities?"],
    "scenes": ["garden"],
    "seconds": 45,
    "level": "B2",
    "topic": "Describing images",
    "sampleAnswer": "In this picture there's a colourful garden full of flowers in bloom. There are neat flower beds and a small wooden bench under a tree. The colours are very bright, mostly reds and yellows, which tells me it's probably spring. It looks like a peaceful place to sit and relax."
  },
  {
    "id": "sp017",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which way of studying do you think is more effective? Why?", "How might students study in the future?"],
    "scenes": ["studyAlone", "studyGroup"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "Both approaches have clear advantages. Studying alone lets you work at your own pace and concentrate deeply, which suits complex topics. Studying in a group, on the other hand, means you can share ideas and stay motivated. Personally, I prefer a mix: I study new material alone first, then meet others to test my understanding."
  },
  {
    "id": "sp018",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which way of travelling would you prefer for a long trip, and why?", "Should governments make train travel cheaper than flying? Why?"],
    "scenes": ["plane", "train"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "Planes are usually much faster for long distances, which is their main advantage. However, trains take you straight into the city centre and let you see the landscape, and I find them more comfortable and less stressful. For a shorter journey I'd almost always choose the train, even if it takes a bit longer."
  },
  {
    "id": "sp019",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which place would be better for bringing up children? Why?", "Why do you think many young people leave rural areas?"],
    "scenes": ["city", "countryside"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "City life offers convenience, jobs and things to do, but it can be noisy and expensive. The countryside is quieter and closer to nature, though it may feel isolated and offer fewer opportunities. It really depends on your stage of life; I'd choose the city now but might prefer the countryside later."
  },
  {
    "id": "sp020",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which way of shopping do you prefer, and why?", "What will happen to high-street shops in the next twenty years?"],
    "scenes": ["onlineShop", "shop"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "Online shopping is convenient and often cheaper, and you can compare prices easily. In a physical shop, though, you can see and try things before buying, and you get them immediately. I tend to buy everyday items online but still prefer going to a shop for clothes or anything I need to try on."
  },
  {
    "id": "sp021",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which is more enjoyable: reading a story or watching it? Why?", "Why do you think so many films are based on books?"],
    "scenes": ["reading", "cinema"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "A book usually gives you more detail and lets you imagine the characters yourself, which I find rewarding. A film is quicker and brings the story to life visually, but it has to leave things out. Ideally I read the book first and then watch the film to see how the director interpreted it."
  },
  {
    "id": "sp022",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which situation do you think is better for workers? Why?", "How might offices change in the future?"],
    "scenes": ["homeOffice", "office"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "Working from home saves commuting time and gives you flexibility, but it can feel isolating and the line between work and rest gets blurred. The office makes it easier to collaborate and switch off at the end of the day. A hybrid arrangement seems to combine the best of both."
  },
  {
    "id": "sp023",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which is a more effective way to learn a language? Why?", "Why do some people find it hard to speak a foreign language?"],
    "scenes": ["classroom", "cafeAbroad"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "A classroom gives you structure, clear explanations and correction, which is great for building foundations. Living abroad forces you to use the language constantly, so you improve your fluency and confidence fast. The ideal is to build the basics in class and then spend time abroad to bring it to life."
  },
  {
    "id": "sp024",
    "part": 3,
    "prompt": "Look at the two pictures and answer the questions. Speak for 45 seconds for each answer.",
    "questions": ["Tell me what you can see in the two pictures.", "Which makes people happier: experiences or possessions? Why?", "Why do you think people buy things they don’t need?"],
    "scenes": ["hiking", "shopping"],
    "seconds": 45,
    "level": "B2",
    "topic": "Compare & contrast",
    "sampleAnswer": "Buying possessions gives you something lasting that you can use every day. Experiences, though, tend to create stronger memories and often mean more over time. I lean towards experiences, like travel or concerts, because the objects I've bought rarely stay exciting for long."
  },
  {
    "id": "sp025",
    "part": 4,
    "prompt": "Tell me about a time you had to solve a difficult problem.\n• How did you feel at the time?\n• What have you learned about solving problems in general?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "Once, our team's project was almost derailed when a key member left suddenly. I had to reorganise the tasks and learn part of their work quickly. It was stressful, but breaking the problem into small steps helped a lot. More generally, I've learned that staying calm and asking for help early usually matters more than trying to solve everything alone. Problems feel smaller once you start acting on them."
  },
  {
    "id": "sp026",
    "part": 4,
    "prompt": "Tell me about a place that is special to you.\n• How often do you go there, and why?\n• Why do places become important in people's lives?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "A small library near my old home is special to me because I spent countless afternoons there as a teenager. It's where I first fell in love with reading. I think places become important because of the memories and emotions we attach to them, not the buildings themselves. A very ordinary spot can matter enormously simply because of what happened to us there."
  },
  {
    "id": "sp027",
    "part": 4,
    "prompt": "Tell me about a skill you would like to learn.\n• What has stopped you from learning it so far?\n• Why do people keep learning new things throughout their lives?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "I'd love to learn to play the piano, mainly because music relaxes me and I admire people who can play. I think people keep learning throughout life for several reasons: curiosity, the satisfaction of getting better at something, and simply to keep the mind active. Learning also gives us a sense of progress, which is important at any age."
  },
  {
    "id": "sp028",
    "part": 4,
    "prompt": "Tell me about a decision you found difficult.\n• Who, if anyone, helped you decide?\n• How can people make better decisions?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "Choosing which course to study was hard, because I was pulled between what interested me and what seemed practical. I eventually followed my interest and haven't regretted it. To make better decisions, I think it helps to gather information, imagine living with each option, and talk to people you trust, while accepting that no choice is ever perfect."
  },
  {
    "id": "sp029",
    "part": 4,
    "prompt": "Tell me about a change you have made in your daily routine.\n• Was it easy to keep it up?\n• Why is it hard for people to change their habits?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "Recently I started going to bed earlier, which has made a real difference to my energy. It was surprisingly hard at first. I think changing habits is difficult because our routines feel automatic and comfortable, and change requires constant effort until the new behaviour becomes natural. Starting small and being patient with yourself makes it far more likely to stick."
  },
  {
    "id": "sp030",
    "part": 4,
    "prompt": "Tell me about something you own that is important to you.\n• How did you get it?\n• Do you think people rely too much on possessions?",
    "seconds": 120,
    "prepSeconds": 60,
    "level": "B2",
    "topic": "Abstract discussion",
    "sampleAnswer": "An old watch my grandfather gave me is important to me, not for its value but for what it represents. I do think some people rely too much on possessions, expecting objects to make them happy in a lasting way. In my experience, relationships and experiences bring far deeper satisfaction, though a few meaningful objects can carry real emotional weight."
  }
];
