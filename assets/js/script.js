// question array
var questionArr = [
    {
        question: "How do you add a comment in Javascript",
        choices: ["<!-This is a comment-!>", "**This is a comment**", "// this is a comment", "--this is a comment--"],
        answer: 2
    },
    {
        question: "How does a FOR loop start?",
        choices: ["for (i=0; i<=8; i++)", "for (i=0;i<1)", "for i = 0", "for i=0; i<2; i--"],
        answer: 0
    },
    {
        question: "What is the correct way to write an array in Javacript>",
        choices: ["var colors = ('red','green',blue)", "var cars = ['honda', 'toyota', 'volkswagen']", "var fruit = 'grape', 'apple', 'banana'", "var color = [yellow, brown, pink]"],
        answer: 1
    },
    {
        question: "How do you round an integer down the nearest whole number?",
        choices: ["Math.round(1.33)", "floor(23.4482", "Math.down(.2910)", "Math.floor(121.8472 * 13.4)"],
        answer: 3
    },
    {
        question: "What is the correct way to create an alert box?",
        choices: ["window('message here')", "var alert = 'message here'", "alert('message here')", "window.box('message here')"],
        answer: 2
    },
    {
        question: "Which event occurs when the user clicks on an element?",
        choices: ["on.mouseclick", "on.hover", "click", "on.click"],
        answer: 3
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        choices: ["var houseColor", "variable color", "v names", "var = dogs"],
        answer: 0
    },
    {
        question: "Which operator is known as an 'incrementor'?",
        choices: ["+", "-", "++", "=="],
        answer: 2
    },
    {
        question: "How do you log a message in the console?",
        choices: ["log.console(message)", "console.log(message)", "console(message)", "consolelog = message"],
        answer: 1
    },
    {
        question: "How do you get a random number in JavaScript?",
        choices: ["random(x)", "Math.random()", "mathrandom()", "get.randomNumber()"],
        answer: 1
    }
];
console.log(questionArr);

// start button that, when clicked, starts a timer and presents a question

// when a question is answered, the next one is prompted

// incorrect questions penalize by subtracting from timer 

// game is over when all questions are answered or the timer reaches 0
// when game is over, save initials and score in highscores page 