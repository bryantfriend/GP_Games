// js/main.js
"use strict";

const lessonSlides = window.lessonSlides;

// ======================================================
// LESSON SLIDESHOW LOGIC
// ======================================================
let currentLessonIndex = 0;

// DOM refs (populated on init)
let lessonSlideEl;
let lessonLabelEl;
let lessonProgressBarEl;
let lessonPrevBtn;
let lessonNextBtn;
let lessonTitleEl;

const cacheLessonDom = () => {
  lessonSlideEl = document.getElementById("lesson-slide");
  lessonLabelEl = document.getElementById("lesson-slide-label");
  lessonProgressBarEl = document.getElementById("lesson-progress-bar");
  lessonPrevBtn = document.getElementById("lesson-prev-btn");
  lessonNextBtn = document.getElementById("lesson-next-btn");
  lessonTitleEl = document.getElementById("lesson-top-title");
};

const renderLessonSlide = () => {
  if (!Array.isArray(window.lessonSlides) || !lessonSlides.length) return;
  if (!lessonSlideEl) return;

  const slide = lessonSlides[currentLessonIndex];
  if (!slide) return;

  const total = lessonSlides.length;
  const num = currentLessonIndex + 1;

  // Update top title
  if (lessonTitleEl) {
    lessonTitleEl.textContent = slide.title;
  }

  // Label: "Slide 1 / 4"
  if (lessonLabelEl) {
    lessonLabelEl.textContent = `Slide ${num} / ${total}`;
  }

  // Progress bar
  if (lessonProgressBarEl) {
    const pct = (num / total) * 100;
    lessonProgressBarEl.style.width = `${pct}%`;
  }

  // Build compact bullet row
  const compactBullets = slide.bullets
    .map(text => `<span class="whitespace-normal">• ${text}</span>`)
    .join('<span class="mx-3 text-indigo-400">|</span>');

  // Render slide body
  lessonSlideEl.innerHTML = `
    <div class="space-y-3 sm:space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-900">
          <span class="mr-2">${slide.emoji}</span>${slide.title}
        </h3>
        <span
          class="lesson-badge text-xs sm:text-sm px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          ${slide.badge}
        </span>
      </div>
      <div class="text-sm sm:text-base text-gray-800 leading-snug flex flex-wrap items-center">
        ${compactBullets}
      </div>
    </div>
  `;
};

const changeLessonSlide = direction => {
  if (!Array.isArray(window.lessonSlides) || !lessonSlides.length) return;

  const total = lessonSlides.length;
  const nextIndex = currentLessonIndex + direction;

  if (nextIndex < 0 || nextIndex >= total) return;
  currentLessonIndex = nextIndex;
  renderLessonSlide();

  // Enable/disable buttons based on new index
  if (lessonPrevBtn) {
    lessonPrevBtn.disabled = currentLessonIndex === 0;
  }
  if (lessonNextBtn) {
    lessonNextBtn.disabled = currentLessonIndex === total - 1;
  }
};

const initStudyGuide = () => {
  cacheLessonDom();
  if (!lessonSlideEl || !window.lessonSlides || !lessonSlides.length) return;

  // Initial button state + listeners
  if (lessonPrevBtn) {
    lessonPrevBtn.disabled = true;
    lessonPrevBtn.addEventListener("click", () => changeLessonSlide(-1));
  }
  if (lessonNextBtn) {
    lessonNextBtn.addEventListener("click", () => changeLessonSlide(1));
  }

  renderLessonSlide();
};

// (Optional) export in case you ever need these globally
window.renderLessonSlide = renderLessonSlide;

// ======================================================
// APP INITIALIZATION
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  // Study guide slides
  initStudyGuide();

  // Games (defined in games.js)
  if (typeof window.initGames === "function") {
    window.initGames();
  }

  // Create initial lucide icons
  if (window.lucide && typeof lucide.createIcons === "function") {
  lucide.createIcons();
}
});
