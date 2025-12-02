const i18nData = {
  en: {
    /* ======================================================
       🌍 APP UI
    ====================================================== */
    appTitle: "Global Perspectives Exam Prep",
    appSubtitle: "Mastering Perspectives, Bias, and Critical Thinking",
    sectionGuideTitle: "Study Slides 📚",
    gameTitle: "Interactive Game Activities 🎮",

    tabFlashcard: "1. Flashcard Quiz",
    tabBias: "2. Bias Detector",
    tabScenariopicker: "3. Scenario Picker",
    tabStakeholder: "4. Stakeholder Match",
    tabTruefalse: "5. True/False Quiz",

    lessonSlideLabel: "Slide",
    lessonPrev: "Previous",
    lessonNext: "Next",

    footerContact: "Questions? Contact me on WhatsApp:",
    footerCopyright: "&copy; 2025 Study Guide App",
    
    qLabelQuestion: "Question",
    qTerm: "QUESTION / TERM",
    qAnswer: "ANSWER / DEFINITION",
    qClick: "Click to reveal the answer!",
    qNext: "Next",
    qRestart: "Restart",
    qCorrect: "Correct! 🎉",
    qIncorrect: "Incorrect ❌ Try again!",
    qQuizComplete: "Quiz Complete! 🎯 Great job!",


    /* ======================================================
       📘 STUDY SLIDE TEXT
    ====================================================== */
    c1Title: "1. Understanding Different Perspectives 🔍",
    c1p1: "A **Perspective** is the unique way someone understands or interprets an issue. Two people can see the same situation but focus on different parts of it.",
    c1Example: "**Example:** Electric cars can be viewed as positive (cleaner air) or negative (battery waste). Both views can be true because they emphasize different aspects.",

    c2Title: "2. Identifying and Neutralizing Bias ⚖️",
    c2p1: "**Bias** is an unfair preference toward or against something. Biased statements often use:",
    c2l1: "**Extreme Language** — words like 'always', 'never', 'everyone', 'no one'.",
    c2l2: "**Generalization** — assuming something is true for an entire group.",
    c2l3: "**Emotional Appeals** — using strong emotion instead of logic.",
    c2Biased: "❌ Biased Example: “Anyone who disagrees doesn’t care about the planet.”",
    c2Neutral: "✅ Neutral Example: “There are different opinions about recycling programs.”",

    c3Title: "3. Stakeholder Reasoning 👥",
    c3p1: "A **Stakeholder** is anyone affected by a decision or event. Their needs shape their perspective.",
    c3l1: "Airport Example:",
    c3l1a: "🏠 Nearby Homeowner — concerned about noise and safety.",
    c3l1b: "💼 Business Owner — benefits from more customers and tourism.",
    c3l1c: "🎓 Student — mixed impact: job opportunities but higher rent.",

    c4Title: "4. Identifying Assumptions and Context 💡",
    c4p1: "An **Assumption** is something believed to be true without proof. Arguments often rely on hidden assumptions.",
    c4l1: "Student A assumes teenagers need independence from part-time work.",
    c4l2: "Student B assumes students cannot balance work and academics.",
    c4p2: "A person's background (culture, income, values, upbringing) shapes what they consider important.",


    /* ======================================================
       ⭐ FLASHCARDS (5 Cards)
    ====================================================== */
    flashQ1_front: "What is a 'Perspective'?",
    flashQ1_back: "A person's viewpoint or way of understanding an issue.",

    flashQ2_front: "How can two opposite perspectives both be true?",
    flashQ2_back: "People may focus on different aspects of the same issue.",

    flashQ3_front: "What is 'Bias'?",
    flashQ3_back: "An unfair preference for or against something.",

    flashQ4_front: "What is an 'Assumption'?",
    flashQ4_back: "A belief accepted as true without proof.",

    flashQ5_front: "What shapes a stakeholder’s perspective?",
    flashQ5_back: "Their needs, interests, and how they are affected.",


    /* ======================================================
       🎯 BIAS DETECTOR GAME
    ====================================================== */
    bInstruction: "🧠 Identify the type of bias in this statement:",
    biasQ1_statement: "The only reason people support recycling is because they want to feel morally superior.",
    biasQ1_correct: "Extreme Language",
    biasQ1_wrong1: "Generalization",
    biasQ1_wrong2: "Emotional Appeal",
    biasQ1_feedbackCorrect: "Correct! 🎉 This uses extreme language to attack motives rather than analyze facts.",
biasQ1_feedbackWrong: "Not quite. Look for exaggerated claims about people’s motives.",


    biasQ2_statement: "If we don’t fix climate change immediately, society will collapse forever.",
    biasQ2_correct: "Emotional Appeal",
    biasQ2_wrong1: "Generalization",
    biasQ2_wrong2: "Extreme Language",
      biasQ2_feedbackCorrect: "Correct! 🌍 The statement uses emotional fear-based wording.",
biasQ2_feedbackWrong: "Try again — which option focuses on dramatic emotional language?",


    biasQ3_statement: "Everyone who uses social media is completely addicted.",
    biasQ3_correct: "Generalization",
    biasQ3_wrong1: "Emotional Appeal",
    biasQ3_wrong2: "Extreme Language",
      biasQ3_feedbackCorrect: "Correct! 📱 This is a generalization about all social media users.",
biasQ3_feedbackWrong: "Think again — does it assume everyone behaves the same?",


    biasQ4_statement: "Anyone who doesn’t like this school policy clearly hates education.",
    biasQ4_correct: "Extreme Language",
    biasQ4_wrong1: "Generalization",
    biasQ4_wrong2: "Emotional Appeal",
      biasQ4_feedbackCorrect: "Correct! 🎯 This is extreme language that misrepresents people’s intentions.",
biasQ4_feedbackWrong: "Try again — this uses exaggerated accusations, not logic.",


    biasQ5_statement: "This restaurant is always terrible. Every meal is disgusting.",
    biasQ5_correct: "Extreme Language",
    biasQ5_wrong1: "Generalization",
    biasQ5_wrong2: "Emotional Appeal",
      biasQ5_feedbackCorrect: "Correct! 🍽️ Words like 'always' and 'every' are classic extreme language.",
biasQ5_feedbackWrong: "Not quite — look for absolute terms like 'always' or 'every'.",


    biasCorrect: "Correct! 🎉 This is the right type of bias.",
    biasWrong: "Not quite — look for the language used.",


    /* ======================================================
       🧠 SCENARIO PICKER (5 Questions)
    ====================================================== */
    spQ1_instruction: "The city should invest more in public libraries. What assumption is being made?",
    spQ1_opt1: "People actually use and benefit from libraries.",
    spQ1_opt2: "Libraries are the only important public service.",
    spQ1_opt3: "The city has unlimited money.",

    spQ2_instruction: "Schools should require financial literacy classes. What assumption is being made?",
    spQ2_opt1: "Students lack financial skills.",
    spQ2_opt2: "Parents cannot teach financial lessons.",
    spQ2_opt3: "Math classes teach nothing useful.",

    spQ3_instruction: "The city should build more bike lanes. What assumption is being made?",
    spQ3_opt1: "People will use bikes if the infrastructure exists.",
    spQ3_opt2: "Cars will be banned soon.",
    spQ3_opt3: "Walking is unpopular.",

    spQ4_instruction: "Teenagers should not work part-time. What assumption is being made?",
    spQ4_opt1: "Part-time jobs hurt academic performance.",
    spQ4_opt2: "Teenagers are irresponsible.",
    spQ4_opt3: "Families do not need extra income.",

    spQ5_instruction: "The town should build more sports facilities. What assumption is being made?",
    spQ5_opt1: "Sports participation benefits the community.",
    spQ5_opt2: "Everyone plays sports.",
    spQ5_opt3: "Entertainment is not important.",

    spCorrect: "Correct! 🎉 You found the hidden assumption.",
    spWrong: "Incorrect — think about what must be true for the argument to work.",


    /* ======================================================
       🏅 STAKEHOLDER MATCH (5 Questions)
    ====================================================== */
    shQ1_instruction: "A city raises bus fares by 40%. Who is most negatively affected?",
    shQ1_opt1: "Low-income workers who rely on buses daily.",
    shQ1_opt2: "Tourists who visit once a year.",
    shQ1_opt3: "People who work from home.",

    shQ2_instruction: "A new shopping mall opens. Who benefits most?",
    shQ2_opt1: "Local business owners.",
    shQ2_opt2: "Nearby students looking for part-time jobs.",
    shQ2_opt3: "Retired citizens living far away.",

    shQ3_instruction: "A noisy factory expands. Who is most negatively affected?",
    shQ3_opt1: "Nearby homeowners.",
    shQ3_opt2: "Factory shareholders.",
    shQ3_opt3: "People in another city.",

    shQ4_instruction: "Internet prices drop by 50%. Who benefits most?",
    shQ4_opt1: "Online university students.",
    shQ4_opt2: "People who do not use the internet.",
    shQ4_opt3: "Tourists.",

    shQ5_instruction: "A new hospital opens in a rural area. Who benefits most?",
    shQ5_opt1: "Local residents with limited healthcare access.",
    shQ5_opt2: "Doctors in the capital city.",
    shQ5_opt3: "People in a different country.",

    stakeCorrect: "Correct! 🎉 You identified the right stakeholder.",
    stakeWrong: "Incorrect — think about who is most directly affected.",


    /* ======================================================
       ✔ TRUE / FALSE (5 Questions)
    ====================================================== */
    tfQ1_instruction: "Are both statements true, even if they conflict?",
    tfQ1_A: "A new airport increases tourism and business profits.",
    tfQ1_B: "The new airport also increases noise pollution.",
    tfQ1_correct: true,

    tfQ2_instruction: "Are both statements true?",
    tfQ2_A: "A factory creates thousands of jobs.",
    tfQ2_B: "The same factory increases air pollution.",
    tfQ2_correct: true,

    tfQ3_instruction: "Are both statements true?",
    tfQ3_A: "Banning plastic bags reduces waste.",
    tfQ3_B: "Banning plastic bags causes inconvenience.",
    tfQ3_correct: true,

    tfQ4_instruction: "Are both statements true?",
    tfQ4_A: "A community park provides recreation.",
    tfQ4_B: "The same park increases maintenance costs.",
    tfQ4_correct: true,

    tfQ5_instruction: "Are both statements true?",
    tfQ5_A: "Online learning increases flexibility.",
    tfQ5_B: "Online learning reduces face-to-face interaction.",
    tfQ5_correct: true,

    tfTrue: "TRUE — they address different impacts",
    tfFalse: "FALSE — only one can be true",
    tfCorrect: "Correct! 🎉 Conflicting statements can both be true when they focus on different impacts.",
    tfWrong: "Incorrect — think about how multiple impacts can exist at once.",
      
    tfOptionTrue: "TRUE — they address different impacts",
    tfOptionFalse: "FALSE — only one can be true",
      
    /* ======================================================
   🎯 SCENARIO PICKER — Feedback (Matches data.js keys)
====================================================== */
spQ1_feedbackCorrect: "Correct! 📚 This assumption must be true for the argument to work.",
spQ1_feedbackWrong: "Not quite — think about what libraries provide to the community.",

spQ2_feedbackCorrect: "Correct! 💵 The argument assumes students need financial skills.",
spQ2_feedbackWrong: "Try again — what is required for the argument to make sense?",

spQ3_feedbackCorrect: "Correct! 🚴 People must be willing to use bikes if lanes are built.",
spQ3_feedbackWrong: "Incorrect — which assumption supports the need for more bike lanes?",

spQ4_feedbackCorrect: "Correct! 🎓 This assumes part-time work harms academics.",
spQ4_feedbackWrong: "Not quite — think about why someone might oppose teen jobs.",

spQ5_feedbackCorrect: "Correct! 🏅 The argument assumes sports have community benefits.",
spQ5_feedbackWrong: "Try again — which belief supports building more sports facilities?",


/* ======================================================
   🏅 STAKEHOLDER MATCH — Feedback
====================================================== */
shQ1_feedbackCorrect: "Correct! 🚌 Low-income workers rely on bus transport the most.",
shQ1_feedbackWrong: "Not quite — who depends on buses daily?",

shQ2_feedbackCorrect: "Correct! 🛍️ Students gain the most from new job opportunities.",
shQ2_feedbackWrong: "Try again — which group benefits directly?",

shQ3_feedbackCorrect: "Correct! 🏠 Residents near the factory are most affected by noise.",
shQ3_feedbackWrong: "Not exactly — think about who lives close by.",

shQ4_feedbackCorrect: "Correct! 💻 Students using the internet frequently benefit most.",
shQ4_feedbackWrong: "Incorrect — who relies on internet access every day?",

shQ5_feedbackCorrect: "Correct! 🏥 Rural residents need medical access the most.",
shQ5_feedbackWrong: "Try again — which group benefits from nearby healthcare?",


/* ======================================================
   ✔ TRUE/FALSE — Feedback
====================================================== */
tfQ1_feedbackCorrect: "Correct! 🎉 Both statements can be true because they describe different impacts.",
tfQ1_feedbackWrong: "Not quite — both statements can be true at the same time.",

tfQ2_feedbackCorrect: "Correct! 🏭 A factory can create jobs and cause pollution simultaneously.",
tfQ2_feedbackWrong: "Try again — consider how both effects can exist.",

tfQ3_feedbackCorrect: "Correct! 🌱 Two different impacts of the same policy can both be valid.",
tfQ3_feedbackWrong: "Not quite — both statements describe real consequences.",

tfQ4_feedbackCorrect: "Correct! 🌳 A park can have benefits and costs at the same time.",
tfQ4_feedbackWrong: "Try again — opposing impacts can still both be true.",

tfQ5_feedbackCorrect: "Correct! 💻 Online learning has both advantages and disadvantages.",
tfQ5_feedbackWrong: "Not quite — both statements are true impacts of online learning.",
/* --- Flashcard aliases (matches data.js) --- */
flashcardQ1: "What is a 'Perspective'?",
flashcardA1: "A person's viewpoint or way of understanding an issue.",

flashcardQ2: "How can two opposite perspectives both be true?",
flashcardA2: "People may focus on different aspects of the same issue.",

flashcardQ3: "What is 'Bias'?",
flashcardA3: "An unfair preference for or against something.",

flashcardQ4: "What is an 'Assumption'?",
flashcardA4: "A belief accepted as true without proof.",

flashcardQ5: "What shapes a stakeholder’s perspective?",
flashcardA5: "Their needs, interests, and how they are affected.",


/* --- Bias global option labels --- */
biasOptionExtreme: "Extreme Language",
biasOptionGeneralization: "Generalization",
biasOptionEmotional: "Emotional Appeal",

/* --- Universal Try Again hint --- */
hintTryAgain: "Try again! You can do it!",


/* --- Scenario Picker Instruction (top-level) --- */
spInstruction: "Choose the assumption that must be true for the argument to work:",

/* --- Stakeholder Game Instruction --- */
sInstruction: "Choose the stakeholder most affected by the situation:",

/* --- True/False Game Instruction --- */
tfInstruction: "Decide whether both statements can be true at the same time:",

},

ru: {
    /* ======================================================
       🌍 Интерфейс приложения
    ====================================================== */
    appTitle: "Подготовка к экзамену: Глобальные перспективы",
    appSubtitle: "Освоение перспектив, предвзятости и критического мышления",
    sectionGuideTitle: "Учебные слайды 📚",
    gameTitle: "Интерактивные игровые задания 🎮",
    tabFlashcard: "1. Карточки для запоминания",
    tabBias: "2. Детектор предвзятости",
    tabScenariopicker: "3. Выбор сценария",
    tabStakeholder: "4. Соответствие заинтересованных сторон",
    tabTruefalse: "5. Викторина «Верно/Неверно»",
    lessonSlideLabel: "Слайд",
    lessonPrev: "Предыдущий",
    lessonNext: "Следующий",
    footerContact: "Есть вопросы? Напишите мне в WhatsApp:",
    footerCopyright: "&copy; 2025 Приложение для подготовки к экзаменам",

    qLabelQuestion: "Вопрос",
    qTerm: "ВОПРОС / ТЕРМИН",
    qAnswer: "ОТВЕТ / ОПРЕДЕЛЕНИЕ",
    qClick: "Нажмите, чтобы увидеть ответ!",
    qNext: "Далее",
    qRestart: "Начать заново",
    qCorrect: "Правильно! 🎉",
    qIncorrect: "Неверно ❌ Попробуйте еще раз!",
    qQuizComplete: "Викторина завершена! 🎯 Отличная работа!",

    /* ======================================================
       📘 Текст учебных слайдов
    ====================================================== */
    c1Title: "1. Понимание разных перспектив 🔍",
    c1p1: "**Перспектива** — это уникальный способ, которым человек понимает или интерпретирует вопрос. Два человека могут видеть одну и ту же ситуацию, но сосредоточиться на разных её аспектах.",
    c1Example: "**Пример:** Электромобили можно рассматривать как положительное явление (чистый воздух) или отрицательное (проблемы с утилизацией батарей). Обе точки зрения могут быть верными, потому что они акцентируют внимание на разных аспектах.",
    c2Title: "2. Выявление и нейтрализация предвзятости ⚖️",
    c2p1: "**Предвзятость** — это несправедливое предпочтение или неприятие чего-либо. Предвзятые утверждения часто используют:",
    c2l1: "**Экстремальный язык** — слова вроде «всегда», «никогда», «все», «никто».",
    c2l2: "**Обобщение** — предположение, что что-то верно для всей группы.",
    c2l3: "**Эмоциональные призывы** — использование сильных эмоций вместо логики.",
    c2Biased: "❌ Предвзятый пример: «Любой, кто не согласен, явно не заботится о планете.»",
    c2Neutral: "✅ Нейтральный пример: «Есть разные мнения о программах переработки.»",
    c3Title: "3. Логика заинтересованных сторон 👥",
    c3p1: "**Заинтересованная сторона** — это любой человек, на которого влияет решение или событие. Их потребности формируют их перспективу.",
    c3l1: "Пример аэропорта:",
    c3l1a: "🏠 Житель близлежащего дома — обеспокоен шумом и безопасностью.",
    c3l1b: "💼 Владелец бизнеса — получает выгоду от увеличения числа клиентов и туризма.",
    c3l1c: "🎓 Студент — смешанное влияние: возможности для работы, но более высокая арендная плата.",
    c4Title: "4. Выявление предположений и контекста 💡",
    c4p1: "**Предположение** — это что-то, принимаемое за истину без доказательств. Аргументы часто основываются на скрытых предположениях.",
    c4l1: "Студент А предполагает, что подросткам нужна независимость от подработки.",
    c4l2: "Студент Б предполагает, что студенты не могут совмещать работу и учёбу.",
    c4p2: "Происхождение человека (культура, доход, ценности, воспитание) определяет, что он считает важным.",

    /* ======================================================
       ⭐ Карточки для запоминания (5 штук)
    ====================================================== */
    flashQ1_front: "Что такое «перспектива»?",
    flashQ1_back: "Точка зрения или способ понимания вопроса человеком.",
    flashQ2_front: "Как две противоположные перспективы могут быть верными?",
    flashQ2_back: "Люди могут сосредоточиться на разных аспектах одного и того же вопроса.",
    flashQ3_front: "Что такое «предвзятость»?",
    flashQ3_back: "Несправедливое предпочтение или неприятие чего-либо.",
    flashQ4_front: "Что такое «предположение»?",
    flashQ4_back: "Убеждение, принимаемое за истину без доказательств.",
    flashQ5_front: "Что формирует перспективу заинтересованной стороны?",
    flashQ5_back: "Их потребности, интересы и то, как на них влияют.",

    /* ======================================================
       🎯 Игра «Детектор предвзятости»
    ====================================================== */
    bInstruction: "🧠 Определите тип предвзятости в этом утверждении:",
    biasQ1_statement: "Единственная причина, по которой люди поддерживают переработку, — это желание чувствовать моральное превосходство.",
    biasQ1_correct: "Экстремальный язык",
    biasQ1_wrong1: "Обобщение",
    biasQ1_wrong2: "Эмоциональный призыв",
    biasQ1_feedbackCorrect: "Правильно! 🎉 Это утверждение использует экстремальный язык, чтобы атаковать мотивы, а не анализировать факты.",
    biasQ1_feedbackWrong: "Не совсем. Ищите преувеличенные утверждения о мотивах людей.",
    biasQ2_statement: "Если мы не решим проблему изменения климата немедленно, общество рухнет навсегда.",
    biasQ2_correct: "Эмоциональный призыв",
    biasQ2_wrong1: "Обобщение",
    biasQ2_wrong2: "Экстремальный язык",
    biasQ2_feedbackCorrect: "Правильно! 🌍 В утверждении используется эмоциональная, основанная на страхе, лексика.",
    biasQ2_feedbackWrong: "Попробуйте еще раз — какой вариант фокусируется на драматичном эмоциональном языке?",
    biasQ3_statement: "Все, кто пользуется социальными сетями, полностью зависимы от них.",
    biasQ3_correct: "Обобщение",
    biasQ3_wrong1: "Эмоциональный призыв",
    biasQ3_wrong2: "Экстремальный язык",
    biasQ3_feedbackCorrect: "Правильно! 📱 Это обобщение о всех пользователях социальных сетей.",
    biasQ3_feedbackWrong: "Подумайте еще раз — предполагается ли, что все ведут себя одинаково?",
    biasQ4_statement: "Любой, кому не нравится эта школьная политика, явно ненавидит образование.",
    biasQ4_correct: "Экстремальный язык",
    biasQ4_wrong1: "Обобщение",
    biasQ4_wrong2: "Эмоциональный призыв",
    biasQ4_feedbackCorrect: "Правильно! 🎯 Это экстремальный язык, искажающий намерения людей.",
    biasQ4_feedbackWrong: "Попробуйте еще раз — здесь используются преувеличенные обвинения, а не логика.",
    biasQ5_statement: "Этот ресторан всегда ужасен. Каждое блюдо, которое они готовят, отвратительно.",
    biasQ5_correct: "Экстремальный язык",
    biasQ5_wrong1: "Обобщение",
    biasQ5_wrong2: "Эмоциональный призыв",
    biasQ5_feedbackCorrect: "Правильно! 🍽️ Слова «всегда» и «каждое» — классический пример экстремального языка.",
    biasQ5_feedbackWrong: "Не совсем — ищите абсолютные термины, такие как «всегда» или «каждое».",
    biasCorrect: "Правильно! 🎉 Это правильный тип предвзятости.",
    biasWrong: "Не совсем — обратите внимание на используемый язык.",

    /* ======================================================
       🧠 Выбор сценария (5 вопросов)
    ====================================================== */
    spQ1_instruction: "Городу следует больше инвестировать в общественные библиотеки. Какое предположение делается?",
    spQ1_opt1: "Люди действительно пользуются библиотеками и получают от них пользу.",
    spQ1_opt2: "Библиотеки — это единственная важная общественная служба.",
    spQ1_opt3: "У города неограниченные деньги.",
    spQ2_instruction: "Школы должны ввести обязательные уроки финансовой грамотности. Какое предположение делается?",
    spQ2_opt1: "У студентов недостаточно финансовых навыков.",
    spQ2_opt2: "Родители не могут преподавать финансовые уроки.",
    spQ2_opt3: "Уроки математики ничему не учат.",
    spQ3_instruction: "Городу следует строить больше велосипедных дорожек. Какое предположение делается?",
    spQ3_opt1: "Люди будут пользоваться велосипедами, если будет инфраструктура.",
    spQ3_opt2: "Машины скоро запретят.",
    spQ3_opt3: "Ходьба непопулярна.",
    spQ4_instruction: "Подросткам не следует работать неполный рабочий день. Какое предположение делается?",
    spQ4_opt1: "Подработка вредит успеваемости.",
    spQ4_opt2: "Подростки безответственны.",
    spQ4_opt3: "Семьям не нужен дополнительный доход.",
    spQ5_instruction: "Городу следует строить больше спортивных сооружений. Какое предположение делается?",
    spQ5_opt1: "Участие в спорте приносит пользу обществу.",
    spQ5_opt2: "Каждый занимается спортом.",
    spQ5_opt3: "Развлечения не важны.",
    spCorrect: "Правильно! 🎉 Вы нашли скрытое предположение.",
    spWrong: "Неверно — подумайте, что должно быть истинным, чтобы аргумент работал.",

    /* ======================================================
       🏅 Соответствие заинтересованных сторон (5 вопросов)
    ====================================================== */
    shQ1_instruction: "Город повышает тарифы на автобусы на 40%. Кто пострадает больше всего?",
    shQ1_opt1: "Малообеспеченные работники, которые ежедневно пользуются автобусами.",
    shQ1_opt2: "Туристы, которые посещают город раз в год.",
    shQ1_opt3: "Люди, работающие из дома.",
    shQ2_instruction: "Открывается новый торговый центр. Кто получает больше всего выгоды?",
    shQ2_opt1: "Местные владельцы бизнеса.",
    shQ2_opt2: "Студенты поблизости, ищущие подработку.",
    shQ2_opt3: "Пенсионеры, живущие далеко.",
    shQ3_instruction: "Шумный завод расширяет производство. Кто пострадает больше всего?",
    shQ3_opt1: "Жители близлежащих домов.",
    shQ3_opt2: "Акционеры завода.",
    shQ3_opt3: "Люди, живущие в другом городе.",
    shQ4_instruction: "Цены на интернет снижаются на 50%. Кто получает больше всего выгоды?",
    shQ4_opt1: "Студенты онлайн-университетов.",
    shQ4_opt2: "Люди, которые не пользуются интернетом.",
    shQ4_opt3: "Туристы.",
    shQ5_instruction: "В сельской местности открывается новая больница. Кто получает больше всего выгоды?",
    shQ5_opt1: "Местные жители с ограниченным доступом к медицинскому обслуживанию.",
    shQ5_opt2: "Врачи в столице.",
    shQ5_opt3: "Люди в другой стране.",
    stakeCorrect: "Правильно! 🎉 Вы определили правильную заинтересованную сторону.",
    stakeWrong: "Неверно — подумайте, кто подвержен самому прямому влиянию.",

    /* ======================================================
       ✔ Верно/Неверно (5 вопросов)
    ====================================================== */
    tfQ1_instruction: "Оба утверждения фактически верны, даже если они противоречат друг другу?",
    tfQ1_A: "Новый аэропорт увеличивает туризм и прибыль бизнеса.",
    tfQ1_B: "Новый аэропорт также увеличивает шумовое загрязнение.",
    tfQ1_correct: true,
    tfQ2_instruction: "Оба утверждения фактически верны?",
    tfQ2_A: "Завод создает тысячи рабочих мест.",
    tfQ2_B: "Тот же завод увеличивает загрязнение воздуха.",
    tfQ2_correct: true,
    tfQ3_instruction: "Оба утверждения фактически верны?",
    tfQ3_A: "Запрет пластиковых пакетов сокращает отходы.",
    tfQ3_B: "Запрет пластиковых пакетов создает неудобства.",
    tfQ3_correct: true,
    tfQ4_instruction: "Оба утверждения фактически верны?",
    tfQ4_A: "Общественный парк предоставляет возможности для отдыха.",
    tfQ4_B: "Тот же парк увеличивает затраты на обслуживание.",
    tfQ4_correct: true,
    tfQ5_instruction: "Оба утверждения фактически верны?",
    tfQ5_A: "Онлайн-обучение увеличивает гибкость.",
    tfQ5_B: "Онлайн-обучение сокращает личное социальное взаимодействие.",
    tfQ5_correct: true,
    tfTrue: "ВЕРНО — они затрагивают разные последствия",
    tfFalse: "НЕВЕРНО — только одно может быть верным",
    tfCorrect: "Правильно! 🎉 Противоречащие утверждения могут быть верными, если они затрагивают разные последствия.",
    tfWrong: "Неверно — подумайте, как несколько последствий могут существовать одновременно.",

    /* ======================================================
       🎯 Выбор сценария — Обратная связь
    ====================================================== */
    spQ1_feedbackCorrect: "Правильно! 📚 Это предположение должно быть истинным, чтобы аргумент работал.",
    spQ1_feedbackWrong: "Не совсем — подумайте, что библиотеки дают обществу.",
    spQ2_feedbackCorrect: "Правильно! 💵 Аргумент предполагает, что студентам нужны финансовые навыки.",
    spQ2_feedbackWrong: "Попробуйте еще раз — что требуется, чтобы аргумент имел смысл?",
    spQ3_feedbackCorrect: "Правильно! 🚴 Люди должны быть готовы пользоваться велосипедами, если будут построены дорожки.",
    spQ3_feedbackWrong: "Неверно — какое предположение поддерживает необходимость строительства больше велосипедных дорожек?",
    spQ4_feedbackCorrect: "Правильно! 🎓 Это предполагает, что подработка вредит успеваемости.",
    spQ4_feedbackWrong: "Не совсем — подумайте, почему кто-то может выступать против подработки подростков.",
    spQ5_feedbackCorrect: "Правильно! 🏅 Аргумент предполагает, что спорт приносит пользу обществу.",
    spQ5_feedbackWrong: "Попробуйте еще раз — какое убеждение поддерживает строительство больше спортивных сооружений?",

    /* ======================================================
       🏅 Соответствие заинтересованных сторон — Обратная связь
    ====================================================== */
    shQ1_feedbackCorrect: "Правильно! 🚌 Малообеспеченные работники больше всего зависят от автобусного транспорта.",
    shQ1_feedbackWrong: "Не совсем — кто ежедневно зависит от автобусов?",
    shQ2_feedbackCorrect: "Правильно! 🛍️ Студенты больше всего выигрывают от новых возможностей для работы.",
    shQ2_feedbackWrong: "Попробуйте еще раз — какая группа получает прямую выгоду?",
    shQ3_feedbackCorrect: "Правильно! 🏠 Жители рядом с заводом больше всего страдают от шума.",
    shQ3_feedbackWrong: "Не совсем — подумайте, кто живет поблизости.",
    shQ4_feedbackCorrect: "Правильно! 💻 Студенты, часто пользующиеся интернетом, получают больше всего выгоды.",
    shQ4_feedbackWrong: "Неверно — кто каждый день зависит от доступа в интернет?",
    shQ5_feedbackCorrect: "Правильно! 🏥 Сельские жители больше всего нуждаются в медицинском обслуживании.",
    shQ5_feedbackWrong: "Попробуйте еще раз — какая группа выигрывает от близости медицинского обслуживания?",

    /* ======================================================
       ✔ Верно/Неверно — Обратная связь
    ====================================================== */
    tfQ1_feedbackCorrect: "Правильно! 🎉 Оба утверждения могут быть верными, потому что они описывают разные последствия.",
    tfQ1_feedbackWrong: "Не совсем — оба утверждения могут быть верными одновременно.",
    tfQ2_feedbackCorrect: "Правильно! 🏭 Завод может создавать рабочие места и загрязнять окружающую среду одновременно.",
    tfQ2_feedbackWrong: "Попробуйте еще раз — подумайте, как оба эффекта могут существовать одновременно.",
    tfQ3_feedbackCorrect: "Правильно! 🌱 Два разных последствия одной и той же политики могут быть верными.",
    tfQ3_feedbackWrong: "Не совсем — оба утверждения описывают реальные последствия.",
    tfQ4_feedbackCorrect: "Правильно! 🌳 Парк может приносить пользу и одновременно увеличивать затраты.",
    tfQ4_feedbackWrong: "Попробуйте еще раз — противоположные последствия могут быть верными одновременно.",
    tfQ5_feedbackCorrect: "Правильно! 💻 Онлайн-обучение имеет как преимущества, так и недостатки.",
    tfQ5_feedbackWrong: "Не совсем — оба утверждения описывают реальные последствия онлайн-обучения.",

    /* --- Алиасы для карточек --- */
    flashcardQ1: "Что такое «перспектива»?",
    flashcardA1: "Точка зрения или способ понимания вопроса человеком.",
    flashcardQ2: "Как две противоположные перспективы могут быть верными?",
    flashcardA2: "Люди могут сосредоточиться на разных аспектах одного и того же вопроса.",
    flashcardQ3: "Что такое «предвзятость»?",
    flashcardA3: "Несправедливое предпочтение или неприятие чего-либо.",
    flashcardQ4: "Что такое «предположение»?",
    flashcardA4: "Убеждение, принимаемое за истину без доказательств.",
    flashcardQ5: "Что формирует перспективу заинтересованной стороны?",
    flashcardA5: "Их потребности, интересы и то, как на них влияют.",

    /* --- Метки вариантов для предвзятости --- */
    biasOptionExtreme: "Экстремальный язык",
    biasOptionGeneralization: "Обобщение",
    biasOptionEmotional: "Эмоциональный призыв",

    /* --- Универсальная подсказка "Попробуйте еще раз" --- */
    hintTryAgain: "Попробуйте еще раз! У вас получится!",

    /* --- Инструкция для выбора сценария --- */
    spInstruction: "Выберите предположение, которое должно быть истинным, чтобы аргумент работал:",

    /* --- Инструкция для игры "Соответствие заинтересованных сторон" --- */
    sInstruction: "Выберите заинтересованную сторону, на которую больше всего влияет ситуация:",

    /* --- Инструкция для игры "Верно/Неверно" --- */
    tfInstruction: "Решите, могут ли оба утверждения быть верными одновременно:",
}

};




let currentLang = "en";

function t(key) {
    return i18nData[currentLang]?.[key] || `[${key}]`;
}

function translatePage() {
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.getAttribute("data-lang-key");
        if (i18nData[currentLang][key]) {
            el.innerHTML = i18nData[currentLang][key];
        }
    });
    document.getElementById("language-selector").value = currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    translatePage();
    showGame(activeGame);
}
