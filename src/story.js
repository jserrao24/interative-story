const story = [
    {
        id: 1,
        text: "You wake up in a mysterious forest. What do you do?",
        choices: [
            { text: "Explore the forest", nextId: 2 },
            { text: "Stay where you are", nextId: 3 }
        ]
    },
    {
        id: 2,
        text: "You come across a fork in the road. Which path do you take?",
        choices: [
            { text: "Left", nextId: 4 },
            { text: "Right", nextId: 5 }
        ]
    },
    {
        id: 3,
        text: "You hear a strange noise and decide to investigate. You find a hidden treasure! You win!",
        choices: []
    },
    {
        id: 4,
        text: "You encounter a friendly squirrel who leads you to safety. You win!",
        choices: []
    },
    {
        id: 5,
        text: "You fall into a pit and are unable to escape. Game over!",
        choices: []
    }
];

export default story;