// result.js

/**
 * Renders the final result screen.
 * @param {HTMLElement} appContainer - The main container element.
 * @param {number} score - The final score.
 * @param {number} totalQuestions - The total number of questions.
 */
export function renderResult(appContainer, score, totalQuestions) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const message = percentage >= 70
        ? "Excellent! You are a Comparative Analysis Master! You know how to use data to make smart global decisions."
        : "Great effort! Review the lesson and remember Step 4: Always justify your decision by matching the data to the original criteria.";
    
    const color = percentage >= 70 ? 'text-green-600' : 'text-orange-600';
    const icon = percentage >= 70 ? '🎉' : '🤔';

    appContainer.innerHTML = `
        <div class="quiz-card bg-white p-6 md:p-10 rounded-xl shadow-lg text-center border-t-8 border-indigo-500">
            <div class="text-6xl mb-4">${icon}</div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-4">Challenge Complete!</h1>
            <p class="text-2xl font-semibold ${color} mb-6">Your Final Score: ${score} / ${totalQuestions}</p>
            <p class="text-xl text-gray-700 mb-8">${message}</p>

            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                <button onclick="window.resetGame()" class="btn-primary text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg">
                    Try the Quiz Again
                </button>
                <button onclick="window.setView('lesson')" class="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-gray-300">
                    Review the Lesson
                </button>
            </div>
        </div>
    `;
}