var timer = 80; // this gives the user 10 seconds to answer each question
var timePenalty = 8; // the user loses 8 seconds from timer for incorrect answers
var score = 0; // set score to 0 start
var startBtn = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

var questionIndex = 0;
// create timer element on html
var span = document.createElement('span');
span.className = 'timer';
span.innerHTML = timer;
document.getElementById('timer').appendChild(span);

// question array
var questionArr = [
    {
        question: "How do you add a comment in Javascript?",
        choices: ["<!-This is a comment-!>", "**This is a comment**", "// this is a comment", "--this is a comment--"],
        answer: "// this is a comment"
    },
    {
        question: "What is the correct way to write an array in Javacript?",
        choices: ["var colors = ('red','green',blue)", "var cars = ['honda', 'toyota', 'volkswagen']", "var fruit = 'grape', 'apple', 'banana'", "var color = [yellow, brown, pink]"],
        answer: "var cars = ['honda', 'toyota', 'volkswagen']"
    },
    {
        question: "How do you round an integer down the nearest whole number?",
        choices: ["Math.round(1.33)", "floor(23.4482", "Math.down(.2910)", "Math.floor(121.8472 * 13.4)"],
        answer: "Math.floor(121.8472 * 13.4)"
    },
    {
        question: "What is the correct way to create an alert box?",
        choices: ["window('message here')", "var alert = 'message here'", "alert('message here')", "window.box('message here')"],
        answer: "alert('message here')"
    },
    {
        question: "Which event occurs when the user clicks on an element?",
        choices: ["on.mouseclick", "on.hover", "click", "on.click"],
        answer: "on.click"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        choices: ["var houseColor", "variable color", "v names", "var = dogs"],
        answer: "var = dogs"
    },
    {
        question: "Which operator is known as an 'incrementor'?",
        choices: ["+", "-", "++", "=="],
        answer: "++"
    },
    {
        question: "How do you log a message in the console?",
        choices: ["log.console(message)", "console.log(message)", "console(message)", "consolelog = message"],
        answer: "console.log(message)"
    }
];

// start button that, when clicked, starts a timer and presents a question
// event listener for button click
startBtn.addEventListener("click", function(event) {
    // clear off intro elements to display quiz
    var intro = document.getElementById("intro");
    intro.style.display = 'none';
    // timer countdown function
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timer <= 0) {
            clearTimeout(timerId);
        } else {
            timer --;
            // update timer on page to reflect changes
            span.innerHTML = timer;
            console.log(timer);
            
            if (timer <= 0) {
                endQuiz();
            }
        }
    };
    // start quiz
    startQuiz(event);
});





// add content from question array and align the questions with question element and answers with the answer element
function startQuiz() {
    // reset question and answers
    questionEl.innerHTML = "";
    choicesEl.innerHTML = "";
    
    
    for (var i = 0; i < questionArr.length; i++) {
        var questionTitle = questionArr[questionIndex].question;
        var choiceList = questionArr[questionIndex].choices;
        questionEl.textContent = questionTitle;

        choiceList.forEach(function (newQuestion) {
            var listItem = document.createElement("li");
            listItem.textContent = newQuestion
            questionEl.appendChild(choicesEl);
            choicesEl.appendChild(listItem);
            listItem.addEventListener("click", userAnswer)
    })

}

function userAnswer(event) {
    var element = event.target;
    if (element.matches("li")) {
        if (element.textContent == questionArr[questionIndex].answer) {
            score = score + 15;
            element.style.backgroundColor = 'green';
        }
        else {
            timer -= timePenalty;
        }
    }
}
        

//     return Math.floor(Math.random() * questionArr.length);
// if answer is incorrect subtract 8 seconds from timer

// if answer is correct continue to next question until all questions are answered

};

function endQuiz() {};
// when a question is answered, the next one is prompted

// incorrect questions penalize by subtracting from timer 

// game is over when all questions are answered or the timer reaches 0
// when game is over, save initials and score in highscores page 