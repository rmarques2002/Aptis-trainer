import type { Passage, Level } from '../types';

// Aptis-style Listening Part 1 (information recognition): short messages or
// dialogues, one question, three options. Original scripts, spoken via TTS.

function p1(
  n: number, title: string, body: string, prompt: string,
  options: [string, string, string], answer: 0 | 1 | 2, explanation: string, level: Level = 'B1',
): Passage {
  const id = `ls${100 + n}`;
  return {
    id, skill: 'listening', type: 'specific-information', title, body, level,
    questions: [{
      id: `${id}q1`, skill: 'listening', type: 'specific-information',
      prompt, options, answer, explanation, level, topic: 'Information recognition',
    }],
  };
}

export const listeningPart1Passages: Passage[] = [
  p1(1, 'Dinner plans', 'Woman: What shall we have for dinner tonight? I could make pasta. Boy: We had pasta yesterday, Mum. Can we have fish? Woman: Fish? Really? I thought you hated it. Boy: Not the way Grandma makes it, with lemon. Woman: All right, fish it is.',
    'What will they have for dinner?', ['Pasta', 'Fish', 'Chicken'], 1, 'They agree on fish (“fish it is”). Pasta was yesterday; chicken is not mentioned.', 'B1'),
  p1(2, 'Train platform', 'Attention please. The 10.45 train to Manchester will now leave from platform six, not platform four as shown on the screens. Platform six, for the 10.45 to Manchester.',
    'Which platform does the train leave from?', ['Platform 4', 'Platform 6', 'Platform 10'], 1, 'The platform has changed from four to six.', 'B1'),
  p1(3, 'Birthday present', 'Man: Have you bought anything for Julia’s birthday yet? Woman: I was going to get her a book, but she reads everything on her tablet now. Man: What about a scarf? Woman: She has so many. I think I’ll get her some concert tickets. She loves live music.',
    'What will the woman buy?', ['A book', 'A scarf', 'Concert tickets'], 2, 'She rejects the book and the scarf and decides on concert tickets.'),
  p1(4, 'Doctor’s phone number', 'Hi, it’s Paula. You asked for the number of my dentist. It’s 0-1-6-3, double 4, 7, 2, 9. They’re open until seven, so you can call after work.',
    'What is the phone number?', ['0163 447 29', '0163 474 29', '0136 447 29'], 0, '“double 4” = 44 → 0163 447 29.'),
  p1(5, 'Meeting time', 'Man: Is the meeting still at three? Woman: No, the director can’t make it until four, so we’ve moved it to half past four to give everyone time to get back from lunch… sorry, from the site visit.',
    'What time is the meeting now?', ['3:00', '4:00', '4:30'], 2, 'It has been moved to “half past four”.', 'B2'),
  p1(6, 'Where to meet', 'Hi Leo, it’s me. The café by the museum is closed today, so let’s meet in front of the cinema instead. It’s just across the square. See you at eleven.',
    'Where will they meet?', ['At the café', 'Outside the cinema', 'Inside the museum'], 1, 'The café is closed, so they’ll meet in front of the cinema.'),
  p1(7, 'Weather forecast', 'And now the weather. After a sunny morning, clouds will come in from the west, and by the evening we expect heavy rain in most areas. Temperatures will stay around eighteen degrees.',
    'What will the weather be like in the evening?', ['Sunny', 'Cloudy but dry', 'Rainy'], 2, 'Heavy rain is expected by the evening.'),
  p1(8, 'Price of tickets', 'Woman: How much are the tickets? Man: Adults are twelve pounds, and children under twelve are half price. Woman: So for me and my son, who’s eight? Man: That’s eighteen pounds altogether.',
    'How much does the woman pay in total?', ['£12', '£18', '£24'], 1, 'Adult £12 + child half price £6 = £18.', 'B2'),
  p1(9, 'Lost item', 'Man: I think I left something on the bus this morning. Woman: What was it? Man: A black umbrella. Oh, and my gloves were in the same bag. Woman: A bag, then? Man: No, sorry — the gloves are at home. Just the umbrella.',
    'What did the man lose?', ['An umbrella', 'A pair of gloves', 'A bag'], 0, 'He corrects himself: only the umbrella was lost.', 'B2'),
  p1(10, 'Gym opening hours', 'Thank you for calling City Gym. From Monday to Friday we are open from six in the morning until ten at night. At weekends we open at eight and close at eight.',
    'What time does the gym close on Saturday?', ['6 pm', '8 pm', '10 pm'], 1, 'At weekends it opens at eight and closes at eight (8 pm).'),
  p1(11, 'Choosing transport', 'Woman: Shall we take a taxi to the airport? Man: It’s so expensive. The bus is cheap but it takes over an hour. Woman: What about the train? Man: Good idea — it’s only twenty minutes and not much more than the bus.',
    'How will they go to the airport?', ['By taxi', 'By bus', 'By train'], 2, 'They choose the train: fast and cheap.'),
  p1(12, 'Course start date', 'Hello, this is the language school. Your course was going to start on the third of March, but because of low numbers the first class will be one week later, on the tenth. Classes will still be on Tuesdays.',
    'When does the course start?', ['3rd March', '10th March', '17th March'], 1, 'It starts one week later, on the tenth.'),
  p1(13, 'Job of a friend', 'Man: What does your sister do now? Is she still a teacher? Woman: No, she left teaching two years ago. She trained as a nurse for a while, but now she works as a police officer.',
    'What is the sister’s job now?', ['Teacher', 'Nurse', 'Police officer'], 2, 'She “now works as a police officer”.', 'B2'),
  p1(14, 'Hotel room', 'Receptionist: Good evening. You booked a double room for three nights, is that right? Guest: Actually, I changed it to two nights by email yesterday. Receptionist: Ah yes, I see it here. Two nights.',
    'How many nights will the guest stay?', ['One', 'Two', 'Three'], 1, 'The booking was changed to two nights.'),
  p1(15, 'Why he is late', 'Hi, it’s Dan. I’m going to be about twenty minutes late. The traffic isn’t bad, but I had to go back home because I forgot my laptop. Sorry! Start without me.',
    'Why is Dan late?', ['There is heavy traffic', 'He forgot something', 'His car broke down'], 1, 'He went back home for his laptop; the traffic “isn’t bad”.', 'B2'),
  p1(16, 'Favourite sport', 'Woman: Do you still play tennis? Man: Not really, my knee’s been bad. I’ve started swimming instead, and I love it. Woman: I thought you were going to try golf. Man: Too slow for me!',
    'What sport does the man do now?', ['Tennis', 'Swimming', 'Golf'], 1, 'He stopped tennis and now swims; golf is “too slow”.'),
];
