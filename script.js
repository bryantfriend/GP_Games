document.addEventListener('DOMContentLoaded', function() {

    // ###########################################################
    // ##  EASY EDIT SECTION: ADD YOUR GAMES TO THIS LIST!      ##
    // ###########################################################
    //
    // To add a new game, just copy one of the lines below and
    // change the fileName and title.
    //
    // - fileName: The exact name of your game's HTML file (e.g., 'my-cool-game.html').
    // - title: The text that will appear on the button.
    //
    // Make sure each line ends with a comma (,) except for the last one.

    const games = [
        {
            fileName: 'sourcespotter.html',
            title: 'Source Spotter'
        }, 
        {
            fileName: 'questionquest.html',
            title: 'Question Quest'
        }, 
        {
            fileName: 'questionstorming.html',
            title: 'Question Storming'
        }, 
        {
            fileName: 'questionbuilderchallenge.html',
            title: 'Question Builder Challenge'
        },  
        {
            fileName: 'code_sorter.html',
            title: 'Question Sorter'
        },  
        {
            fileName: 'primary_vs_secondary_source.html',
            title: 'Primary vs. Secondary Sources'
        },
        {
            fileName: 'global_skills_navigator.html',
            title: 'Global Skills Navigator'
        },
        {
            fileName: 'GP-Detectives.html',
            title: 'Global Perspecrtives Detective Agency'
        },
        {
            fileName: 'research-methods1.html',
            title: 'Step 1 and 2 of research'
        },
        {
            fileName: 'source_surge.html',
            title: 'Source Surge'
        }, 
        {
            fileName: 'source_sleuth.html',
            title: 'Source Sleuth'
        },         

        // { fileName: 'your-next-game.html', title: 'The Title of Your Next Game' },
    ];


    // ###########################################################
    // ##  (No need to edit anything below this line)           ##
    // ###########################################################

    const gameListElement = document.getElementById('game-list');

    // If there are no games, show a message
    if (games.length === 0) {
        gameListElement.innerHTML = '<p>No games have been added yet.</p>';
        return;
    }

    // Loop through the list of games and create a link for each one
    games.forEach(game => {
        // Create the list item element
        const listItem = document.createElement('li');

        // Create the link (<a>) element
        const link = document.createElement('a');
        link.href = game.fileName; // Set the link URL
        link.textContent = game.title; // Set the visible text

        // Put the link inside the list item
        listItem.appendChild(link);

        // Add the list item to the list on the webpage
        gameListElement.appendChild(listItem);
    });

});
