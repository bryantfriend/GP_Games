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

    zh: {
    // =========================================
    // App UI
    // =========================================
    appTitle: "全球视角考试备考",
    appSubtitle: "掌握视角、偏见与批判性思维",
    sectionGuideTitle: "全面学习指南",
    gameTitle: "互动游戏活动",
    tabFlashcard: "1. 闪卡测验",
    tabBias: "2. 偏见检测",
    tabScenariopicker: "3. 情境选择",
    tabStakeholder: "4. 利益相关者匹配",
    tabTruefalse: "5. 判断题测验",
    footerContact: "有问题？通过WhatsApp联系我：",
    footerCopyright: "&copy; 2025 学习备考应用。祝你好运！",
    qLabelQuestion: "问题",
    hintTryAgain: "思考一下陈述背后的含义。",

    // =========================================
    // Study Guide Section Text
    // =========================================
    c1Title: "1. 理解不同视角",
    c1p1: "**视角**是指个人对某个问题的观点或态度。两个不同的来源可能都是真实的，如果它们强调了不同的方面。",
    c1Example: "**示例（电动汽车）**：本地利益（更清洁的空气）与全球生产问题（电池废弃物）。两者都是有效的，因为它们关注生命周期的不同部分。",
    c2Title: "2. 识别和中和偏见",
    c2p1: "**偏见**是对某事物的不公平偏好或反感。请注意以下几点：",
    c2l1: "**极端语言**：“总是”、“从不”、“最好”、“最差”。",
    c2l2: "**泛化**：将一个观点应用到整个群体。",
    c2l3: "**情感诉求**：强烈的情感操纵而非事实。",
    c2Biased: "有偏见：“任何不同意的人显然不关心地球。”",
    c2Neutral: "中性：“关于回收计划存在不同意见。”",
    c3Title: "3. 利益相关者推理",
    c3p1: "不同的人（利益相关者）受到事件的影响不同。他们的利益塑造了他们的视角。",
    c3l1: "机场示例：",
    c3l1a: "附近居民——关注噪音和生活质量。",
    c3l1b: "商人——受益于顾客增加。",
    c3l1c: "大学生——影响复杂（工作机会 vs. 更高租金）。",
    c4Title: "4. 识别假设和背景",
    c4p1: "**假设**是指未经证据而被接受为真实的事物。它影响论点的形成。",
    c4p2: "一个人的背景（文化、财富、成长环境）塑造了他们的价值观和视角。",
    c4l1: "学生A假设年轻人需要独立。",
    c4l2: "学生B假设学生无法平衡工作和学习。",

    // =========================================
    // Common Game Strings
    // =========================================
    qTerm: "问题/术语",
    qAnswer: "答案/定义",
    qClick: "点击查看答案！",
    qNext: "下一题",
    qRestart: "重新开始",
    qCorrect: "正确！",
    qIncorrect: "错误。",
    qQuizComplete: "测验完成！",

    // =========================================
    // FLASHCARDS (5 Cards)
    // =========================================
    flashcardQ1: "在某个问题的背景下定义“视角”。",
    flashcardA1: "一个人对某个问题的观点或态度。",
    flashcardQ2: "为什么相反的视角都可以是正确的？",
    flashcardA2: "它们可能关注问题的不同方面。",
    flashcardQ3: "定义“偏见”。",
    flashcardA3: "对某事物的强烈偏好或不公平判断。",
    flashcardQ4: "定义“假设”。",
    flashcardA4: "未经证据而被接受为真实的信念。",
    flashcardQ5: "什么塑造了利益相关者的视角？",
    flashcardA5: "他们的利益、需求以及对其生活的影响。",

    // =========================================
    // BIAS DETECTOR (5 Questions)
    // =========================================
    bInstruction: "识别下列陈述中的偏见类型。",
    bStatement1: "人们想要公共交通的唯一原因是他们太懒不想开车。",
    bStatement2: "如果我们今年不解决气候变化问题，人类将会崩溃。",
    bStatement3: "所有使用抖音的人都没有注意力。",
    bStatement4: "显然，任何支持校服的人都讨厌孩子的自由。",
    bStatement5: "这家餐厅总是很糟糕。他们做的每一餐都很难吃。",
    bTypeGeneralization: "泛化",
    bTypeEmotional: "情感诉求",
    bTypeExtreme: "极端语言",
    bFeedbackCorrect: "正确！你识别出了偏见。",
    bFeedbackWrong: "错误。再试一次！",

    // =========================================
    // SCENARIO PICKER (5 Questions)
    // =========================================
    spInstruction: "识别论点背后的隐含假设。",
    spStatement1: "城市必须加大对公共图书馆的投资。",
    spA1: "市民确实使用公共图书馆。",
    spB1: "图书馆是城市唯一资助的项目。",
    spC1: "城市没有财政问题。",
    spCorrect1: "spA1",
    spStatement2: "学校应要求开设理财课程。",
    spA2: "学生缺乏理财技能。",
    spB2: "家长无法教授理财知识。",
    spC2: "数学课程毫无用处。",
    spCorrect2: "spA2",
    spStatement3: "城市应资助更多自行车道。",
    spA3: "如果基础设施存在，人们会使用自行车。",
    spB3: "汽车被禁止。",
    spC3: "步行不受欢迎。",
    spCorrect3: "spA3",
    spStatement4: "青少年不应该兼职工作。",
    spA4: "兼职工作会对学业成绩产生负面影响。",
    spB4: "青少年不负责任。",
    spC4: "家庭不需要额外收入。",
    spCorrect4: "spA4",
    spStatement5: "小镇应投资更多体育设施。",
    spA5: "体育参与有益于社区。",
    spB5: "每个市民都参加体育运动。",
    spC5: "娱乐不重要。",
    spCorrect5: "spA5",
    spFeedbackCorrect: "正确！你识别出了假设。",
    spFeedbackWrong: "错误。再试一次！",

    // =========================================
    // STAKEHOLDER MATCH (5 Questions)
    // =========================================
    sInstruction: "哪个利益相关者受到的影响最大？",
    sQ1: "城市将公交车费上涨40%。谁受到的负面影响最大？",
    sQ1A: "依赖公交车的低收入工人。",
    sQ1B: "一年一次的游客。",
    sQ1C: "在家工作的人。",
    sQ1Correct: "sQ1A",
    sQ2: "一个新的购物中心开业。谁受益最多？",
    sQ2A: "当地商人。",
    sQ2B: "附近寻找兼职工作的学生。",
    sQ2C: "住在远处的退休公民。",
    sQ2Correct: "sQ2B",
    sQ3: "一个嘈杂的工厂扩大了生产。",
    sQ3A: "附近的房主。",
    sQ3B: "工厂股东。",
    sQ3C: "住在另一个城市的人。",
    sQ3Correct: "sQ3A",
    sQ4: "互联网价格下降50%。谁受益最多？",
    sQ4A: "在线大学生。",
    sQ4B: "不使用互联网的人。",
    sQ4C: "游客。",
    sQ4Correct: "sQ4A",
    sQ5: "农村地区新开了一家医院。",
    sQ5A: "医疗保健有限的当地居民。",
    sQ5B: "生活在首都的医生。",
    sQ5C: "另一个国家的公民。",
    sQ5Correct: "sQ5A",
    sFeedbackCorrect: "正确！你识别出了正确的利益相关者。",
    sFeedbackWrong: "错误。思考一下谁受到的影响最大。",

    // =========================================
    // TRUE/FALSE QUIZ (5 Questions)
    // =========================================
    tfInstruction: "这两个陈述在事实上是否都正确，即使它们有冲突？",
    tfA1: "新机场促进了旅游业和当地利润。",
    tfB1: "新机场增加了噪音污染。",
    tfAns1: true,
    tfA2: "一家工厂创造了数千个就业机会。",
    tfB2: "同一家工厂增加了空气污染。",
    tfAns2: true,
    tfA3: "禁止塑料袋减少了浪费。",
    tfB3: "禁止塑料袋给购物者带来了不便。",
    tfAns3: true,
    tfA4: "社区公园提供了休闲场所。",
    tfB4: "同一个公园增加了城市的维护成本。",
    tfAns4: true,
    tfA5: "在线学习增加了灵活性。",
    tfB5: "在线学习减少了面对面的社交互动。",
    tfAns5: true,
    tfOptionTrue: "正确（它们涉及不同的影响）",
    tfOptionFalse: "错误（只有一个可以是正确的）",
    tfFeedbackCorrect: "正确！如果它们关注不同的后果，两者都可以是正确的。",
    tfFeedbackWrong: "错误。思考一下不同的影响如何共存。",
},
    ru: {
    // =========================================
    // App UI
    // =========================================
    appTitle: "Подготовка к экзамену: Глобальные перспективы",
    appSubtitle: "Освоение перспектив, предвзятости и критического мышления",
    sectionGuideTitle: "Подробное учебное пособие",
    gameTitle: "Интерактивные игровые задания",
    tabFlashcard: "1. Карточки для запоминания",
    tabBias: "2. Детектор предвзятости",
    tabScenariopicker: "3. Выбор сценария",
    tabStakeholder: "4. Соответствие заинтересованных сторон",
    tabTruefalse: "5. Викторина «Верно/Неверно»",
    footerContact: "Есть вопросы? Напишите мне в WhatsApp:",
    footerCopyright: "&copy; 2025 Приложение для подготовки к экзаменам. Удачи!",
    qLabelQuestion: "Вопрос",
    hintTryAgain: "Подумайте о смысле, стоящем за утверждением.",

    // =========================================
    // Study Guide Section Text
    // =========================================
    c1Title: "1. Понимание разных перспектив",
    c1p1: "**Перспектива** — это точка зрения или отношение человека к вопросу. Два разных источника могут быть правдивыми, если они акцентируют внимание на разных аспектах.",
    c1Example: "**Пример (Электромобили):** Местные преимущества (чистый воздух) против глобальных проблем производства (утилизация батарей). Оба варианта верны, потому что они сосредоточены на разных этапах жизненного цикла.",
    c2Title: "2. Выявление и нейтрализация предвзятости",
    c2p1: "**Предвзятость** — это несправедливое предпочтение или неприятие чего-либо. Обратите внимание на:",
    c2l1: "**Экстремальный язык:** «Всегда», «Никогда», «Лучший», «Худший».",
    c2l2: "**Обобщение:** Применение одной идеи ко всей группе.",
    c2l3: "**Эмоциональные призывы:** Сильное эмоциональное манипулирование вместо фактов.",
    c2Biased: "Предвзятое: «Любой, кто не согласен, явно не заботится о планете.»",
    c2Neutral: "Нейтральное: «Есть разные мнения о программах переработки.»",
    c3Title: "3. Логика заинтересованных сторон",
    c3p1: "Разные люди (заинтересованные стороны) по-разному подвержены влиянию событий. Их интересы формируют их перспективы.",
    c3l1: "Пример аэропорта:",
    c3l1a: "Житель близлежащего дома — обеспокоен шумом и качеством жизни.",
    c3l1b: "Владелец бизнеса — получает выгоду от увеличения числа клиентов.",
    c3l1c: "Студент университета — смешанное влияние (рабочие места против повышения арендной платы).",
    c4Title: "4. Выявление предположений и контекста",
    c4p1: "**Предположение** — это что-то, принимаемое за истину без доказательств. Оно формирует аргументы.",
    c4p2: "Происхождение человека (культура, богатство, воспитание) формирует его ценности и перспективы.",
    c4l1: "Студент А предполагает, что молодым людям нужна независимость.",
    c4l2: "Студент Б предполагает, что студенты не могут совмещать работу и учебу.",

    // =========================================
    // Common Game Strings
    // =========================================
    qTerm: "ВОПРОС / ТЕРМИН",
    qAnswer: "ОТВЕТ / ОПРЕДЕЛЕНИЕ",
    qClick: "Нажмите, чтобы увидеть ответ!",
    qNext: "Далее",
    qRestart: "Начать заново",
    qCorrect: "Правильно!",
    qIncorrect: "Неверно.",
    qQuizComplete: "Викторина завершена!",

    // =========================================
    // FLASHCARDS (5 Cards)
    // =========================================
    flashcardQ1: "Дайте определение термину «перспектива» в контексте вопроса.",
    flashcardA1: "Точка зрения или отношение человека к вопросу.",
    flashcardQ2: "Как противоположные перспективы могут быть верными?",
    flashcardA2: "Они могут фокусироваться на разных аспектах вопроса.",
    flashcardQ3: "Дайте определение термину «предвзятость».",
    flashcardA3: "Сильное предпочтение или несправедливое суждение о чем-либо.",
    flashcardQ4: "Дайте определение термину «предположение».",
    flashcardA4: "Убеждение, принимаемое за истину без доказательств.",
    flashcardQ5: "Что формирует перспективу заинтересованной стороны?",
    flashcardA5: "Их интересы, потребности и влияние на их жизнь.",

    // =========================================
    // BIAS DETECTOR (5 Questions)
    // =========================================
    bInstruction: "Определите тип предвзятости в следующем утверждении.",
    bStatement1: "Единственная причина, по которой люди хотят общественный транспорт, — это их лень водить машину.",
    bStatement2: "Если мы не решим проблему изменения климата в этом году, человечество рухнет.",
    bStatement3: "Каждый, кто пользуется TikTok, не имеет внимания.",
    bStatement4: "Очевидно, что любой, кто поддерживает школьную форму, ненавидит свободу детей.",
    bStatement5: "Этот ресторан всегда ужасен. Каждое блюдо, которое они готовят, отвратительно.",
    bTypeGeneralization: "Обобщение",
    bTypeEmotional: "Эмоциональный призыв",
    bTypeExtreme: "Экстремальный язык",
    bFeedbackCorrect: "Правильно! Вы определили предвзятость.",
    bFeedbackWrong: "Неверно. Попробуйте еще раз!",

    // =========================================
    // SCENARIO PICKER (5 Questions)
    // =========================================
    spInstruction: "Определите невысказанное предположение за аргументом.",
    spStatement1: "Городу необходимо больше инвестировать в общественные библиотеки.",
    spA1: "Граждане действительно пользуются общественными библиотеками.",
    spB1: "Библиотеки — это единственное, что финансирует город.",
    spC1: "У города нет финансовых проблем.",
    spCorrect1: "spA1",
    spStatement2: "Школы должны ввести обязательные уроки финансовой грамотности.",
    spA2: "У студентов недостаточно финансовых навыков.",
    spB2: "Родители не могут преподавать финансовые уроки.",
    spC2: "Уроки математики бесполезны.",
    spCorrect2: "spA2",
    spStatement3: "Городу следует финансировать больше велосипедных дорожек.",
    spA3: "Люди будут пользоваться велосипедами, если будет инфраструктура.",
    spB3: "Машины запрещены.",
    spC3: "Ходьба непопулярна.",
    spCorrect3: "spA3",
    spStatement4: "Подросткам не следует работать неполный рабочий день.",
    spA4: "Подработка негативно влияет на успеваемость.",
    spB4: "Подростки безответственны.",
    spC4: "Семьям не нужен дополнительный доход.",
    spCorrect4: "spA4",
    spStatement5: "Городу следует инвестировать в больше спортивных сооружений.",
    spA5: "Участие в спорте приносит пользу обществу.",
    spB5: "Каждый гражданин занимается спортом.",
    spC5: "Развлечения не важны.",
    spCorrect5: "spA5",
    spFeedbackCorrect: "Правильно! Вы определили предположение.",
    spFeedbackWrong: "Неверно. Попробуйте еще раз!",

    // =========================================
    // STAKEHOLDER MATCH (5 Questions)
    // =========================================
    sInstruction: "Кто из заинтересованных сторон пострадает БОЛЬШЕ всего?",
    sQ1: "Город повышает тарифы на автобусы на 40%. Кто пострадает больше всего?",
    sQ1A: "Малообеспеченные работники, которые ежедневно пользуются автобусами.",
    sQ1B: "Туристы, посещающие город раз в год.",
    sQ1C: "Люди, работающие из дома.",
    sQ1Correct: "sQ1A",
    sQ2: "Открывается новый торговый центр. Кто получает больше всего выгоды?",
    sQ2A: "Местные владельцы бизнеса.",
    sQ2B: "Студенты поблизости, ищущие подработку.",
    sQ2C: "Пенсионеры, живущие далеко.",
    sQ2Correct: "sQ2B",
    sQ3: "Шумный завод расширяет производство.",
    sQ3A: "Жители близлежащих домов.",
    sQ3B: "Акционеры завода.",
    sQ3C: "Люди, живущие в другом городе.",
    sQ3Correct: "sQ3A",
    sQ4: "Цены на интернет снижаются на 50%. Кто получает больше всего выгоды?",
    sQ4A: "Студенты онлайн-университетов.",
    sQ4B: "Люди, которые не пользуются интернетом.",
    sQ4C: "Туристы.",
    sQ4Correct: "sQ4A",
    sQ5: "В сельской местности открывается новая больница.",
    sQ5A: "Местные жители с ограниченным доступом к медицинскому обслуживанию.",
    sQ5B: "Врачи, живущие в столице.",
    sQ5C: "Граждане другой страны.",
    sQ5Correct: "sQ5A",
    sFeedbackCorrect: "Правильно! Вы определили правильную заинтересованную сторону.",
    sFeedbackWrong: "Неверно. Подумайте, кто пострадает больше всего.",

    // =========================================
    // TRUE/FALSE QUIZ (5 Questions)
    // =========================================
    tfInstruction: "Оба утверждения фактически верны, даже если они противоречат друг другу?",
    tfA1: "Новый аэропорт способствует туризму и местной прибыли.",
    tfB1: "Новый аэропорт увеличивает шумовое загрязнение.",
    tfAns1: true,
    tfA2: "Завод создает тысячи рабочих мест.",
    tfB2: "Тот же завод увеличивает загрязнение воздуха.",
    tfAns2: true,
    tfA3: "Запрет пластиковых пакетов сокращает отходы.",
    tfB3: "Запрет пластиковых пакетов создает неудобства для покупателей.",
    tfAns3: true,
    tfA4: "Общественный парк предоставляет возможности для отдыха.",
    tfB4: "Тот же парк увеличивает затраты города на обслуживание.",
    tfAns4: true,
    tfA5: "Онлайн-обучение увеличивает гибкость.",
    tfB5: "Онлайн-обучение сокращает личное социальное взаимодействие.",
    tfAns5: true,
    tfOptionTrue: "ВЕРНО (они затрагивают разные последствия)",
    tfOptionFalse: "НЕВЕРНО (только одно может быть верным)",
    tfFeedbackCorrect: "Правильно! Оба утверждения могут быть верными, если они затрагивают разные последствия.",
    tfFeedbackWrong: "Неверно. Подумайте, как разные последствия могут сосуществовать.",
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
