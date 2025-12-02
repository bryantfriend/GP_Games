// js/games.js
"use strict";

// ======================================================
// GLOBAL GAME STATE & SCORE
// ======================================================
let activeGame = "flashcard";
let flashIndex = 0;
let biasIndex = 0;
let scenarioIndex = 0;
let stakeIndex = 0;
let tfIndex = 0;

const score = {
  total: 0,
  correct: 0,
  incorrect: 0,
  streak: 0,
  bestStreak: 0
};

const answeredQuestions = {};

const gameContainer = document.getElementById("game-container");
const gameFeedback = document.getElementById("game-feedback");
const gameNavControls = document.getElementById("game-nav-controls");
const scoreEl = document.getElementById("game-score");
const correctEl = document.getElementById("game-correct");
const incorrectEl = document.getElementById("game-incorrect");
const streakEl = document.getElementById("game-streak");
const bestStreakEl = document.getElementById("game-best-streak");
const soundCorrect = document.getElementById("sound-correct");
const soundIncorrect = document.getElementById("sound-incorrect");

// Completely mute sounds to avoid NotSupportedError in some browsers
if (soundCorrect) soundCorrect.play = () => {};
if (soundIncorrect) soundIncorrect.play = () => {};

const BTN_PRIMARY_CLASSES =
  "px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition";
const BTN_SECONDARY_CLASSES =
  "px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition";
const MCQ_OPTION_CLASSES =
  "px-4 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition shadow-sm text-left w-full font-medium";
const MCQ_CORRECT_CLASSES =
  "bg-green-500 border-green-700 text-white shadow-lg";
const MCQ_WRONG_CLASSES =
  "bg-red-500 border-red-700 text-white shadow-lg";

const MCQ_SELECT_CLASS = "mcq-btn-selector";

// Track per-game completion so students (and you) can see progress
const gameCompletion = {
  flashcard: false,
  bias: false,
  scenariopicker: false,
  stakeholder: false,
  truefalse: false
};

// ======================================================
// HELPERS: COMPLETION + SCOREBOARD
// ======================================================
const markGameCompleted = gameName => {
  if (!gameCompletion[gameName]) {
    gameCompletion[gameName] = true;
    updateGameTabs();
  }
};

const updateScoreboard = () => {
  if (scoreEl) scoreEl.textContent = score.total;
  if (correctEl) correctEl.textContent = score.correct;
  if (incorrectEl) incorrectEl.textContent = score.incorrect;

  if (streakEl) {
    let emoji = "";
    if (score.streak >= 5) emoji = " 🔥";
    else if (score.streak >= 3) emoji = " ⭐";
    streakEl.textContent = `${score.streak}${emoji}`;
  }

  if (bestStreakEl) {
    bestStreakEl.textContent = score.bestStreak;
  }
};

const updateCompletionFromQuestionKey = questionKey => {
  if (!questionKey) return;
  const [gameName] = questionKey.split("-");
  const data = gameData[gameName];
  if (!data || !Array.isArray(data.questions)) return;

  for (let i = 0; i < data.questions.length; i++) {
    if (!answeredQuestions[`${gameName}-${i}`]) {
      return; // not finished yet
    }
  }
  markGameCompleted(gameName);
};

const handleScore = (isCorrect, questionKey) => {
  if (!questionKey) return;
  if (answeredQuestions[questionKey]) return;

  if (isCorrect) {
    score.total += 10;
    score.correct += 1;
    score.streak += 1;
    if (score.streak > score.bestStreak) score.bestStreak = score.streak;
    if (soundCorrect) soundCorrect.play();
  } else {
    score.total -= 5;
    score.incorrect += 1;
    score.streak = 0;
    if (soundIncorrect) soundIncorrect.play();
  }

  answeredQuestions[questionKey] = true;
  updateScoreboard();
  updateCompletionFromQuestionKey(questionKey);
};

// ======================================================
// UI HELPERS
// ======================================================
const updateGameTabs = () => {
  document.querySelectorAll(".game-tab").forEach(btn => {
    const game = btn.getAttribute("data-game");
    if (!game) return;

    // Base classes
    btn.classList.remove(
      "text-indigo-700",
      "border-indigo-600",
      "bg-white",
      "shadow-inner",
      "active"
    );

    if (game === activeGame) {
      btn.classList.add(
        "active",
        "text-indigo-700",
        "border-indigo-600",
        "bg-white",
        "shadow-inner"
      );
    }

    // Add a simple ✅ marker for completed games
    const baseLabel = btn.getAttribute("data-label") || btn.textContent.trim();
    btn.setAttribute("data-label", baseLabel);

    if (gameCompletion[game]) {
      if (!baseLabel.endsWith("✅")) {
        btn.textContent = `${baseLabel} ✅`;
      }
    } else {
      btn.textContent = baseLabel;
    }
  });
};

const showFeedback = (message, isCorrect = null) => {
  if (!gameFeedback) return;

  gameFeedback.textContent = message;
  gameFeedback.classList.remove(
    "hidden",
    "bg-green-100",
    "text-green-800",
    "bg-red-100",
    "text-red-800"
  );

  if (isCorrect === true) {
    gameFeedback.classList.add("bg-green-100", "text-green-800");
  } else if (isCorrect === false) {
    gameFeedback.classList.add("bg-red-100", "text-red-800");
  }
};

const resetGameUI = () => {
  if (gameFeedback) {
    gameFeedback.classList.add("hidden");
    gameFeedback.textContent = "";
    gameFeedback.classList.remove(
      "bg-green-100",
      "text-green-800",
      "bg-red-100",
      "text-red-800"
    );
  }

  document.querySelectorAll(`.${MCQ_SELECT_CLASS}`).forEach(btn => {
    btn.classList.remove(
      ...MCQ_CORRECT_CLASSES.split(" "),
      ...MCQ_WRONG_CLASSES.split(" "),
      "opacity-50",
      "pointer-events-none"
    );
  });
};

// ======================================================
// FLASHCARDS — key concepts for the whole exam
// ======================================================
const renderFlashcard = () => {
  resetGameUI();
  const cards = gameData.flashcard;
  const card = cards[flashIndex];
  if (!gameContainer || !card) return;

  // If they’ve reached the last card, mark this game as completed
  if (flashIndex === cards.length - 1) {
    markGameCompleted("flashcard");
  }

  gameContainer.innerHTML = `
    <div class="w-full max-w-md mx-auto text-center space-y-4">
      <div class="flex items-center justify-center text-lg font-semibold text-gray-700 mb-2">
        <i data-lucide="layers-3" class="w-5 h-5 text-indigo-500 mr-2"></i>
        Card ${flashIndex + 1} / ${cards.length}
      </div>
      <div id="flashcard-wrapper" class="quiz-card">
        <div class="card-inner">
          <div class="card-face card-front"><p>${card.front}</p></div>
          <div class="card-face card-back"><p>${card.back}</p></div>
        </div>
      </div>
      <p class="text-sm text-gray-500">Tap the card to flip it! 👆</p>
    </div>
  `;

  gameNavControls.innerHTML = `
    <button id="flash-prev" class="${BTN_SECONDARY_CLASSES} mr-2" ${flashIndex === 0 ? "disabled" : ""}>⬅️ Previous Card</button>
    <button id="flash-next" class="${BTN_PRIMARY_CLASSES}" ${flashIndex === cards.length - 1 ? "disabled" : ""}>Next Card ➡️</button>
  `;

  const flashWrapper = document.getElementById("flashcard-wrapper");
  if (flashWrapper) {
    flashWrapper.addEventListener("click", () =>
      flashWrapper.classList.toggle("is-flipped")
    );
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  document.getElementById("flash-prev")?.addEventListener("click", () => {
    if (flashIndex > 0) {
      flashIndex--;
      renderFlashcard();
    }
  });

  document.getElementById("flash-next")?.addEventListener("click", () => {
    if (flashIndex < cards.length - 1) {
      flashIndex++;
      renderFlashcard();
    }
  });
};

// ======================================================
// GENERIC MCQ ENGINE (used for bias, assumptions, stakeholders)
// ======================================================
const setupMcqGame = (data, indexRef, renderer) => {
  resetGameUI();

  const q = data.questions[indexRef.value];
  if (!q || !gameContainer) return;

  const gameType = activeGame;
  const icon =
    gameType === "bias"
      ? "type"
      : gameType === "scenariopicker"
      ? "lightbulb"
      : gameType === "stakeholder"
      ? "users"
      : "help-circle";

  const optionsHtml = q.options
    .map(
      (opt, idx) => `
      <button
        class="mcq-option ${MCQ_OPTION_CLASSES} ${MCQ_SELECT_CLASS}"
        data-opt-idx="${idx}"
        data-game-type="${gameType}-${indexRef.value}">
        ${opt}
      </button>
    `
    )
    .join("");

  const primaryText = q.statement || q.instruction || "";
  const subtitle =
    q.subtitle ||
    (gameType === "bias"
      ? "Choose the sentence that is most neutral or best identifies the bias."
      : gameType === "scenariopicker"
      ? "Choose the best explanation or assumption."
      : "Choose the stakeholder / perspective that best fits the scenario.");

  gameContainer.innerHTML = `
    <div class="w-full max-w-xl mx-auto space-y-4 text-center">
      <div class="flex items-center justify-center text-lg font-semibold text-gray-700 mb-2">
        <i data-lucide="${icon}" class="w-5 h-5 text-indigo-500 mr-2"></i>
        Question ${indexRef.value + 1} / ${data.questions.length}
      </div>
      <p class="text-sm text-gray-600">${subtitle}</p>
      <div class="rounded-2xl bg-indigo-50 border border-indigo-200 p-5 font-bold text-gray-800 text-left shadow-inner">
        ${primaryText}
      </div>
      <div class="space-y-3 mt-4">${optionsHtml}</div>
    </div>
  `;

  gameNavControls.innerHTML = `
    <button id="${gameType}-prev" class="${BTN_SECONDARY_CLASSES} mr-2" ${indexRef.value === 0 ? "disabled" : ""}>⬅️ Previous</button>
    <button id="${gameType}-next" class="${BTN_PRIMARY_CLASSES}" ${indexRef.value === data.questions.length - 1 ? "disabled" : ""}>Next ➡️</button>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Handle option click
  document.querySelectorAll(`.${MCQ_SELECT_CLASS}`).forEach(btn => {
    btn.addEventListener("click", e => {
      const currentBtn = e.currentTarget;
      if (currentBtn.classList.contains("pointer-events-none")) return;

      const idx = Number(currentBtn.getAttribute("data-opt-idx"));
      const correct = idx === q.correctIndex;
      const questionKey = currentBtn.getAttribute("data-game-type");

      handleScore(correct, questionKey);

      currentBtn.classList.add(
        ...(correct ? MCQ_CORRECT_CLASSES.split(" ") : MCQ_WRONG_CLASSES.split(" "))
      );

      if (!correct) {
        const correctBtn = document.querySelector(
          `[data-game-type="${questionKey}"][data-opt-idx="${q.correctIndex}"]`
        );
        correctBtn?.classList.add(
          ...MCQ_CORRECT_CLASSES.split(" "),
          "opacity-50"
        );
      }

      showFeedback(
        correct ? q.feedbackCorrect : q.feedbackWrong,
        correct
      );

      document
        .querySelectorAll(`[data-game-type="${questionKey}"]`)
        .forEach(b => b.classList.add("pointer-events-none"));
    });
  });

  // Navigation
  const prevBtn = document.getElementById(`${gameType}-prev`);
  const nextBtn = document.getElementById(`${gameType}-next`);

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (indexRef.value > 0) {
        indexRef.set(indexRef.value - 1);
        renderer();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (indexRef.value < data.questions.length - 1) {
        indexRef.set(indexRef.value + 1);
        renderer();
      }
    });
  }
};

// ======================================================
// SPECIFIC MCQ RENDERERS (tied to exam sections)
// ======================================================
const biasRef = {
  value: biasIndex,
  set(v) {
    biasIndex = v;
    this.value = v;
  }
};
const scenarioRef = {
  value: scenarioIndex,
  set(v) {
    scenarioIndex = v;
    this.value = v;
  }
};
const stakeRef = {
  value: stakeIndex,
  set(v) {
    stakeIndex = v;
    this.value = v;
  }
};

function renderBias() {
  // Section A Q2 – recognising loaded language + neutral rewrite
  setupMcqGame(gameData.bias, biasRef, renderBias);
}

function renderScenarioPicker() {
  // Section C assumptions + “both can be true” style reasoning
  setupMcqGame(gameData.scenariopicker, scenarioRef, renderScenarioPicker);
}

function renderStakeholder() {
  // Section B – stakeholder perspectives & perspective map
  setupMcqGame(gameData.stakeholder, stakeRef, renderStakeholder);
}

// ======================================================
// TRUE/FALSE GAME – “Can both statements be true?”
// ======================================================
const renderTrueFalse = () => {
  resetGameUI();
  const data = gameData.truefalse;
  const q = data.questions[tfIndex];
  if (!q || !gameContainer) return;

  const questionKey = `truefalse-${tfIndex}`;

  gameContainer.innerHTML = `
    <div class="w-full max-w-xl mx-auto space-y-4 text-center">
      <div class="flex items-center justify-center text-lg font-semibold text-gray-700 mb-2">
        <i data-lucide="split" class="w-5 h-5 text-indigo-500 mr-2"></i>
        Question ${tfIndex + 1} / ${data.questions.length}
      </div>
      <p class="text-sm text-gray-600">${q.instruction}</p>

      <div class="rounded-2xl bg-indigo-50 border border-indigo-200 p-5 text-left space-y-3 font-bold text-gray-800 shadow-inner">
        <p><i data-lucide="corner-down-right" class="w-4 h-4 mr-2 text-indigo-600"></i> A: ${q.statementA}</p>
        <p><i data-lucide="corner-down-right" class="w-4 h-4 mr-2 text-indigo-600"></i> B: ${q.statementB}</p>
      </div>

      <div class="space-y-3 mt-4">
        <button id="tf-true" class="mcq-option ${MCQ_OPTION_CLASSES} ${MCQ_SELECT_CLASS}">
          <i data-lucide="check-circle" class="inline w-5 h-5 mr-2"></i>
          ${q.optionTrueText}
        </button>

        <button id="tf-false" class="mcq-option ${MCQ_OPTION_CLASSES} ${MCQ_SELECT_CLASS}">
          <i data-lucide="x-circle" class="inline w-5 h-5 mr-2"></i>
          ${q.optionFalseText}
        </button>
      </div>
    </div>
  `;

  gameNavControls.innerHTML = `
    <button id="tf-prev" class="${BTN_SECONDARY_CLASSES} mr-2" ${tfIndex === 0 ? "disabled" : ""}>⬅️ Previous</button>
    <button id="tf-next" class="${BTN_PRIMARY_CLASSES}" ${tfIndex === data.questions.length - 1 ? "disabled" : ""}>Next ➡️</button>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const trueBtn = document.getElementById("tf-true");
  const falseBtn = document.getElementById("tf-false");

  const handleAnswer = isTrue => {
    if (trueBtn.classList.contains("pointer-events-none")) return;

    const correct = isTrue === q.correctAnswer;
    const clicked = isTrue ? trueBtn : falseBtn;
    const other = isTrue ? falseBtn : trueBtn;

    handleScore(correct, questionKey);

    clicked.classList.add(
      ...(correct ? MCQ_CORRECT_CLASSES.split(" ") : MCQ_WRONG_CLASSES.split(" "))
    );
    other.classList.add("opacity-50");

    showFeedback(
      correct ? q.feedbackCorrect : q.feedbackWrong,
      correct
    );

    trueBtn.classList.add("pointer-events-none");
    falseBtn.classList.add("pointer-events-none");
  };

  trueBtn.addEventListener("click", () => handleAnswer(true));
  falseBtn.addEventListener("click", () => handleAnswer(false));

  document.getElementById("tf-prev")?.addEventListener("click", () => {
    if (tfIndex > 0) {
      tfIndex--;
      renderTrueFalse();
    }
  });

  document.getElementById("tf-next")?.addEventListener("click", () => {
    if (tfIndex < data.questions.length - 1) {
      tfIndex++;
      renderTrueFalse();
    } else {
      markGameCompleted("truefalse");
    }
  });
};

// ======================================================
// MAIN SWITCHER
// ======================================================
const showGame = gameName => {
  activeGame = gameName;
  updateGameTabs();
  document.body.dataset.game = gameName;

  switch (gameName) {
    case "flashcard":
      renderFlashcard();
      break;
    case "bias":
      renderBias();
      break;
    case "scenariopicker":
      renderScenarioPicker();
      break;
    case "stakeholder":
      renderStakeholder();
      break;
    case "truefalse":
      renderTrueFalse();
      break;
    default:
      renderFlashcard();
  }
};

const initGames = () => {
  document.querySelectorAll(".game-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const g = btn.getAttribute("data-game");
      if (g) showGame(g);
    });
  });

  updateScoreboard();
  updateGameTabs();
  showGame("flashcard");
};

window.showGame = showGame;
window.initGames = initGames;
