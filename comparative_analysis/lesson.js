// lesson.js

// Import the utility function
import { createTable } from './game.js'; 

/**
 * Renders the introductory lesson content as a navigable slideshow.
 * @param {HTMLElement} appContainer - The main container element.
 * @param {Array<Object>} slides - The array of lesson slide objects.
 * @param {number} currentIndex - The index of the slide to display.
 */
export function renderLesson(appContainer, slides, currentIndex) {
    const currentSlide = slides[currentIndex];
    const totalSlides = slides.length;

    let slideContent = currentSlide.content;

    // FIX: Check if the slide content is an object with table data
    if (typeof slideContent === 'object' && slideContent.tableData) {
        // 1. Generate the table HTML using the properly imported function
        const tableHtml = createTable(slideContent.tableData);
        
        // 2. Replace the placeholder in the text with the generated HTML
        slideContent = slideContent.text.replace('{{TABLE_PLACEHOLDER}}', tableHtml);
    }
    // If it's a simple string, it's used as is (e.g., Slides 1-7, 9-10)

    // Determine button states
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === totalSlides - 1;

    appContainer.innerHTML = `
        <div class="lesson-card bg-white p-6 md:p-10 rounded-xl shadow-2xl border-t-8 border-indigo-500">
            <div class="flex justify-between items-center mb-4 pb-2 border-b-2 border-gray-100">
                <h1 class="text-3xl md:text-4xl font-extrabold text-indigo-700 flex items-center">
                    <span class="mr-3">${currentSlide.emoji}</span> ${currentSlide.title}
                </h1>
                <span class="text-xl font-semibold text-gray-500">${currentIndex + 1} / ${totalSlides}</span>
            </div>
            
            <div class="min-h-[300px] p-6 rounded-lg ${currentSlide.style} border-l-6 transition duration-300">
                ${slideContent}
            </div>

            <div class="flex justify-between mt-8">
                <button 
                    onclick="window.navigateLesson(-1)" 
                    ${isFirstSlide ? 'disabled' : ''} 
                    class="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-gray-300 transition duration-150 ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : ''}"
                >
                    ⬅️ Previous Slide
                </button>

                <button 
                    onclick="${isLastSlide ? "window.setView('quiz')" : "window.navigateLesson(1)"}" 
                    class="btn-primary text-white font-extrabold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-200"
                >
                    ${isLastSlide ? "Ready for Challenge! 🏆" : "Next Slide ➡️"}
                </button>
            </div>
        </div>
    `;
}