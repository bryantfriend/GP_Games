// ======================================================
// DATA.JS — 5 QUESTIONS PER GAME (MATCHING i18n)
// ======================================================

const gameData = {

    /* ======================================================
       FLASHCARD QUIZ
    ====================================================== */
    flashcard: [
        { frontKey: "flashQ1_front", backKey: "flashQ1_back" },
        { frontKey: "flashQ2_front", backKey: "flashQ2_back" },
        { frontKey: "flashQ3_front", backKey: "flashQ3_back" },
        { frontKey: "flashQ4_front", backKey: "flashQ4_back" },
        { frontKey: "flashQ5_front", backKey: "flashQ5_back" }
    ],

    /* ======================================================
       BIAS DETECTOR — 5 QUESTIONS
    ====================================================== */
    bias: {
        currentStatement: 0,
        questions: [
            {
                statementKey: "biasQ1_statement",
                correctKey: "biasQ1_correct",
                incorrectKeys: ["biasQ1_wrong1", "biasQ1_wrong2"],
                correctMsgKey: "biasQ1_feedbackCorrect",
                wrongMsgKey: "biasQ1_feedbackWrong"
            },
            {
                statementKey: "biasQ2_statement",
                correctKey: "biasQ2_correct",
                incorrectKeys: ["biasQ2_wrong1", "biasQ2_wrong2"],
                correctMsgKey: "biasQ2_feedbackCorrect",
                wrongMsgKey: "biasQ2_feedbackWrong"
            },
            {
                statementKey: "biasQ3_statement",
                correctKey: "biasQ3_correct",
                incorrectKeys: ["biasQ3_wrong1", "biasQ3_wrong2"],
                correctMsgKey: "biasQ3_feedbackCorrect",
                wrongMsgKey: "biasQ3_feedbackWrong"
            },
            {
                statementKey: "biasQ4_statement",
                correctKey: "biasQ4_correct",
                incorrectKeys: ["biasQ4_wrong1", "biasQ4_wrong2"],
                correctMsgKey: "biasQ4_feedbackCorrect",
                wrongMsgKey: "biasQ4_feedbackWrong"
            },
            {
                statementKey: "biasQ5_statement",
                correctKey: "biasQ5_correct",
                incorrectKeys: ["biasQ5_wrong1", "biasQ5_wrong2"],
                correctMsgKey: "biasQ5_feedbackCorrect",
                wrongMsgKey: "biasQ5_feedbackWrong"
            }
        ]
    },

    /* ======================================================
       SCENARIO PICKER — 5 QUESTIONS
    ====================================================== */
    scenariopicker: {
        currentQuestion: 0,
        questions: [
            {
                instructionKey: "spQ1_instruction",
                optionsKeys: ["spQ1_opt1", "spQ1_opt2", "spQ1_opt3"],
                correctIndex: 0,
                correctMsgKey: "spQ1_feedbackCorrect",
                wrongMsgKey: "spQ1_feedbackWrong"
            },
            {
                instructionKey: "spQ2_instruction",
                optionsKeys: ["spQ2_opt1", "spQ2_opt2", "spQ2_opt3"],
                correctIndex: 0,
                correctMsgKey: "spQ2_feedbackCorrect",
                wrongMsgKey: "spQ2_feedbackWrong"
            },
            {
                instructionKey: "spQ3_instruction",
                optionsKeys: ["spQ3_opt1", "spQ3_opt2", "spQ3_opt3"],
                correctIndex: 0,
                correctMsgKey: "spQ3_feedbackCorrect",
                wrongMsgKey: "spQ3_feedbackWrong"
            },
            {
                instructionKey: "spQ4_instruction",
                optionsKeys: ["spQ4_opt1", "spQ4_opt2", "spQ4_opt3"],
                correctIndex: 0,
                correctMsgKey: "spQ4_feedbackCorrect",
                wrongMsgKey: "spQ4_feedbackWrong"
            },
            {
                instructionKey: "spQ5_instruction",
                optionsKeys: ["spQ5_opt1", "spQ5_opt2", "spQ5_opt3"],
                correctIndex: 0,
                correctMsgKey: "spQ5_feedbackCorrect",
                wrongMsgKey: "spQ5_feedbackWrong"
            }
        ]
    },

    /* ======================================================
       STAKEHOLDER MATCH — 5 QUESTIONS
    ====================================================== */
    stakeholder: {
        currentQuestion: 0,
        questions: [
            {
                instructionKey: "shQ1_instruction",
                optionsKeys: ["shQ1_opt1", "shQ1_opt2", "shQ1_opt3"],
                correctIndex: 0,
                correctMsgKey: "shQ1_feedbackCorrect",
                wrongMsgKey: "shQ1_feedbackWrong"
            },
            {
                instructionKey: "shQ2_instruction",
                optionsKeys: ["shQ2_opt1", "shQ2_opt2", "shQ2_opt3"],
                correctIndex: 1,
                correctMsgKey: "shQ2_feedbackCorrect",
                wrongMsgKey: "shQ2_feedbackWrong"
            },
            {
                instructionKey: "shQ3_instruction",
                optionsKeys: ["shQ3_opt1", "shQ3_opt2", "shQ3_opt3"],
                correctIndex: 0,
                correctMsgKey: "shQ3_feedbackCorrect",
                wrongMsgKey: "shQ3_feedbackWrong"
            },
            {
                instructionKey: "shQ4_instruction",
                optionsKeys: ["shQ4_opt1", "shQ4_opt2", "shQ4_opt3"],
                correctIndex: 0,
                correctMsgKey: "shQ4_feedbackCorrect",
                wrongMsgKey: "shQ4_feedbackWrong"
            },
            {
                instructionKey: "shQ5_instruction",
                optionsKeys: ["shQ5_opt1", "shQ5_opt2", "shQ5_opt3"],
                correctIndex: 0,
                correctMsgKey: "shQ5_feedbackCorrect",
                wrongMsgKey: "shQ5_feedbackWrong"
            }
        ]
    },

    /* ======================================================
       TRUE / FALSE — 5 QUESTIONS
    ====================================================== */
    truefalse: {
        currentQuestion: 0,
        questions: [
            {
                instructionKey: "tfQ1_instruction",
                statementAKey: "tfQ1_A",
                statementBKey: "tfQ1_B",
                optionTrueKey: "tfOptionTrue",
                optionFalseKey: "tfOptionFalse",
                correctAnswer: true,
                correctMsgKey: "tfQ1_feedbackCorrect",
                wrongMsgKey: "tfQ1_feedbackWrong"
            },
            {
                instructionKey: "tfQ2_instruction",
                statementAKey: "tfQ2_A",
                statementBKey: "tfQ2_B",
                optionTrueKey: "tfOptionTrue",
                optionFalseKey: "tfOptionFalse",
                correctAnswer: true,
                correctMsgKey: "tfQ2_feedbackCorrect",
                wrongMsgKey: "tfQ2_feedbackWrong"
            },
            {
                instructionKey: "tfQ3_instruction",
                statementAKey: "tfQ3_A",
                statementBKey: "tfQ3_B",
                optionTrueKey: "tfOptionTrue",
                optionFalseKey: "tfOptionFalse",
                correctAnswer: true,
                correctMsgKey: "tfQ3_feedbackCorrect",
                wrongMsgKey: "tfQ3_feedbackWrong"
            },
            {
                instructionKey: "tfQ4_instruction",
                statementAKey: "tfQ4_A",
                statementBKey: "tfQ4_B",
                optionTrueKey: "tfOptionTrue",
                optionFalseKey: "tfOptionFalse",
                correctAnswer: true,
                correctMsgKey: "tfQ4_feedbackCorrect",
                wrongMsgKey: "tfQ4_feedbackWrong"
            },
            {
                instructionKey: "tfQ5_instruction",
                statementAKey: "tfQ5_A",
                statementBKey: "tfQ5_B",
                optionTrueKey: "tfOptionTrue",
                optionFalseKey: "tfOptionFalse",
                correctAnswer: true,
                correctMsgKey: "tfQ5_feedbackCorrect",
                wrongMsgKey: "tfQ5_feedbackWrong"
            }
        ]
    }
};

