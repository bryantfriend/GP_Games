// ======================================================
// GLOBAL STATE
// ======================================================
let activeGame = "flashcard";
let currentQuizIndex = 0;
let currentLessonIndex = 0; // for slideshow

// ======================================================
// DOM REFS
// ======================================================
const gameContainer   = document.getElementById("game-container");
const gameFeedback    = document.getElementById("game-feedback");
const gameNavControls = document.getElementById("game-nav-controls");

// Lesson DOM
const lessonSlideEl       = document.getElementById("lesson-slide");
const lessonLabelEl       = document.getElementById("lesson-slide-label");
const lessonProgressBarEl = document.getElementById("lesson-progress-bar");
const lessonPrevBtn       = document.getElementById("lesson-prev-btn");
const lessonNextBtn       = document.getElementById("lesson-next-btn");

function setLanguage(lang) {
    currentLanguage = lang;

    // translate every data-lang-key element
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.getAttribute("data-lang-key");
        el.textContent = t(key);
    });

    // re-render all games
    showGame(activeGame);

    // 🚀 FIX: always show slide 1 after switching languages
    currentLessonIndex = 0;
    renderLessonSlide();

    // Re-render Lucide icons
    lucide.createIcons();
}


// ======================================================
// LESSON SLIDE DATA
// (uses existing i18n keys: c1Title, c1p1, etc.)
// ======================================================
const lessonSlides = [
  {
    titleKey: "c1Title",
    emoji: "🔍",
    bulletKeys: ["c1p1", "c1Example"],
    badgeKey: null
  },
  {
    titleKey: "c2Title",
    emoji: "⚖️",
    bulletKeys: ["c2p1", "c2l1", "c2l2", "c2l3", "c2Biased", "c2Neutral"],
    badgeKey: null
  },
  {
    titleKey: "c3Title",
    emoji: "👥",
    bulletKeys: ["c3p1", "c3l1", "c3l1a", "c3l1b", "c3l1c"],
    badgeKey: null
  },
  {
    titleKey: "c4Title",
    emoji: "💡",
    bulletKeys: ["c4p1", "c4l1", "c4l2", "c4p2"],
    badgeKey: null
  }
];

function renderLessonSlide() {
  const slide = lessonSlides[currentLessonIndex];
  if (!slide || !lessonSlideEl) return;

  const total = lessonSlides.length;
  const num   = currentLessonIndex + 1;

  // Update top title bar
  const titleEl = document.getElementById("lesson-top-title");
  if (titleEl) titleEl.textContent = t(slide.titleKey);

  // Label: "Slide 1 / 4"
  if (lessonLabelEl) {
    lessonLabelEl.textContent =
      `${t("lessonSlideLabel")} ${num} / ${total}`;
  }

  // Progress bar
  if (lessonProgressBarEl) {
    const pct = ((num) / total) * 100;
    lessonProgressBarEl.style.width = `${pct}%`;
  }

  // Prev/Next enable/disable
  lessonPrevBtn.disabled = currentLessonIndex === 0;
  lessonNextBtn.disabled = currentLessonIndex === total - 1;

  // Build bullet content
  const bulletsHtml = slide.bulletKeys
    .map(key => `<li>${t(key)}</li>`)
    .join("");

  // Render slide body
  lessonSlideEl.innerHTML = `
    <div class="space-y-3 sm:space-y-4">
      <div class="flex items-center justify-between">
        <h3><span class="emoji">${slide.emoji}</span> ${t(slide.titleKey)}</h3>
        <span class="lesson-badge">GP Exam Prep</span>
      </div>
      <ul class="text-sm sm:text-base text-gray-800 leading-relaxed">
        ${bulletsHtml}
      </ul>
    </div>
  `;
}


// Navigation
function nextLessonSlide() {
  if (currentLessonIndex < lessonSlides.length - 1) {
    currentLessonIndex++;
    renderLessonSlide();
  }
}
function prevLessonSlide() {
  if (currentLessonIndex > 0) {
    currentLessonIndex--;
    renderLessonSlide();
  }
}

// Expose for inline onclick
window.nextLessonSlide = nextLessonSlide;
window.prevLessonSlide = prevLessonSlide;

// ======================================================
// APP INITIALIZATION
// ======================================================
window.onload = () => {
  // initial language set from selector value
  const langSel = document.getElementById("language-selector");
  const initialLang = langSel ? langSel.value : "en";
  setLanguage(initialLang);

  // in setLanguage we will re-render icons & games & lessons
};
