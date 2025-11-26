// quiz.js
import { createTable } from './game.js';

/**
 * Renders the current quiz question view.
 * @param {HTMLElement} appContainer - The main container element.
 * @param {Array} QUIZ_QUESTIONS - The array of question objects.
 * @param {number} questionIndex - The index of the current question.
 * @param {number} score - The current score.
 * @param {boolean} answered - Whether the user has answered this question (used to disable buttons initially if re-rendering).
 */
export function renderQuiz(appContainer, QUIZ_QUESTIONS, questionIndex, score, answered) {
    const currentQuestion = QUIZ_QUESTIONS[questionIndex];

    appContainer.innerHTML = `
        <div class="quiz-card bg-white p-6 md:p-10 rounded-xl shadow-lg border-t-8 border-green-500">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b-2 pb-2 border-green-200">
                <h1 class="text-2xl md:text-3xl font-bold text-green-700 mb-2 md:mb-0">
                    Challenge ${questionIndex + 1} of ${QUIZ_QUESTIONS.length}
                </h1>
                <span class="text-xl font-semibold text-gray-600">Score: ${score}</span>
            </div>

            <h2 class="text-xl md:text-2xl font-extrabold text-gray-800 mb-3">${currentQuestion.title}</h2>
            <p class="text-lg text-gray-700 mb-4 italic">${currentQuestion.description}</p>
            
            <div class="flex justify-center my-4">
                <img src="analysis_icon.jpg" alt="Comparative Analysis Icon" class="w-24 h-24 mobile-vector">
            </div>

            <div class="mb-6">
                ${createTable(currentQuestion.table)}
            </div>

            <p class="text-xl font-bold text-indigo-600 mb-4">${currentQuestion.question}</p>

            <div id="answer-options" class="space-y-3">
                ${currentQuestion.answers.map((answer, index) => `
                    <button
                        onclick="window.checkAnswer(this, ${answer.correct})"
                        class="btn-answer w-full text-left bg-indigo-100 text-indigo-800 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-150 ${answered ? 'opacity-60 cursor-not-allowed' : ''}"
                        data-correct="${answer.correct}"
                        id="answer-btn-${index}"
                        ${answered ? 'disabled' : ''}
                    >
                        ${answer.text}
                    </button>
                `).join('')}
            </div>

            <div id="feedback-area" class="mt-6 text-center text-lg font-bold min-h-[50px] flex items-center justify-center flex-col"></div>
            
        </div>
    `;
}