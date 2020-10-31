// finding  and asigning the elements to variables
var header = document.querySelector(".header");
var highestScore = document.querySelector(".highScores");
var instruction = document.querySelector(".instruction");
var startButton = document.querySelector(".sButton");
var questionChoice = document.querySelector(".question-choice");
var question = document.querySelector(".question");
var choices = document.querySelectorAll(".choices");
var displayTime = document.querySelector(".displayTime");
var body = document.querySelector("body");
var listener = document.querySelector(".listener");
var containerHighScores = document.querySelector(".containerHighScores");


//assigning variables
var questionNumber = 0;
var timer;
var countDown = 60;
var score;
var submitButton;
var input;
var allDone;
var resultTable;
var storedScores;
var clearHighScoresbuton;
var scoresTable;
var point = 0;
var isCorrect;

// questions array
var questions = [
    {
        question: "Which one is not a data type? ",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["javascript", "script", "js", "scripting"],
        correctAnswer: "script"
    },
    {
        question: "Who is the best developper?",
        answers: ["Jeff", "Bill", "Joe", "Anthony"],
        correctAnswer: "Anthony"
    },
    {
        question: "We write 'Hello World' in an alert box using _____..",
        answers: ["alertBox", "alert", "message", "print"],
        correctAnswer: "alert"
    },
    {
        question: "The condition in an if / else statement is enclosed within .",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "_______ is a scripting or programming language.",
        answers: ["javascript", "html", "css", "jquery"],
        correctAnswer: "javascript"
    },
    {
        question: "How do you call a function named -myFunction-?",
        answers: ["myFunction()", "call myFunc()", "func()", "Myfunction"],
        correctAnswer: "myFunction()"
    },
    {
        question: "What do you use to make a loop?",
        answers: ["strings", "booleans", "for", "if"],
        correctAnswer: "for"
    },
    {
        question: "The condition in an if / else statement is enclosed within.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer",
        answers: ["round", "rnd", "Math.round", "floor"],
        correctAnswer: "Math.round"
    }];
// function for quiz timing  
var startQuiz = function () {
    timer = setInterval(function () {
        countDown--;
        displayTime.textContent = countDown;
        // When countdown 0 or under zero game over
        if (countDown <= 0) {
            clearTimeout(timer);
            score = point;
            questionChoice.setAttribute("style", "display:none");
            resultShow();
        }

    }, 1000);
    //hiding first page elements
    instruction.setAttribute("style", "display:none");
    startButton.setAttribute("style", "display:none");
    // showing the question block and choices block
    question.setAttribute("style", "display:block");
    for (i = 0; i < choices.length; i++) {
        choices[i].setAttribute("style", "display:block");
    }
    // Displaying first question and answer
    for (i = 0; i < choices.length; i++) {
        choices[i].textContent = questions[questionNumber].answers[i];
    }
    question.textContent = questions[questionNumber].question;
    //getting  the next question
    questionNumber++;
};
//selecting answer function
var chooseAnswer = function (e) {
// determining the correct place for selecting answer     
    if ((e.target.innerText != "Wrong !" && e.target.innerText != "Correct !" && e.target.className != "question")) {
// displaying the next question 
        if (questionNumber <= questions.length) {

            if (isCorrect) {
// removing old answers result                
                questionChoice.removeChild(isCorrect);     
            }
//checking the answer
            if (e.target.outerText == questions[questionNumber - 1].correctAnswer) {
//if answer is correct display "correct" under the choices
                isCorrect = document.createElement('div');
                questionChoice.appendChild(isCorrect);
                isCorrect.setAttribute("style", "border-top: 2px solid rgb(158, 62, 62);color:rgb(158, 62, 62);margin-top:0px;padding:10px;font-size:20px");
                isCorrect.textContent = "Correct !";
                isCorrect.setAttribute("data-set", "isCorrect");
                point = point + 10;
//if answer is wrong display "wrong" under the choices and substract 10 seconds
            } else {
                isCorrect = document.createElement('div');
                questionChoice.appendChild(isCorrect);
                isCorrect.setAttribute("style", "border-top: 2px solid rgb(158, 62, 62);color:rgb(158, 62, 62);margin-top:0px;padding:10px;font-size:20px");
                isCorrect.setAttribute("data-set", "isCorrect");
                isCorrect.textContent = "Wrong !";
                countDown -= 10;
//arrange the displayed time to "0" in case it takes minus values
                if (countDown < 0) {
                    countDown = 1;
                }
            }
        }
// finalize the game if the questions end
        if (questionNumber < questions.length && e.target.className == "choices") {
            for (i = 0; i < choices.length; i++) {
                choices[i].textContent = questions[questionNumber].answers[i];
            }
            question.textContent = questions[questionNumber].question;
        }
       

//Waiting for 1 sec to display the last questions result and Display the RESULTTABLE
        if (questions.length == questionNumber) {
            setTimeout(callbackFunction, 1000);
            function callbackFunction() {
                clearTimeout(timer);
                score = point;
                questionChoice.setAttribute("style", "display:none");
                resultShow();
            }
        }
        questionNumber++;
    }
}

//Creating and Displaying the result Table function
resultShow = function () {
    // hiding the question and answers part
            questionChoice.setAttribute("style", "display:none")
          //creating and displaying result table and setting attributes
            resultTable = document.createElement('div');
            document.body.appendChild(resultTable);
            allDone = document.createElement('h2')
            resultTable.appendChild(allDone);
            allDone.textContent = "All done !";
            allDone.setAttribute("style", "text-align: center; color:rgb(158, 62, 62);margin-top:100px;font-size:40px;");
            var finalScore = document.createElement('p');
            allDone.insertAdjacentElement('afterend', finalScore);
            finalScore.textContent = "Your finalscore is " + score + "."
            finalScore.setAttribute("style", "text-align: center; color:rgb(158, 62, 62);margin-top:50px;font-size:30px;")
            var form = document.createElement('form');
            finalScore.insertAdjacentElement('afterend', form);
            form.setAttribute("style", "text-align: center;color:rgb(158, 62, 62);margin-top:50px;font-size:20px");
            var label = document.createElement('label');
            form.appendChild(label);
            label.setAttribute("for", "fname");
            label.textContent = "Enter initials :"
            input = document.createElement('input');
            form.appendChild(input);
            input.setAttribute("type", "text");
            input.setAttribute("id", "scoreText")
            submitButton = document.createElement('input');
            form.appendChild(submitButton);
            submitButton.setAttribute("type", "submit");
            submitButton.setAttribute("value", "submit")
            submitButton.setAttribute("value", "submit")
        }

// function for creating and displaying  goback and clearscore button
function displayGobackAndClearScore() {
    goBack = document.createElement('input');
    clearHighScoresbtn = document.createElement('input');
    listener.appendChild(clearHighScoresbtn);
    listener.appendChild(goBack);
    goBack.setAttribute("type", "submit");
    clearHighScoresbtn.setAttribute("type", "submit");
    clearHighScoresbtn.setAttribute("class", "clear");
    goBack.setAttribute("value", "GoBack");
    goBack.setAttribute("class", "goBack");
    goBack.setAttribute("style", "margin-left:50px;margin-top:50px;color:rgb(56, 10, 10); font-size:20px; cursor: pointer;background:rgb(158, 62, 62)")
    clearHighScoresbtn.setAttribute("style", "margin-left:30px;color:rgb(56, 10, 10); font-size:20px;margin-top:50px; cursor: pointer;background:rgb(158, 62, 62)")
    clearHighScoresbtn.setAttribute("value", "ClearHighScores");
    goback = document.querySelector(".clear");
    clearHighScoresbuton = document.querySelector(".clear");
    goBack = document.querySelector(".goBack");
    // Restarting the game
    goBack.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "https://hhutku.github.io/code-quiz/";
    });
    // Clearing the result scores
    clearHighScoresbuton.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        containerHighScores.setAttribute("style", "display:none");
    });
}

// Display High scores function 
function scoreDisplay() {
    // displaying go back and clear score buttons
    displayGobackAndClearScore();
// hiding result show page
    resultTable.setAttribute("style", "display:none");
// creating high score lines
    var list = document.createElement('ul');
    containerHighScores.appendChild(list);
    list.append("High Scores");
    list.setAttribute("style", "margin-left:450px;color:rgb(158, 62, 62);font-size:40px;margin-bottom:40px");

    for (i = 0; i < storedScores.length; i++) {
        if (i < 10) {
            console.log(storedScores[i].name);
            console.log(storedScores[i].score);
            var li = document.createElement('li');
            list.insertAdjacentElement('beforeend', li);
            li.setAttribute("style", " color:rgb(158, 62, 62);margin-top:10px;font-size:20px;margin-left:40px")
            li.textContent = storedScores[i].name + " :" + storedScores[i].score;
            localStorage.setItem("highestScore", storedScores[0].score);
        }
    }
}

// Starting the quiz
startButton.addEventListener("click", startQuiz);

//Selecting the choices
var choice = questionChoice.addEventListener("click", chooseAnswer);

// submiting the initials(name) and score and storing the scores in localstorage
body.addEventListener("submit", function (e) {
    e.preventDefault();
      if (e.target.nodeName == "FORM") {
        var scoresTable = [{ name: input.value, score: score }];
        storedScores = JSON.parse(localStorage.getItem("highScores"));
        if (storedScores !== null) {
            storedScores.push(scoresTable[0]);
        } else {
            storedScores = scoresTable;
        }
        localStorage.setItem("highScores", JSON.stringify(storedScores));
        storedScores = JSON.parse(localStorage.getItem("highScores"));
        storedScores.sort((a, b) => (a.score < b.score) ? 1 : -1);
        scoreDisplay();
    }

})

//Displaying highscore
if (localStorage.getItem("highestScore")) {
    highestScore.textContent = "High Score : " + localStorage.getItem("highestScore");
}



