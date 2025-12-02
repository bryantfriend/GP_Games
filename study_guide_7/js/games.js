// ======================================================
// FEEDBACK
// ======================================================
function showFeedback(messageKey, isCorrect, hintKey = null) {
    const baseText = t(messageKey);
    const hintText = hintKey ? " " + t(hintKey) : "";

    gameFeedback.textContent = baseText + hintText;
    gameFeedback.className =
        `text-center mt-4 p-3 rounded-lg font-semibold text-sm sm:text-base text-white transition duration-300 
         ${isCorrect ? "bg-emerald-500" : "bg-red-500"}`;
    gameFeedback.style.display = "block";

    gameNavControls.innerHTML = "";

    // Don't auto-hide "Quiz Complete" messages
    if (!messageKey.toLowerCase().includes("quizcomplete")) {
        setTimeout(() => {
            gameFeedback.style.display = "none";
        }, 3000);
    }
}


// ======================================================
// SWITCH GAME
// ======================================================
function showGame(gameId) {
    activeGame = gameId;

    // highlight tab
    document.querySelectorAll(".game-tab").forEach(tab => {
        tab.classList.toggle("active", tab.getAttribute("data-game") === gameId);
    });

    gameFeedback.style.display = "none";
    gameNavControls.innerHTML = "";
    gameContainer.innerHTML = "";

    // reset indices when switching games
    if (gameId === "flashcard") currentQuizIndex = 0;
    if (gameId === "bias") gameData.bias.currentStatement = 0;
    if (gameId === "scenariopicker") gameData.scenariopicker.currentQuestion = 0;
    if (gameId === "stakeholder") gameData.stakeholder.currentQuestion = 0;
    if (gameId === "truefalse") gameData.truefalse.currentQuestion = 0;

    switch (gameId) {
        case "flashcard":       renderFlashcard();        break;
        case "bias":            renderBiasDetector();     break;
        case "scenariopicker":  renderScenarioPicker();   break;
        case "stakeholder":     renderStakeholderMatch(); break;
        case "truefalse":       renderTrueFalseQuiz();    break;
    }
}


// ======================================================
// GAME 1 – FLASHCARDS
// ======================================================
function renderFlashcard() {
    if (!gameData.flashcard || gameData.flashcard.length === 0) return;

    currentQuizIndex = currentQuizIndex % gameData.flashcard.length;
    const card = gameData.flashcard[currentQuizIndex];

    gameContainer.innerHTML = `
        <div class="flex flex-col items-center space-y-4 w-full">
            <div class="flex justify-between w-full max-w-lg mb-4">
                <span id="card-counter" class="text-lg font-medium text-indigo-700"></span>
                <button id="next-button"
                        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md flex items-center"
                        onclick="nextCard()"></button>
            </div>

            <div id="quiz-container" class="w-full quiz-card" onclick="flipCard()">
                <div id="flashcard" class="card-inner shadow-xl">
                    <div class="card-face card-front flex-col">
                        <span class="text-xs text-gray-500 mb-2">${t("qTerm")}</span>
                        <p id="card-front-text"
                           class="text-lg sm:text-xl font-bold text-gray-900 p-2">
                           ${t(card.frontKey)}
                        </p>
                        <span class="text-sm mt-4 text-indigo-500">${t("qClick")}</span>
                    </div>

                    <div class="card-face card-back flex-col">
                        <span class="text-xs font-semibold uppercase opacity-80 mb-2">
                            ${t("qAnswer")}
                        </span>
                        <p id="card-back-text"
                           class="text-lg sm:text-xl font-light p-2">
                           ${t(card.backKey)}
                        </p>
                        <i data-lucide="rotate-ccw" class="w-5 h-5 mt-4 opacity-70"></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    lucide.createIcons();
    updateCardCounter();
    updateNextButtonState();
}

function flipCard() {
    document.getElementById("quiz-container").classList.toggle("is-flipped");
}

function nextCard() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.classList.remove("is-flipped");

    setTimeout(() => {
        currentQuizIndex = (currentQuizIndex + 1) % gameData.flashcard.length;
        const card = gameData.flashcard[currentQuizIndex];

        document.getElementById("card-front-text").innerHTML = t(card.frontKey);
        document.getElementById("card-back-text").innerHTML = t(card.backKey);

        updateCardCounter();
        updateNextButtonState();
    }, 300);
}

function updateCardCounter() {
    document.getElementById("card-counter").textContent =
        `Card ${currentQuizIndex + 1} / ${gameData.flashcard.length}`;
}

function updateNextButtonState() {
    const nextButton = document.getElementById("next-button");
    if (!nextButton) return;

    if (currentQuizIndex === gameData.flashcard.length - 1) {
        nextButton.innerHTML =
            `<span>${t("qRestart")}</span>
             <i data-lucide="rotate-ccw" class="w-5 h-5 text-white ml-1"></i>`;
    } else {
        nextButton.innerHTML =
            `<span>${t("qNext")}</span>
             <i data-lucide="arrow-right" class="w-5 h-5 text-white ml-1"></i>`;
    }

    lucide.createIcons();
}


// ======================================================
// GAME 2 – BIAS DETECTOR (MULTI-QUESTION)
// ======================================================
function renderBiasDetector() {
    const data = gameData.bias;
    const idx  = data.currentStatement;
    const q    = data.questions[idx];

    const options = [
        { key: q.correctKey, value: t(q.correctKey) },
        ...q.incorrectKeys.map(k => ({ key: k, value: t(k) }))
    ].sort(() => Math.random() - 0.5);

    const optionsHTML = options
        .map(
            opt => `
            <button class="mcq-option bias-option"
                    onclick="checkMCQ(this, '${opt.key}', '${q.correctKey}', '${q.correctMsgKey}', '${q.wrongMsgKey}', 'bias')">
                ${opt.value}
            </button>`
        )
        .join("");

    gameContainer.innerHTML = `
        <div class="w-full max-w-lg space-y-4">
            <p class="text-center text-gray-600 font-medium">
                ${t("qLabelQuestion") || "Question"} ${idx + 1} / ${data.questions.length}
            </p>

            <p class="text-center text-gray-600">${t("bInstruction")}</p>

            <div class="p-4 bg-indigo-100 border-l-4 border-indigo-500 rounded-lg text-lg text-gray-800 text-center font-semibold">
                ${t(q.statementKey)}
            </div>

            <div class="flex flex-col space-y-3">
                ${optionsHTML}
            </div>
        </div>
    `;

    gameNavControls.innerHTML = "";
}

function nextBiasQuestion() {
    const data = gameData.bias;
    data.currentStatement = (data.currentStatement + 1) % data.questions.length;
    gameNavControls.innerHTML = "";
    renderBiasDetector();
}

function restartBiasQuiz() {
    gameData.bias.currentStatement = 0;
    gameNavControls.innerHTML = "";
    renderBiasDetector();
}


// ======================================================
// GAME 3 – SCENARIO PICKER (MULTI-QUESTION)
// ======================================================
function renderScenarioPicker() {
    const data = gameData.scenariopicker;
    const idx  = data.currentQuestion;
    const q    = data.questions[idx];

    const options = q.optionsKeys
        .map((key, index) => ({ index, value: t(key) }))
        .sort(() => Math.random() - 0.5);

    const html = options
        .map(
            o => `
            <button class="mcq-option scenariopicker-option"
                    onclick="checkMCQ(this, ${o.index}, ${q.correctIndex}, '${q.correctMsgKey}', '${q.wrongMsgKey}', 'scenariopicker')">
                ${o.value}
            </button>`
        )
        .join("");

    gameContainer.innerHTML = `
        <div class="w-full max-w-lg space-y-4">
            <p class="text-center text-gray-600 font-medium">
                ${t("qLabelQuestion") || "Question"} ${idx + 1} / ${data.questions.length}
            </p>

            <p class="text-center text-gray-600">${t(q.instructionKey)}</p>
            <div class="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
                ${t(q.instructionKey).split(". ")[0]}...
            </div>

            <div class="flex flex-col space-y-3 mt-4">${html}</div>
        </div>
    `;

    gameNavControls.innerHTML = "";
}

function nextScenarioQuestion() {
    const data = gameData.scenariopicker;
    data.currentQuestion = (data.currentQuestion + 1) % data.questions.length;
    gameNavControls.innerHTML = "";
    renderScenarioPicker();
}

function restartScenarioQuiz() {
    gameData.scenariopicker.currentQuestion = 0;
    gameNavControls.innerHTML = "";
    renderScenarioPicker();
}


// ======================================================
// GAME 4 – STAKEHOLDER MATCH (MULTI-QUESTION)
// ======================================================
function renderStakeholderMatch() {
    const data = gameData.stakeholder;
    const idx  = data.currentQuestion;
    const q    = data.questions[idx];

    const options = q.optionsKeys
        .map((key, index) => ({ index, value: t(key) }))
        .sort(() => Math.random() - 0.5);

    const html = options
        .map(
            o => `
            <button class="mcq-option stakeholder-option"
                    onclick="checkMCQ(this, ${o.index}, ${q.correctIndex}, '${q.correctMsgKey}', '${q.wrongMsgKey}', 'stakeholder')">
                ${o.value}
            </button>`
        )
        .join("");

    gameContainer.innerHTML = `
        <div class="w-full max-w-lg space-y-4">
            <p class="text-center text-gray-600 font-medium">
                ${t("qLabelQuestion") || "Question"} ${idx + 1} / ${data.questions.length}
            </p>
            <p class="text-center text-gray-600">${t(q.instructionKey)}</p>
            <div class="flex flex-col space-y-3">${html}</div>
        </div>
    `;

    gameNavControls.innerHTML = "";
}

function nextStakeholderQuestion() {
    const data = gameData.stakeholder;
    data.currentQuestion = (data.currentQuestion + 1) % data.questions.length;
    gameNavControls.innerHTML = "";
    renderStakeholderMatch();
}

function restartStakeholderQuiz() {
    gameData.stakeholder.currentQuestion = 0;
    gameNavControls.innerHTML = "";
    renderStakeholderMatch();
}


// ======================================================
// GAME 5 – TRUE/FALSE QUIZ (MULTI-QUESTION)
// ======================================================
function renderTrueFalseQuiz() {
    const data = gameData.truefalse;
    const idx  = data.currentQuestion;
    const q    = data.questions[idx];

    gameContainer.innerHTML = `
        <div class="w-full max-w-lg space-y-4">
            <p class="text-center text-gray-600 font-medium">
                ${t("qLabelQuestion") || "Question"} ${idx + 1} / ${data.questions.length}
            </p>

            <p class="text-center text-gray-600">${t(q.instructionKey)}</p>

            <div class="flex flex-col space-y-2 bg-gray-50 p-3 rounded-lg">
                <div class="font-bold text-gray-800">${t(q.statementAKey)}</div>
                <div class="font-bold text-gray-800">${t(q.statementBKey)}</div>
            </div>

            <div class="flex flex-col space-y-3 mt-4">

                <button class="mcq-option truefalse-option bg-green-500 text-white"
                    onclick="checkMCQ(this, true, ${q.correctAnswer}, '${q.correctMsgKey}', '${q.wrongMsgKey}', 'truefalse')">
                    ${t(q.optionTrueKey)}
                </button>

                <button class="mcq-option truefalse-option bg-red-500 text-white"
                    onclick="checkMCQ(this, false, ${q.correctAnswer}, '${q.correctMsgKey}', '${q.wrongMsgKey}', 'truefalse')">
                    ${t(q.optionFalseKey)}
                </button>

            </div>
        </div>
    `;

    gameNavControls.innerHTML = "";
}

function nextTrueFalseQuestion() {
    const data = gameData.truefalse;
    data.currentQuestion = (data.currentQuestion + 1) % data.questions.length;
    gameNavControls.innerHTML = "";
    renderTrueFalseQuiz();
}

function restartTrueFalseQuiz() {
    gameData.truefalse.currentQuestion = 0;
    gameNavControls.innerHTML = "";
    renderTrueFalseQuiz();
}


// ======================================================
// GENERIC MCQ CHECKER
// ======================================================
function checkMCQ(button, selected, correct, msgCorrect, msgWrong, gameId) {
    const buttons = document.querySelectorAll(`.${gameId}-option`);
    buttons.forEach(btn => (btn.disabled = true));

    gameNavControls.innerHTML = "";

    const isCorrect = selected === correct;

    if (isCorrect) {
        button.classList.remove("bg-white", "text-indigo-700");
        button.classList.add("bg-emerald-500", "text-white");

        showFeedback(msgCorrect, true);

        // Per-game navigation
        if (gameId === "bias") {
            const data  = gameData.bias;
            const total = data.questions.length;
            const idx   = data.currentStatement;

            if (idx < total - 1) {
                gameFeedback.style.display = "none";
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="nextBiasQuestion()">
                        ${t("qNext")} (${idx + 2}/${total})
                    </button>`;
            } else {
                gameFeedback.textContent = t("qQuizComplete");
                gameFeedback.classList.add("bg-emerald-500");
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="restartBiasQuiz()">
                        ${t("qRestart")}
                    </button>`;
            }

        } else if (gameId === "scenariopicker") {
            const data  = gameData.scenariopicker;
            const total = data.questions.length;
            const idx   = data.currentQuestion;

            if (idx < total - 1) {
                gameFeedback.style.display = "none";
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="nextScenarioQuestion()">
                        ${t("qNext")} (${idx + 2}/${total})
                    </button>`;
            } else {
                gameFeedback.textContent = t("qQuizComplete");
                gameFeedback.classList.add("bg-emerald-500");
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="restartScenarioQuiz()">
                        ${t("qRestart")}
                    </button>`;
            }

        } else if (gameId === "stakeholder") {
            const data  = gameData.stakeholder;
            const total = data.questions.length;
            const idx   = data.currentQuestion;

            if (idx < total - 1) {
                gameFeedback.style.display = "none";
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="nextStakeholderQuestion()">
                        ${t("qNext")} (${idx + 2}/${total})
                    </button>`;
            } else {
                gameFeedback.textContent = t("qQuizComplete");
                gameFeedback.classList.add("bg-emerald-500");
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="restartStakeholderQuiz()">
                        ${t("qRestart")}
                    </button>`;
            }

        } else if (gameId === "truefalse") {
            const data  = gameData.truefalse;
            const total = data.questions.length;
            const idx   = data.currentQuestion;

            if (idx < total - 1) {
                gameFeedback.style.display = "none";
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="nextTrueFalseQuestion()">
                        ${t("qNext")} (${idx + 2}/${total})
                    </button>`;
            } else {
                gameFeedback.textContent = t("qQuizComplete");
                gameFeedback.classList.add("bg-emerald-500");
                gameNavControls.innerHTML = `
                    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg mt-4"
                            onclick="restartTrueFalseQuiz()">
                        ${t("qRestart")}
                    </button>`;
            }

        } else {
            // fallback – not really used now
            setTimeout(() => showGame(gameId), 2500);
        }

    } else {
        button.classList.add("bg-red-500", "text-white");
        showFeedback(msgWrong, false, "hintTryAgain");

        setTimeout(() => {
            buttons.forEach(btn => (btn.disabled = false));
        }, 1500);
    }
}
