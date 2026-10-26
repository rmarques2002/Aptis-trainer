import type { WritingSet } from '../types';

// Full Aptis-style Writing tests (original content). All four parts share one
// context, as in the real exam. Official timing: P1 3 min, P2 7, P3 10, P4 30.

export const writingSets: WritingSet[] = [
  {
    id: 'ws01',
    context: 'You are a new member of a photography club.',
    level: 'B2',
    part1: [
      'Where do you live?',
      'What do you like taking photos of?',
      'What camera do you use?',
      'When do you usually take photos?',
      'Who taught you photography?',
    ],
    part2: 'Please tell us why you want to join the club and what you would like to learn. (20-30 words)',
    part3: [
      { name: 'Laura', message: 'Welcome! What is the best photo you have ever taken? Why do you like it?' },
      { name: 'Ahmed', message: 'Do you prefer taking photos of people or landscapes? Why?' },
      { name: 'Chris', message: 'Some people say phones have made cameras unnecessary. What do you think?' },
    ],
    part4Info:
      'Dear Member,\nWe regret to inform you that the weekend photography trip to the national park has been cancelled because the coach company has closed. We are looking for another company, which may increase the price of the trip by 30 euros. Please tell us whether you would still like to take part.\nThe Club Committee',
    part4Informal: 'Write an email to a friend who is also in the club. Tell them how you feel about this and what you plan to do. (40-50 words)',
    part4Formal: 'Write an email to the club committee. Explain how you feel about the news and what you would like them to do. (120-150 words)',
    samples: {
      part1: ['In Barcelona.', 'Old buildings and streets.', 'A second-hand Canon.', 'At weekends, usually early.', 'My aunt did.'],
      part2:
        'I want to join because I love street photography but I have never had any lessons. I would like to learn how to use light better and edit my photos.',
      part3: [
        'My favourite photo is one of my grandfather laughing at a family lunch. It is not technically perfect, but it captures his personality, and it reminds me of summers at his house.',
        'I definitely prefer landscapes. People often feel uncomfortable in front of a camera, so their expressions look forced. Mountains and cities never complain, and I can take my time to get the light right.',
        'I partly agree. Phones are great for everyday pictures, and they are always in your pocket. However, a real camera gives you much more control over focus and exposure, so serious photographers still need one.',
      ],
      informal:
        'Hi Marc, did you see the email about the trip? I’m really disappointed, I’d been looking forward to it for weeks! Paying 30 euros more is a bit much for me, but I’ll probably still go. What about you? Shall we share a room?',
      formal:
        'Dear Committee,\n\nThank you for informing members about the cancellation of the photography trip. I was very sorry to hear the news, as the trip was one of the main reasons I joined the club.\n\nI understand that the situation was not your fault. However, I am concerned about the possible increase of 30 euros, which would make the trip difficult to afford for some members, especially students like me. Would it be possible for the club to cover part of the extra cost, or to offer a discount to members who had already paid?\n\nAlternatively, I would suggest organising car-sharing among members, which would be cheaper and more flexible than hiring a coach.\n\nI would still like to take part, and I would be happy to help organise the new arrangements if necessary.\n\nI look forward to hearing from you.\n\nYours faithfully,\nAlex García',
    },
  },
  {
    id: 'ws02',
    context: 'You have joined an evening cooking course.',
    level: 'B2',
    part1: [
      'What is your favourite food?',
      'How often do you cook?',
      'Who do you usually eat with?',
      'What did you have for breakfast today?',
      'Where do you buy your food?',
    ],
    part2: 'Tell us about your cooking experience and which dishes you would like to learn to make. (20-30 words)',
    part3: [
      { name: 'Sofia', message: 'Hi! What is a typical dish from your region? How is it made?' },
      { name: 'Tom', message: 'Do you think children should learn to cook at school? Why or why not?' },
      { name: 'Grace', message: 'Do you prefer eating at restaurants or at home? Why?' },
    ],
    part4Info:
      'Dear Student,\nDue to building work, from next month the course will move from the city centre to our new kitchen on the edge of town. Classes will also start one hour later, at 8 pm. We apologise for any inconvenience.\nCourse Administration',
    part4Informal: 'Write an email to a friend on the course. Tell them how you feel about the changes and what you are going to do. (40-50 words)',
    part4Formal: 'Write an email to the course administration. Tell them how the changes affect you and what you would like them to do. (120-150 words)',
    samples: {
      part1: ['Paella, definitely.', 'Three or four times a week.', 'My flatmates.', 'Toast and coffee.', 'At the local market.'],
      part2:
        'I can cook simple things like pasta and omelettes, but nothing impressive. I would really like to learn how to make fresh bread and some Asian dishes.',
      part3: [
        'In Catalonia we eat “pa amb tomàquet”. You toast slices of bread, rub them with ripe tomato and garlic, then add olive oil and salt. It sounds simple, but with good ingredients it is delicious.',
        'Yes, I think they should. Many young people leave home without knowing how to prepare a basic meal, so they rely on fast food. Cooking lessons would teach them to eat healthily and save money.',
        'I prefer eating at home most of the time. It is cheaper and I know exactly what I am eating. However, I enjoy going to restaurants on special occasions to try food I cannot make myself.',
      ],
      informal:
        'Hi Ana! Have you seen the news about the course? I’m not happy at all. The new kitchen is so far from my flat, and finishing at ten is really late for me. I might ask if I can join the Saturday group instead. What will you do?',
      formal:
        'Dear Sir or Madam,\n\nI am writing regarding the changes to the evening cooking course that were announced last week.\n\nAlthough I understand that the building work is necessary, the new arrangements cause me serious difficulties. I do not have a car, and the new kitchen is poorly connected by public transport, particularly late in the evening. Moreover, as classes will now finish at 10 pm, I would not be able to get home safely by bus.\n\nI would therefore be grateful if you could consider some alternatives. For example, would it be possible to keep the original start time, or to offer the same course on Saturday mornings? If neither option is possible, I would like to request a refund for the remaining classes.\n\nI have really enjoyed the course so far and would prefer to continue. I look forward to your reply.\n\nYours faithfully,\nAlex García',
    },
  },
  {
    id: 'ws03',
    context: 'You are a member of a hiking group.',
    level: 'B2',
    part1: [
      'Where is your favourite place to walk?',
      'How far can you walk in a day?',
      'What do you take on a walk?',
      'Who do you usually go walking with?',
      'What is the weather like today?',
    ],
    part2: 'Tell us why you joined the hiking group and what kind of walks you enjoy. (20-30 words)',
    part3: [
      { name: 'Pablo', message: 'Welcome! Can you describe the most beautiful walk you have done?' },
      { name: 'Emma', message: 'Is it better to walk alone or in a group? Why?' },
      { name: 'Jake', message: 'How can we make mountain areas less crowded at weekends?' },
    ],
    part4Info:
      'Dear Member,\nFrom next season, all members will need to pay an annual fee of 40 euros. The money will be used to buy first-aid equipment and to train guides. Members who do not pay will not be able to join organised walks.\nHiking Group Committee',
    part4Informal: 'Write an email to a friend in the group. Tell them what you think about the new fee and what you will do. (40-50 words)',
    part4Formal: 'Write an email to the committee. Give your opinion about the fee and make suggestions. (120-150 words)',
    samples: {
      part1: ['The Pyrenees.', 'About twenty kilometres.', 'Water, food and a map.', 'Some friends from university.', 'Sunny but windy.'],
      part2:
        'I joined because I wanted to discover new routes and meet people who enjoy nature. I love long mountain walks, especially ones with lakes or good views.',
      part3: [
        'Last summer I walked to a lake in the Pyrenees at sunrise. The water was completely still and reflected the mountains perfectly. We were the only people there, and it was absolutely silent.',
        'I think a group is better, especially in the mountains. It is safer if someone gets injured, and more experienced members can share their knowledge. Walking alone is relaxing, but I would only do it on easy paths.',
        'I think public transport to the most popular areas should be improved, so fewer people drive there. Also, guides could promote lesser-known routes, which are often just as beautiful but much quieter.',
      ],
      informal:
        'Hey Laia, did you read about the new fee? Forty euros seems quite a lot, but if it pays for first aid and trained guides, I think it’s worth it. I’m going to pay. Are you still coming on the walk next Sunday?',
      formal:
        'Dear Committee,\n\nI am writing in response to your message about the new annual fee.\n\nIn general, I support the idea. Safety should be a priority for the group, and I believe that trained guides and proper first-aid equipment will benefit all members. I am therefore happy to pay the fee.\n\nHowever, I am worried that 40 euros may prevent some people, such as students or unemployed members, from continuing to take part. I would like to suggest a reduced fee for these members, or the option of paying in two instalments.\n\nIn addition, it would be helpful if the committee published a short report at the end of the year explaining how the money has been spent. This would help members trust the new system.\n\nThank you for your hard work organising the walks.\n\nYours faithfully,\nAlex García',
    },
  },
  {
    id: 'ws04',
    context: 'You have joined a film club at your local cultural centre.',
    level: 'B2',
    part1: [
      'What kind of films do you like?',
      'Who is your favourite actor?',
      'How often do you go to the cinema?',
      'What was the last film you saw?',
      'What do you like eating when you watch films?',
    ],
    part2: 'Tell us why you joined the film club and what type of films you would like to watch. (20-30 words)',
    part3: [
      { name: 'Irene', message: 'Welcome! What film would you recommend to the club, and why?' },
      { name: 'Daniel', message: 'Do you prefer watching films in their original language or dubbed? Why?' },
      { name: 'Kate', message: 'Will people still go to the cinema in twenty years? What do you think?' },
    ],
    part4Info:
      'Dear Member,\nBecause of low attendance, we plan to reduce the number of screenings from two per week to one per month. We will also stop showing films in their original language, as some members find subtitles difficult.\nFilm Club Committee',
    part4Informal: 'Write an email to a friend in the club. Tell them how you feel about the changes. (40-50 words)',
    part4Formal: 'Write an email to the committee. Explain your opinion of the changes and suggest how to increase attendance. (120-150 words)',
    samples: {
      part1: ['Thrillers and documentaries.', 'Penélope Cruz.', 'Once a month.', 'A Korean thriller.', 'Popcorn, of course.'],
      part2:
        'I joined because I want to watch films I would never choose myself and discuss them with other people. I especially enjoy European and Asian cinema.',
      part3: [
        'I would recommend “Amélie”. It is a funny and imaginative French film about a young woman who secretly helps the people around her. The music and colours are beautiful, and it always puts me in a good mood.',
        'I prefer the original language with subtitles. Actors’ voices are an important part of their performance, and dubbing often changes the tone of a film. It is also a great way to improve my English.',
        'I think so, although probably fewer people will go. Streaming is convenient, but watching a film on a huge screen with an audience is a special experience that a sofa cannot replace.',
      ],
      informal:
        'Hi Joan! Have you seen what the committee wants to do? One film a month is nothing, and no more original versions — that was my favourite thing about the club! I’m going to write to them. Want to sign the email with me?',
      formal:
        'Dear Committee,\n\nI am writing to express my concern about the proposed changes to the film club.\n\nI understand that attendance has fallen, but I believe reducing screenings to one per month will make the problem worse, as members will lose the habit of coming. Furthermore, original-language screenings are one of the main reasons I joined, and I know several other members feel the same.\n\nInstead, I would like to suggest some ways to attract more people. Firstly, the club could advertise screenings on social media and at local schools. Secondly, it could offer both versions of popular films on different days, so everyone can choose. Finally, a short discussion after each film might make the evenings more sociable.\n\nI would be happy to help put any of these ideas into practice.\n\nYours faithfully,\nAlex García',
    },
  },
  {
    id: 'ws05',
    context: 'You are a volunteer with an environmental association.',
    level: 'B2',
    part1: [
      'Where are you from?',
      'What do you do in your free time?',
      'How do you travel to work or university?',
      'What do you recycle at home?',
      'Which season do you like best?',
    ],
    part2: 'Tell us why you want to volunteer with us and what skills you can offer. (20-30 words)',
    part3: [
      { name: 'Nadia', message: 'Hi! What is the biggest environmental problem in your area?' },
      { name: 'Oliver', message: 'Can individuals really make a difference, or is it up to governments?' },
      { name: 'Paula', message: 'What activity should our association organise next?' },
    ],
    part4Info:
      'Dear Volunteer,\nThe beach clean-up planned for next Saturday has been moved to Sunday at 7 am because of a sailing competition. Volunteers must bring their own gloves and bags, as our supplies have run out.\nThe Coordinators',
    part4Informal: 'Write an email to a friend who is also volunteering. Tell them about the changes and what you plan to do. (40-50 words)',
    part4Formal: 'Write an email to the coordinators. Explain how the changes affect you and make suggestions. (120-150 words)',
    samples: {
      part1: ['From Tarragona.', 'Swimming and reading.', 'By train.', 'Plastic, paper and glass.', 'Autumn.'],
      part2:
        'I want to volunteer because I care about protecting the coast where I grew up. I study engineering, so I could help with data collection and planning.',
      part3: [
        'In my area, the biggest problem is plastic on the beaches, especially after storms. It harms birds and fish, and it also damages tourism, which many local people depend on for their jobs.',
        'I think both are needed. Governments must make the big changes, such as laws on pollution, but individual actions add up. If millions of people use less plastic, companies are forced to change as well.',
        'I think we should organise workshops in schools. If children understand why the environment matters, they will change their habits and also influence their parents. It would be cheap and easy to organise.',
      ],
      informal:
        'Hi Pau! The beach clean-up is now on Sunday at 7 am, not Saturday. So early! Also, we need to bring our own gloves and bags. I’ll buy some for both of us. Can you pick me up on the way?',
      formal:
        'Dear Coordinators,\n\nThank you for letting us know about the changes to the beach clean-up.\n\nUnfortunately, the new time is difficult for me. The first train from my town arrives at 7.15, so I would miss the beginning of the activity. I imagine other volunteers who rely on public transport may have the same problem. Would it be possible to start at 8 am instead?\n\nI am also slightly concerned about volunteers bringing their own equipment, as some people may not have suitable gloves. Perhaps the association could ask a local supermarket or the town council to donate gloves and bags. I would be happy to contact them on your behalf.\n\nDespite these difficulties, I am still very keen to take part, and I will try to bring a few friends along.\n\nYours faithfully,\nAlex García',
    },
  },
];
