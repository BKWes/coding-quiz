// question array
var questionArr = [
    {
        question: "How do you add a comment in Javascript?",
        choices: {
            a: "<!-This is a comment-!>", 
            b:"**This is a comment**", 
            c:"// this is a comment", 
            d:"--this is a comment--"},
        answer: 'c'
    },
    {
        question: "How does a FOR loop start?",
        choices: {
            a:"for (i=0; i<=8; i++)", 
            b:"for (i=0;i<1)", 
            c:"for i = 0", 
            d:"for i=0; i<2; i--"},
        answer: 'a'
    },
    {
        question: "What is the correct way to write an array in Javacript?",
        choices: {
            a:"var colors = ('red','green',blue)", 
            b:"var cars = ['honda', 'toyota', 'volkswagen']", 
            c:"var fruit = 'grape', 'apple', 'banana'", 
            d:"var color = [yellow, brown, pink]"},
        answer: 'b'
    },
    {
        question: "How do you round an integer down the nearest whole number?",
        choices: {
            a:"Math.round(1.33)", 
            b:"floor(23.4482", 
            c:"Math.down(.2910)", 
            d:"Math.floor(121.8472 * 13.4)"},
        answer: 'd'
    },
    {
        question: "What is the correct way to create an alert box?",
        choices: {
            a:"window('message here')", 
            b:"var alert = 'message here'", 
            c:"alert('message here')", 
            d:"window.box('message here')"},
        answer: 'c'
    },
    {
        question: "Which event occurs when the user clicks on an element?",
        choices: {
            a:"on.mouseclick", 
            b:"on.hover", 
            c:"click", 
            d:"on.click"},
        answer: 'd'
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        choices: {
            a:"var houseColor", 
            b:"variable color", 
            c:"v names", 
            d:"var = dogs"},
        answer: 'a'
    },
    {
        question: "Which operator is known as an 'incrementor'?",
        choices: {
            a:"+", 
            b:"-", 
            c:"++", 
            d:"=="},
        answer: 'c'
    },
    {
        question: "How do you log a message in the console?",
        choices: {
            a:"log.console(message)", 
            b:"console.log(message)", 
            c:"console(message)", 
            d:"consolelog = message"},
        answer: 'b'
    },
    {
        question: "How do you get a random number in JavaScript?",
        choices: {
            a:"random(x)", 
            b:"Math.random()", 
            c:"mathrandom()", 
            d:"get.randomNumber()"},
        answer: 'b'
    }
];
var timer = 90;
// create timer element on html
var span = document.createElement('span');
span.className = 'timer';
span.innerHTML = timer;
document.getElementById('timer').appendChild(span);

// start button that, when clicked, starts a timer and presents a question
// event listener for button click
document.querySelector("#start-btn").addEventListener("click", function(event) {
    console.log('button clicked');
    // clear off intro elements to display quiz
    var intro = document.getElementById("intro");
    intro.style.display = 'none';
    // display quiz elements
    questionCycle(event);
    // timer countdown function
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timer <= 0) {
            clearTimeout(timerId);
        } else {
            timer -= 1
            // update timer on page to reflect changes
            span.innerHTML = timer;
            console.log(timer);
        }
    };
});
// question div
var questionBox = document.getElementById('question');
// answer div
var answerBox = document.getElementById('answer-choices');
var answerEl = document.createElement('ul');
answerBox.appendChild(answerEl);

// add content from question array and align the questions with question element and answers with the answer element
var questionCycle = function() {
    console.log(questionArr)

    for (var i = 0; i < questionArr.length; i++) {
        // picks a random question every time start button is pressed
        var pickedQuestion = questionArr[Math.floor(Math.random() * questionArr.length)];
        // var pickedQuestionChoices = pickedQuestion[i].choices;
        console.log(pickedQuestion);
        
        var questionEl = document.createElement('h3');
        questionEl.textContent = pickedQuestion.question;
        questionBox.appendChild(questionEl);
    }
        var answerListEl = document.createElement('li');
        answerListEl.textContent = pickedQuestion.choices
        answerEl.appendChild(answerListEl);

    return Math.floor(Math.random() * questionArr.length);
// if answer is incorrect subtract 8 seconds from timer

// if answer is correct continue to next question until all questions are answered

};

var wrongChoice = function() {
    timer -= 8;
    span.innerHTML = timer;
};

// when a question is answered, the next one is prompted

// incorrect questions penalize by subtracting from timer 

// game is over when all questions are answered or the timer reaches 0
// when game is over, save initials and score in highscores page 