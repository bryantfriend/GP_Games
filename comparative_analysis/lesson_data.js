// lesson_data.js

export const LESSON_SLIDES = [
    {
        title: "🚀 Slide 1: Welcome to Comparative Analysis!",
        emoji: "🧠",
        content: `
            <p class="text-xl text-gray-700 mb-4 leading-relaxed">
                Welcome to Global Perspectives! We're unlocking your **Comparative Analysis** superpower today.
                This is the ultimate skill for making informed, smart decisions—from picking a snack to solving a global crisis.
            </p>
            <p class="font-bold text-indigo-800 italic text-lg">
                Get ready to learn how to **compare and conquer** the world's choices!
            </p>
        `,
        style: "bg-blue-50 border-blue-600"
    },
    {
        title: "🤔 Slide 2: What is Comparative Analysis?",
        emoji: "⚖️",
        content: `
            <p class="text-lg text-gray-700 mb-4">
                It means figuring out how two or more things are **Alike** (Compare) and how they are **Different** (Contrast).
            </p>
            <div class="p-4 bg-blue-100 rounded-lg">
                <p class="font-semibold text-blue-800">
                    Example: Comparing two different smartphones.
                </p>
                <ul class="list-disc list-inside ml-4 text-sm text-blue-700 mt-2">
                    <li>**Compare (Alike):** Both phones can call, text, and run apps.</li>
                    <li>**Contrast (Different):** One costs more, one has a better camera.</li>
                </ul>
            </div>
        `,
        style: "bg-blue-50 border-blue-600"
    },
    {
        title: "🥇 Slide 3: Step 1: Identify Criteria (The Rules)",
        emoji: "🎯",
        content: `
            <p class="text-xl font-bold text-yellow-800 mb-3">
                This is the most important step! You need to set the **rules** for your decision.
            </p>
            <p class="text-lg text-gray-700 mb-4">
                **Criteria** are the qualities you care about most. If you're choosing a farming method for a country, your criteria might be:
            </p>
            <ul class="list-disc list-inside ml-4 text-gray-700">
                <li>**Low Cost** (Must be cheap to run) 💰</li>
                <li>**Water Use** (Must use less water) 💧</li>
                <li>**Impact on Land** (Must be sustainable) 🌱</li>
            </ul>
        `,
        style: "bg-yellow-50 border-yellow-600"
    },
    {
        title: "📊 Slide 4: Step 2: Collect Data (The Facts)",
        emoji: "📈",
        content: `
            <p class="text-lg text-gray-700 mb-4">
                Once you have your criteria, you must find solid, measurable **facts** for each option.
            </p>
            <p class="p-3 bg-yellow-100 rounded-lg text-yellow-800 font-semibold">
                **Rule:** Only collect data that directly relates to the criteria you chose in Step 1. Ignore extra information!
            </p>
            <p class="text-sm text-gray-600 mt-3">
                (This data usually goes into a table, which helps us see everything clearly!)
            </p>
        `,
        style: "bg-yellow-50 border-yellow-600"
    },
    {
        title: "⚖️ Slide 5: Step 3: Analyze & Conclude (The Decision)",
        emoji: "💡",
        content: `
            <p class="text-lg text-gray-700 mb-4">
                Look at your data table and compare the options directly against your original criteria.
            </p>
            <p class="text-xl font-bold text-indigo-700 mb-3">
                Ask yourself: Which option satisfies the most (or the most important) criteria?
            </p>
            <div class="p-4 bg-indigo-100 rounded-lg">
                <p class="font-semibold text-indigo-800">
                    Example: If your criteria are 'Low Cost' and 'High Speed'.
                </p>
                <p class="text-sm text-indigo-700 mt-2">
                    Option A is Low Cost, Slow. Option B is High Cost, High Speed. You must decide which criteria is more important to you!
                </p>
            </div>
        `,
        style: "bg-indigo-50 border-indigo-600"
    },
    {
        title: "💬 Slide 6: Step 4: Justify (The 'Why')",
        emoji: "✅",
        content: `
            <p class="text-xl font-bold text-green-800 mb-3">
                This is the most crucial skill in Global Perspectives!
            </p>
            <p class="text-lg text-gray-700 mb-4">
                You must explain **WHY** your conclusion is correct by clearly referencing the data. This proves you didn't just guess.
            </p>
            <blockquote class="p-3 border-l-4 border-green-500 italic text-green-700 bg-green-100">
                "I chose Option A because the table shows it is $5.00 cheaper and has 'None' for environmental impact, which meets our criteria of Low Cost and Low Pollution."
            </blockquote>
        `,
        style: "bg-green-50 border-green-600"
    },
{
        title: "🌍 Slide 7: Global Example Setup",
        emoji: "🏙️",
        content: `
            <p class="text-xl text-gray-700 mb-4">
                Let's practice the steps! Imagine you're choosing a city for a student exchange program.
            </p>
            <p class="text-2xl font-bold text-red-600 mb-3">
                Our Criteria (The Rules):
            </p>
            <ul class="list-disc list-inside ml-4 text-lg font-semibold text-gray-800">
                <li>1. **Low Cost of Living** (We want to save money) 💰</li>
                <li>2. **High Access to Culture** (Libraries/Museums) 🖼️</li>
            </ul>
        `,
        style: "bg-red-50 border-red-600"
    },
    {
        title: "📋 Slide 8: Global Example Data",
        emoji: "🗺️",
        // CRITICAL CHANGE: The content is now the placeholder and the data table array itself.
        content: {
            text: `
                <p class="text-lg text-gray-700 mb-4">
                    Here are the facts we collected (The Data) for our criteria.
                </p>
                {{TABLE_PLACEHOLDER}}
                <p class="text-sm text-gray-600 mt-4">
                    Remember the criteria: Low Cost 💰 and High Culture 🖼️.
                </p>
            `,
            // Store the table data directly in the object
            tableData: [
                ["Criteria", "City A (New York)", "City B (Kuala Lumpur)"],
                ["Cost of Living", "Very High", "Moderate"],
                ["Access to Libraries/Museums", "Excellent (50+ Major sites)", "Good (15 Major sites)"]
            ]
        },
        style: "bg-red-50 border-red-600"
    },
    {
        title: "🤝 Slide 9: The Trade-Offs (Analysis)",
        emoji: "🚧",
        content: `
            <p class="text-xl font-bold text-indigo-700 mb-4">
                A good analysis shows the **Trade-Offs**—what you gain and what you lose.
            </p>
            <ul class="list-disc list-inside ml-4 text-gray-700 space-y-3">
                <li>If **saving money** is your top priority, **City B** is the best choice (Moderate cost).</li>
                <li>If **maximum culture access** is your top priority, **City A** is the best choice (Excellent access).</li>
            </ul>
            <p class="mt-4 font-extrabold text-red-700">
                There is no single "right" answer until you weigh the criteria!
            </p>
        `,
        style: "bg-indigo-50 border-indigo-600"
    },
    {
        title: "🏁 Slide 10: Your Challenge Awaits!",
        emoji: "🏆",
        content: `
            <p class="text-2xl font-bold text-green-700 mb-4">
                You've mastered the 4 steps!
            </p>
            <ol class="list-decimal list-inside ml-4 text-lg text-gray-700 space-y-1">
                <li>Identify **Criteria** (Rules)</li>
                <li>Collect **Data** (Facts)</li>
                <li>**Analyze** & Conclude (Decision)</li>
                <li>**Justify** (Why)</li>
            </ol>
            <p class="mt-6 text-xl text-gray-800 font-semibold">
                Now it's time to put your comparative analysis superpower to the test in the challenge!
            </p>
        `,
        style: "bg-green-50 border-green-600"
    }
];