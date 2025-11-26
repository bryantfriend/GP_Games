// game.js

/**
 * Class representing a single comparative analysis quiz question.
 */
export class Question {
    /**
     * @param {string} title - The title of the question scenario.
     * @param {string} description - The criteria for making the comparison.
     * @param {Array<Array<string>>} table - The 2D array of comparative data.
     * @param {string} question - The specific question text.
     * @param {Array<{text: string, correct: boolean}>} answers - Array of answer objects.
     * @param {string} justification - Detailed explanation for the correct answer.
     */
    constructor(title, description, table, question, answers, justification) {
        this.title = title;
        this.description = description;
        this.table = table;
        this.question = question;
        this.answers = answers;
        this.justification = justification;
    }
}

// --- Question Data (OOP Instances) ---
export const QUIZ_QUESTIONS = [
    // ----------------------------------------------------------------------
    // EASY QUESTION 1: Winter Clothes (Bishkek Context)
    // ----------------------------------------------------------------------
    new Question(
        "1. Comparing Winter Clothes for School 🧥🧣",
        "You need a jacket for a cold walk to school when it's **-10°C**. Your main goals are **Maximum Warmth 🌡️** and **Lowest Cost 💰**.",
        [
            ["Criteria", "Thin Puffer Jacket", "Thick Down Coat"],
            ["Warmth 🌡️", "Moderate (good for 0°C to 5°C)", "Excellent (good for -15°C to -5°C)"],
            ["Cost 💰", "1,500 KGS", "5,000 KGS"],
            ["Weight", "Light", "Heavy"]
        ],
        "Which option best meets your primary needs (Maximum Warmth and Lowest Cost)?",
        [
            { text: "Thin Puffer Jacket (Lowest Cost)", correct: false },
            { text: "Thick Down Coat (Excellent Warmth)", correct: false },
            { text: "Neither; Maximum Warmth is prioritized, requiring the Down Coat despite the cost.", correct: true }
        ],
        "The correct choice is **Neither**—meaning the **Down Coat** is the necessary choice. The criteria were Maximum Warmth and Lowest Cost. Although the Puffer is cheaper, the Down Coat is the only option that provides the necessary warmth for -10°C (Excellent warmth). Since warmth is critical for winter safety, the Down Coat is the better choice."
    ),
    // ----------------------------------------------------------------------
    // EASY QUESTION 2: Choosing a Local Park
    // ----------------------------------------------------------------------
    new Question(
        "2. Choosing a Local Park for Relaxation 🌳🧘",
        "You want to find a park near the city center that is best for **Peace and Quiet 🤫** and has **Shady Trees 🌳**.",
        [
            ["Criteria", "Oak Park (Dubovy Park)", "Ala-Too Square"],
            ["Location", "Central", "Central"],
            ["Noise Level 🔊", "Low (Mainly local traffic)", "High (Crowds, traffic, events)"],
            ["Shade/Trees", "High (Dense ancient oaks)", "Low (Open space, fewer trees)"]
        ],
        "Based on the criteria (Peace & Quiet and Shady Trees), which location should you choose?",
        [
            { text: "Oak Park (Dubovy Park)", correct: true },
            { text: "Ala-Too Square", correct: false },
            { text: "Ala-Too Square because it's closer to museums", correct: false }
        ],
        "**Oak Park** is the best choice. It clearly satisfies both criteria with a **Low** noise level and **High** shade from dense trees. Ala-Too Square fails the Peace & Quiet criterion."
    ),
    // ----------------------------------------------------------------------
    // EASY QUESTION 3: Comparing Communication Tools
    // ----------------------------------------------------------------------
    new Question(
        "3. Comparing Communication Tools 📲💬",
        "Your grandmother in a village needs to call you. You need the most **Reliable Connection 📶** and the **Lowest Data Use 💸** method.",
        [
            ["Criteria", "WhatsApp Call", "Standard Mobile Call"],
            ["Connection Reliability", "Requires stable 4G/WiFi (often patchy)", "Works on basic 2G network (Highly reliable)"],
            ["Data Use 📶", "High (Video/Audio)", "None (Uses phone minutes/balance)"],
            ["Cost", "Free (with data)", "Depends on minutes/balance"]
        ],
        "Which communication tool should your grandmother use based on Reliability and Low Data Use?",
        [
            { text: "WhatsApp Call", correct: false },
            { text: "Standard Mobile Call", correct: true },
            { text: "WhatsApp because it's popular", correct: false }
        ],
        "The **Standard Mobile Call** is superior. It meets the **Lowest Data Use** (None) and **Reliable Connection** (works on basic network) criteria, which are essential when data service is unstable."
    ),
    // ----------------------------------------------------------------------
    // MEDIUM QUESTION 4: Local vs. Imported Produce
    // ----------------------------------------------------------------------
    new Question(
        "4. Choosing Produce: Local vs. Imported 🍎🚚",
        "You are buying apples in the bazaar. Your primary criteria are supporting the **Local Economy 🇰🇬** and achieving the **Lowest Environmental Impact 🌱**.",
        [
            ["Criteria", "Local Kyrgyz Apples (Issyk-Kul)", "Imported Apples (Poland)"],
            ["Supports Local Economy 🇰🇬", "Direct support (High)", "Profit goes abroad (Low)"],
            ["Environmental Impact 🌱", "Low (Short transport by truck)", "High (Long transport by air/sea/truck)"],
            ["Taste/Freshness", "Excellent (Seasonal)", "Moderate (Stored for months)"]
        ],
        "Which apple choice is the clear winner based on the primary criteria (Local Economy & Lowest Environmental Impact)?",
        [
            { text: "Imported Apples", correct: false },
            { text: "Local Kyrgyz Apples", correct: true },
            { text: "Choose the cheapest option regardless of criteria", correct: false }
        ],
        "**Local Kyrgyz Apples** satisfy both criteria perfectly: they provide **High** support to the local economy and have the **Lowest** environmental impact due to minimal transportation distance."
    ),
    // ----------------------------------------------------------------------
    // MEDIUM QUESTION 5: Comparing University Locations
    // ----------------------------------------------------------------------
    new Question(
        "5. Comparing University Locations for Study 🎓📍",
        "A student is choosing between two universities. Their criteria are **High Access to Specialized Research Facilities 🔬** and **Low Cost of Living 💰**.",
        [
            ["Criteria", "Bishkek (AUCA)", "London (UCL)"],
            ["Specialized Research Facilities 🔬", "Good (Regional Focus)", "Excellent (World-class, huge libraries)"],
            ["Cost of Living 💰", "Very Low", "Extremely High"],
            ["Language", "Russian/English", "English"]
        ],
        "If the student decides that **Low Cost of Living** is slightly more important than Research Access, which city is the comparative choice?",
        [
            { text: "London, due to world-class facilities", correct: false },
            { text: "Bishkek, due to Very Low cost matching the prioritized criteria.", correct: true },
            { text: "Neither, because the facilities must be 'Excellent'", correct: false }
        ],
        "The student explicitly weighted **Low Cost of Living** as slightly more important. **Bishkek** offers a **Very Low** cost, which best satisfies the prioritized criterion."
    ),
    // ----------------------------------------------------------------------
    // MEDIUM QUESTION 6: Transport to Issyk-Kul
    // ----------------------------------------------------------------------
    new Question(
        "6. Choosing Summer Transport to Issyk-Kul 🚌🚗",
        "A family needs to travel from Bishkek to Cholpon-Ata. Their criteria are the **Lowest Price 💰** and **Lowest Risk of Breakdowns/Delays 🛠️**.",
        [
            ["Criteria", "Shared Minibus (Marshrutka)", "Personal Car"],
            ["Price (Round Trip) 💰", "3,200 KGS (for 4 people)", "5,000 KGS (Fuel/Maintenance)"],
            ["Breakdown Risk 🛠️", "High (Older vehicle, frequent stops)", "Low (New family car)"],
            ["Comfort", "Low (Crowded)", "High (Spacious)"]
        ],
        "Which mode of transport is the best comparative choice if the family absolutely prioritizes **Lowest Price**?",
        [
            { text: "Personal Car, because the risk is lower", correct: false },
            { text: "Shared Minibus (Marshrutka)", correct: true },
            { text: "Neither, because the comfort level is too different", correct: false }
        ],
        "The **Marshrutka** is the clear winner for the **Lowest Price** criterion (3,200 KGS vs. 5,000 KGS). Even though the breakdown risk is higher, the family prioritized cost, and the Marshrutka meets the primary goal."
    ),
    // ----------------------------------------------------------------------
    // MEDIUM QUESTION 7: Solving Smog
    // ----------------------------------------------------------------------
    new Question(
        "7. Solving Smog in Winter 🏭🌬️",
        "The city council needs to invest in a solution to reduce winter smog. The criteria are **Fastest Impact ⏳** and **Lowest Political Difficulty ✅**.",
        [
            ["Criteria", "Solution A: Subsidize Electric Heaters", "Solution B: Build Modern Gas Heating Infrastructure"],
            ["Fastest Impact ⏳", "High (Can be rolled out in 1 month)", "Low (Requires 5-10 years of major construction)"],
            ["Political Difficulty ✅", "Low (Easy program, high public support)", "Very High (Requires removing coal boilers, major cost)"],
            ["Total Cost", "Moderate", "Extremely High"]
        ],
        "Which solution is the best choice based on the need for the **Fastest Impact** and **Lowest Political Difficulty**?",
        [
            { text: "Solution B because it is the permanent, long-term fix", correct: false },
            { text: "Solution A: Subsidize Electric Heaters", correct: true },
            { text: "Neither, because the total cost is not the same", correct: false }
        ],
        "**Solution A** wins. It satisfies both criteria perfectly: it provides a **High** (fastest) impact and has the **Lowest** political difficulty. Solution B fails both primary criteria despite being the permanent solution."
    ),
    // ----------------------------------------------------------------------
    // HARD QUESTION 8: School News Source
    // ----------------------------------------------------------------------
    new Question(
        "8. Choosing a New Source for School News 📰📱",
        "You are looking for a news source focused on Bishkek events. Your criteria are **Highest Verified Accuracy ✔️** and **Lowest Reading Difficulty 📖**.",
        [
            ["Criteria", "Source X: Academic Policy Journal", "Source Y: Popular Instagram News Account"],
            ["Verified Accuracy ✔️", "Very High (Fact-checked, peer-reviewed)", "Low (Fast, unverified posts)"],
            ["Reading Difficulty 📖", "Very High (Complex language, long articles)", "Very Low (Simple captions, short videos)"],
            ["Speed of Delivery", "Slow (Monthly)", "Immediate (Hourly)"]
        ],
        "This scenario involves a **Trade-Off**. If your teacher demands you prioritize **Verified Accuracy**, which comparative choice should you make?",
        [
            { text: "Source Y, as 7th graders need Very Low difficulty", correct: false },
            { text: "Source X, as the required priority is Very High Verified Accuracy, which outweighs the difficulty.", correct: true },
            { text: "Source Y, because the delivery speed is Immediate", correct: false }
        ],
        "The explicit priority is **Verified Accuracy**. **Source X** provides **Very High** accuracy, making it the required choice, even though it performs poorly on the secondary criterion (Reading Difficulty). Always follow the explicit priority."
    ),
    // ----------------------------------------------------------------------
    // HARD QUESTION 9: Weekend Trip Planning
    // ----------------------------------------------------------------------
    new Question(
        "9. Planning a Weekend Trip from Bishkek ⛰️🏕️",
        "You have 48 hours for a weekend trip. Your criteria are **Minimum Environmental Disturbance 🌱** and **Maximum Access to Amenities 🛁**.",
        [
            ["Criteria", "Option A: Wild Camping in Al-Archa Canyon", "Option B: Stay at a Karakol Resort (Issyk-Kul)"],
            ["Environmental Disturbance 🌱", "Low (Leave No Trace, no running water)", "High (Large hotels, waste disposal issues)"],
            ["Access to Amenities 🛁", "Very Low (No toilet/power/heating)", "Very High (Hotels, shops, paved roads)"],
            ["Distance (Drive Time)", "1 Hour", "5 Hours"]
        ],
        "Which option represents the **greatest sacrifice of amenities** for **environmental benefit**?",
        [
            { text: "Karakol Resort", correct: false },
            { text: "Wild Camping in Al-Archa Canyon", correct: true },
            { text: "Neither, the distance difference is too great", correct: false }
        ],
        "The question asks for the option that involves sacrificing comfort for the environment. **Wild Camping** involves moving from a goal of Very High Amenities (Not met) to **Very Low** Amenities (Sacrifice), to achieve a **Low** Environmental Disturbance (Benefit)."
    ),
    // ----------------------------------------------------------------------
    // HARD QUESTION 10: Urban Development Projects
    // ----------------------------------------------------------------------
    new Question(
        "10. Comparing Urban Development Projects 🏗️🏘️",
        "The city is deciding on a new public space. The criteria are **Maximum Long-Term Economic Benefit 📈** and **Maximum Social Benefit 👥**.",
        [
            ["Criteria", "Project A: Luxury Shopping Mall", "Project B: New Multi-Sport Community Center"],
            ["Economic Benefit 📈", "Very High (High rents, tourists)", "Moderate (Affordable fees, local jobs)"],
            ["Social Benefit 👥", "Low (Serves wealthy shoppers/tourists)", "Very High (Serves all ages/income levels for health)"],
            ["Initial Investment", "High", "High"]
        ],
        "A citizen argues that a government's role is primarily to serve the most people. Based on this value judgment, which project should be chosen, and why?",
        [
            { text: "Project A, because Economic Benefit is more important than Social Benefit", correct: false },
            { text: "Project B, because the value judgment prioritizes serving the 'most people', which matches the Very High Social Benefit.", correct: true },
            { text: "Project A, because the initial investment is the same", correct: false }
        ],
        "The external **value judgment** is to serve the **most people**. **Project B** provides a **Very High Social Benefit** to all income levels, perfectly matching this priority, making it the comparative choice."
    )
];

/**
 * Converts a data array into an HTML table string.
 * @param {Array<Array<string>>} data
 * @returns {string} HTML table string
 */
export function createTable(data) {
    let html = '<table class="w-full border-collapse rounded-lg overflow-hidden compare-table text-sm md:text-base">';

    // Store headers to use as data-labels for responsive design
    const headers = data[0]; 

    // Table Head (remains the same)
    html += '<thead><tr class="bg-red-500 text-white">';
    headers.forEach(header => {
        html += `<th class="font-semibold">${header}</th>`;
    });
    html += '</tr></thead>';

    // Table Body
    html += '<tbody>';
    for (let i = 1; i < data.length; i++) {
        html += `<tr class="${i % 2 === 0 ? 'bg-red-100' : 'bg-red-200'}">`;
        
        // Loop through cells and add data-label based on the header
        data[i].forEach((cell, cellIndex) => {
            // Use the header (criteria name) as the data-label
            const dataLabel = headers[cellIndex]; 
            html += `<td data-label="${dataLabel}">${cell}</td>`;
        });
        html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
}