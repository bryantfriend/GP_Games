// js/data.js (games part)
window.gameData = {
  // ----------------------------------------------------
  // FLASHCARDS — key ideas for ALL questions
  // ----------------------------------------------------
  flashcard: [
    {
      front: "What is a perspective?",
      back: "A perspective is a person’s point of view or way of understanding an issue, based on their experiences, values, and background."
    },
    {
      front: "How can two opposite perspectives both be true?",
      back: "Each perspective focuses on different impacts of the same issue. Both can be true because different people are affected in different ways."
    },
    {
      front: "What is bias?",
      back: "Bias is an unfair preference for or against something. It often appears through emotional, exaggerated, or one-sided language."
    },
    {
      front: "What is loaded language?",
      back: "Loaded language uses strong emotional or extreme words to make something sound very good or very bad (e.g., “selfish”, “disgusting”, “everyone knows…”)."
    },
    {
      front: "What is a neutral statement?",
      back: "A neutral statement uses calm, factual language without exaggeration or emotion. It does not try to push you to agree."
    },
    {
      front: "What is a stakeholder?",
      back: "A stakeholder is any person or group who is affected by a decision or issue (for example: students, parents, shop owners, bus drivers)."
    },
    {
      front: "What is an assumption?",
      back: "An assumption is an idea that a person accepts as true without clear proof. Many arguments or opinions are based on hidden assumptions."
    },
    {
      front: "How does background affect perspective?",
      back: "A person’s culture, family, money situation, age, and personal experiences change how they feel about issues. That is why people disagree."
    },
    {
      front: "What is the purpose of a perspective map?",
      back: "A perspective map helps you compare different viewpoints. You write the topic in the middle, then different roles (stakeholders) and their reasons around it."
    },
    {
      front: "Perspective vs. Bias – what’s the difference?",
      back: "A perspective is a point of view. Bias is when a perspective becomes unfair or one-sided, often using emotional language or ignoring other views."
    }
  ],

  // ----------------------------------------------------
  // BIAS GAME — recognising loaded language + neutral rewrites
  // (matches Exam: Section A Q2 a/b)
// ----------------------------------------------------
  bias: {
    questions: [
      {
        subtitle: "Choose the answer that shows LOADED LANGUAGE.",
        statement:
          "Electric cars are the only smart choice; anyone who doesn’t support them is selfish and ignorant.",
        options: [
          "“Electric cars are the only smart choice.”",
          "“Anyone who doesn’t support them is selfish and ignorant.”",
          "“Some people disagree about electric cars.”"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Yes — 'selfish and ignorant' is emotional and attacking. That’s loaded language.",
        feedbackWrong:
          "Not quite. The most emotional and attacking part is 'selfish and ignorant' — that is loaded language."
      },
      {
        subtitle: "Choose the MOST NEUTRAL rewrite.",
        statement:
          "“Anyone who thinks plastic bags are fine clearly hates the environment.”",
        options: [
          "“People who use plastic bags are destroying the planet.”",
          "“Some people think plastic bags are fine, but others worry about the environment.”",
          "“Only lazy people still use plastic bags these days.”"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Correct. This sentence is calm and mentions both sides without attacking anyone.",
        feedbackWrong:
          "Look for the sentence that avoids attacking words like 'destroying' or 'lazy' and simply explains both sides."
      },
      {
        subtitle: "Spot the biased, one-sided statement.",
        statement:
          "A school is deciding whether to build a new sports centre.",
        options: [
          "“Some students feel it will improve their fitness and school spirit.”",
          "“Building a sports centre is a complete waste of money and only idiots want it.”",
          "“Teachers are discussing whether the budget is enough for the project.”"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Exactly. Calling people 'idiots' is a strong emotional attack and shows clear bias.",
        feedbackWrong:
          "The biased statement is the one that uses insults and shows no respect for the other side."
      },
      {
        subtitle: "Choose the BEST neutral version.",
        statement:
          "“Every student knows that part-time jobs destroy teenagers’ education.”",
        options: [
          "“Many students believe that part-time jobs can make studying more difficult.”",
          "“Part-time jobs always destroy teenagers’ education.”",
          "“Only careless families allow teenagers to get jobs.”"
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Yes. It uses 'many' instead of 'every' and avoids extreme words like 'destroy'.",
        feedbackWrong:
          "Remember: neutral language avoids words like 'every', 'always', or attacking phrases like 'careless families'."
      },
      {
        subtitle: "Identify the statement with NO clear bias.",
        statement:
          "A town is thinking about banning plastic bags in shops.",
        options: [
          "“Plastic bags are disgusting and only lazy people still use them.”",
          "“Plastic bags are used by normal people; there is nothing wrong with them at all.”",
          "“The town council is collecting opinions before deciding whether to ban plastic bags.”"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Correct. It simply describes what is happening without judging plastic bags or people.",
        feedbackWrong:
          "The neutral sentence is the one that only explains what is happening, with no emotional words."
      }
    ]
  },

  // ----------------------------------------------------
  // SCENARIO PICKER — assumptions + “both can be true”
  // (matches Exam: Section C – assumptions / reasoning)
// ----------------------------------------------------
  scenariopicker: {
    questions: [
      {
        subtitle: "Choose the hidden ASSUMPTION in this opinion.",
        statement:
          "“Teenagers should not have part-time jobs because they will always get worse grades.”",
        options: [
          "Teenagers sometimes enjoy earning their own money.",
          "Part-time jobs automatically make school performance worse.",
          "Some schools offer after-school clubs."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Yes. The speaker is assuming that every part-time job will damage grades.",
        feedbackWrong:
          "Look for the statement that the writer believes without proving — that jobs always make grades worse."
      },
      {
        subtitle: "Choose the assumption behind this idea.",
        statement:
          "“Our town must build a sports centre; otherwise, students will never be healthy.”",
        options: [
          "Students can only become healthy if the town builds a sports centre.",
          "Some students already play sports after school.",
          "Healthy eating is also important for fitness."
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Exactly. The opinion assumes that the sports centre is the ONLY way for students to be healthy.",
        feedbackWrong:
          "The assumption is the thing that must be true for the opinion to make sense — in this case, that the sports centre is the only path to health."
      },
      {
        subtitle: "Which answer BEST explains how both perspectives can be true?",
        statement:
          "Source A: Electric cars are good because they reduce air pollution.\nSource B: Electric cars are bad because they are expensive and not everyone can charge them.",
        options: [
          "Only Source A is correct because pollution is more important than price.",
          "Both are true: electric cars can help the environment, but cost and charging are still real problems.",
          "Only Source B is correct because not everyone can afford electric cars."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Yes. This mirrors the exam: two perspectives can both be true because they focus on different impacts.",
        feedbackWrong:
          "Remember: exam questions often want you to explain how both sides are true at the same time, not choose a winner."
      },
      {
        subtitle: "Choose the best explanation of how both bus perspectives can be true.",
        statement:
          "Student: “I paid for my seat, so I should keep it.”\nElderly person: “I need to sit down because I cannot stand safely.”",
        options: [
          "Both are true: the student did pay, but the elderly person’s safety needs are also real.",
          "Only the elderly person is correct because they are older.",
          "Only the student is correct because they followed the rules."
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Exactly. This is the kind of explanation the exam wants: both perspectives are valid for different reasons.",
        feedbackWrong:
          "Try to include both sides in your reasoning: the ticket (student) and safety (elderly person)."
      }
    ]
  },

  // ----------------------------------------------------
  // STAKEHOLDER GAME — perspective map skills
  // (matches Exam: Section B – perspective map / bus / plastic bags)
// ----------------------------------------------------
  stakeholder: {
    questions: [
      {
        subtitle: "Who is the MAIN stakeholder and why?",
        statement:
          "A town is deciding whether to ban plastic bags in all supermarkets.",
        options: [
          "Supermarket owners who may need to pay for new bags.",
          "People living in other countries.",
          "Tourists who might visit the town in the future."
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Yes. Supermarket owners are directly affected by the cost and system change.",
        feedbackWrong:
          "Think about who is MOST directly affected by the decision inside the town itself."
      },
      {
        subtitle: "Which option describes a clear STAKEHOLDER PERSPECTIVE?",
        statement:
          "Topic: Building a new sports centre next to houses.",
        options: [
          "Homeowner: “I’m worried about noise and traffic near my house.”",
          "“Sports are sometimes fun to watch on TV.”",
          "“Some people like sports, others don’t.”"
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Correct. It names a role (homeowner) and gives a clear reason — exactly like a perspective map entry.",
        feedbackWrong:
          "A good stakeholder perspective mentions WHO the person is and WHY they think that way."
      },
      {
        subtitle: "Choose the perspective that fits the BUS scenario best.",
        statement:
          "Scenario: The bus is crowded. A student is sitting. An elderly passenger gets on and there are no free seats.",
        options: [
          "Elderly passenger: “I need a seat because I cannot stand safely for a long time.”",
          "Bus driver: “I like driving buses.”",
          "Tourist: “I want to take photos of the city.”"
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Exactly. That’s the stakeholder whose safety is most affected in the exam’s bus situation.",
        feedbackWrong:
          "Think about who is directly affected by standing or sitting in this situation."
      },
      {
        subtitle: "Which role would you add to a perspective map about a plastic-bag ban?",
        statement:
          "Topic: 'Plastic bags banned in town shops'.",
        options: [
          "Local shopper who uses bags for weekly food shopping.",
          "A pilot who flies to other countries.",
          "A famous singer from another city."
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Yes. A local shopper is clearly affected and belongs on the perspective map.",
        feedbackWrong:
          "Stakeholders are people who are directly involved or affected, not random people far away."
      }
    ]
  },

  // ----------------------------------------------------
  // TRUE/FALSE — Can both statements be true?
  // (matches Exam: Section A 1c idea)
// ----------------------------------------------------
  truefalse: {
    questions: [
      {
        instruction:
          "Decide if BOTH perspectives could be true at the same time.",
        statementA:
          "“The sports centre will give teenagers a safe place to exercise.”",
        statementB:
          "“The sports centre will be expensive and might increase taxes.”",
        optionTrueText: "TRUE – both could be correct.",
        optionFalseText: "FALSE – only one can be correct.",
        correctAnswer: true,
        feedbackCorrect:
          "Exactly. One focuses on benefits, the other on costs. Both impacts can exist together.",
        feedbackWrong:
          "In the exam, you often need to explain how both positive and negative impacts can be true at once."
      },
      {
        instruction:
          "Decide if BOTH perspectives could be true at the same time.",
        statementA:
          "“Banning plastic bags will reduce plastic rubbish in the town.”",
        statementB:
          "“Some shoppers will find it difficult to remember reusable bags.”",
        optionTrueText: "TRUE – both could be correct.",
        optionFalseText: "FALSE – only one can be correct.",
        correctAnswer: true,
        feedbackCorrect:
          "Yes. Environmental benefits and practical problems can exist together.",
        feedbackWrong:
          "Remember: different groups can experience different effects from the same decision."
      },
      {
        instruction:
          "Decide if BOTH statements can reasonably be true.",
        statementA:
          "“Part-time jobs can teach teenagers responsibility and time management.”",
        statementB:
          "“Some teenagers might feel tired and have less time to study if they work too many hours.”",
        optionTrueText: "TRUE – both could be correct.",
        optionFalseText: "FALSE – only one can be correct.",
        correctAnswer: true,
        feedbackCorrect:
          "Correct. This is exactly the kind of balanced thinking the exam rewards.",
        feedbackWrong:
          "The exam expects you to see that one thing (jobs) can have both positive and negative effects."
      }
    ]
  }
};
