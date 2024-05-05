import story from '../src/story.js';

// Define the makeChoice function in the global scope, 

// Define the makeChoice function in the global scope
window.makeChoice = function(nextId) {
    try {
        const nextNode = story.find(node => node.id === nextId);
        if (!nextNode) {
            throw new Error('Invalid story node ID');
        }
        displayStory(nextNode); 
        /* displayStory is called recursively through the makeChoice function, 
        which in turn calls displayStory with the next part of the story based on the user's choice*/
    } catch (error) {
        console.error('An error occurred while making a choice:', error);
    }
};


// Function to display the story and handle user choices recursively
// Get the reference to the HTML element where the story will be displayed
// Extract the text and choices from the current story node
// Display the text of the current story node
/* Recursive Call: When a user clicks on a choice button, the makeChoice function is invoked 
    with the ID of the next story node. This function then finds the corresponding story node from the story 
    array and calls displayStory with that node. This process repeats recursively, 
    displaying different parts of the story based on the user's choices 
    until there are no more choices available.*/
function displayStory(storyNode) {
    const storyElement = document.getElementById('story');
    const { text, choices } = storyNode;
    storyElement.innerHTML = `<p>${text}</p>`;

 // Check if there are choices available for the current story node
 // Generate HTML buttons for each choice and append them to the story element
 // If there are no choices, display a message indicating the end of the story
    if (choices.length > 0) {
        const choicesHTML = choices.map(choice => `<button onclick="makeChoice(${choice.nextId})">${choice.text}</button>`).join('');
        storyElement.innerHTML += `<div class="choice">${choicesHTML}</div>`;
    } else {
        storyElement.innerHTML += `<p>The end of the story.</p>`;
    }
}

// Start the story by displaying the first story node
displayStory(story[0]);