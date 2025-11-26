// app.js

// --- Imports from Modules ---
import { QUIZ_QUESTIONS } from './game.js'; 
import { renderLesson } from './lesson.js';
import { renderQuiz } from './quiz.js';     
import { renderResult } from './result.js'; 
import { LESSON_SLIDES } from './lesson_data.js';

// --- Game State and Data ---
let currentView = 'lesson'; 
let score = 0;
let questionIndex = 0;
let lessonIndex = 0; 
let answered = false; // Changed from canAdvance to 'answered' for clarity

const appContainer = document.getElementById('app');

// --- View Rendering Functions and Navigation (No change needed here) ---

function setView(view) {
    currentView = view;
    if (view === 'lesson') {
        renderLesson(appContainer, LESSON_SLIDES, lessonIndex);
    } else if (view === 'quiz') {
        // Pass 'answered' state to renderQuiz to disable buttons if needed
        renderQuiz(appContainer, QUIZ_QUESTIONS, questionIndex, score, answered);
    } else if (view === 'result') {
        renderResult(appContainer, score, QUIZ_QUESTIONS.length);
    }
}

function navigateLesson(direction) {
    lessonIndex += direction;
    if (lessonIndex < 0) {
        lessonIndex = 0;
    } else if (lessonIndex >= LESSON_SLIDES.length) {
        setView('quiz');
        return;
    }
    setView('lesson');
}

function advanceQuiz() {
    questionIndex++;
    answered = false; // Reset answered state for the new question
    if (questionIndex < QUIZ_QUESTIONS.length) {
        setView('quiz');
    } else {
        setView('result');
    }
}

// --- Game Logic ---

/**
 * Handles the answer click for the quiz.
 * UPDATED: Now performs DOM manipulation instead of re-rendering the whole component.
 * @param {HTMLElement} clickedButton - The button element that was clicked.
 * @param {boolean} isCorrect - Whether the answer is correct.
 */
function checkAnswer(clickedButton, isCorrect) {
    const feedbackArea = document.getElementById('feedback-area');
    const allButtons = document.querySelectorAll('.btn-answer');

    // Prevent double-clicking
    if (answered) return; 
    answered = true; // Set state to block further clicks

    // 1. Disable all buttons and update styles
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-indigo-200', 'focus:ring-indigo-300');
        btn.classList.add('opacity-60', 'cursor-not-allowed'); // Apply disabled style
    });

    // 2. Provide feedback (visuals and text)
    if (isCorrect) {
        score++;
        clickedButton.classList.remove('bg-indigo-100', 'text-indigo-800');
        clickedButton.classList.add('bg-green-500', 'text-white', 'shadow-xl');
        feedbackArea.innerHTML = '<span class="text-green-600">✅ Correct! You successfully used Comparative Analysis.</span>';
    } else {
        clickedButton.classList.remove('bg-indigo-100', 'text-indigo-800');
        clickedButton.classList.add('bg-red-500', 'text-white', 'shadow-xl');
        
        // Get detailed justification for incorrect answer
        const currentQuestion = QUIZ_QUESTIONS[questionIndex];
        feedbackArea.innerHTML = `
            <div class="text-red-600 font-extrabold text-xl">❌ Incorrect.</div>
            <div class="text-gray-700 mt-2 text-base px-2">${currentQuestion.justification}</div>
        `;

        // Highlight the correct answer
        const correctButton = Array.from(allButtons).find(btn => btn.getAttribute('data-correct') === 'true');
        if (correctButton) {
            correctButton.classList.remove('bg-indigo-100', 'text-indigo-800');
            correctButton.classList.add('bg-green-200', 'text-green-800', 'border-4', 'border-green-500', 'shadow-md');
        }
    }
    
    // 3. Dynamically inject the "Next Question" button below the feedback area
    const nextButtonHTML = `
        <button 
            onclick="window.advanceQuiz()"
            class="btn-primary w-full mt-6 text-white font-extrabold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-200 transform hover:scale-[1.01]"
        >
            ${questionIndex + 1 < QUIZ_QUESTIONS.length ? 'Continue to Next Challenge ➡️' : 'View Final Results 🎉'}
        </button>
    `;

    // Append the button to the feedback area
    feedbackArea.insertAdjacentHTML('beforeend', nextButtonHTML);
}

function resetGame() {
    score = 0;
    questionIndex = 0;
    lessonIndex = 0; 
    answered = false;
    setView('quiz');
}

// --- Global Export for Inline HTML Event Handlers ---
window.setView = setView;
window.checkAnswer = checkAnswer;
window.resetGame = resetGame;
window.navigateLesson = navigateLesson;
window.advanceQuiz = advanceQuiz; 


// --- Initialization ---
window.onload = () => {
    setView('lesson');
};