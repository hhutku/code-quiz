var header = document.querySelector(".header");
var instruction = document.querySelector(".instruction");
var startButton = document.querySelector(".sButton");
var questionChoice = document.querySelector(".question-choice");
var question = document.querySelector(".question");
var choices = document.querySelectorAll(".choices");
var displayTime = document.querySelector(".displayTime");
var body=document.querySelector("body");
var listener=document.querySelector(".listener");
var containerHighScores=document.querySelector(".containerHighScores");

var nextQ = 0;
var timer;
var count = 100;
var score;
var submitButton;
var input;
var allDone;
var  submitingScore;
var storedScores;
var highScores;
var clearHighScoresbuton;
var scoresTable;





var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["javascript", "script", "js", "scripting"],
        correctAnswer: "script"
    },
    {
        question: "What are programs you use?",
        answers: ["java", "html", "css", "jquery"],
        correctAnswer: "java"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox", "alert", "message", "print"],
        correctAnswer: "alert"
    },
    {
        question: "The condition in an if / else statement is enclosed within .",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "What are programs you use",
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

var startQuiz = function () {

       timer = setInterval(function () {

        count--;

        displayTime.textContent = count;
        if(count<=0){
            clearTimeout(timer);
            score=count;
            highScores();
        }

    }, 1000);

    instruction.setAttribute("style", "display:none");
    startButton.setAttribute("style", "display:none");
    question.setAttribute("style", "display:block");

    for (i = 0; i < choices.length; i++) {
        choices[i].setAttribute("style", "display:block");
    }

    for (i = 0; i < choices.length; i++) {

        choices[i].textContent = questions[nextQ].answers[i];
    }

    question.textContent = questions[nextQ].question;

    nextQ++;

};




var isCorrect;
var chooseAnswer = function (e) {

    if (nextQ <= questions.length) {

        if (isCorrect) {
           
            questionChoice.removeChild(isCorrect);
        }

        if (e.target.outerText == questions[nextQ - 1].correctAnswer) {

            isCorrect = document.createElement('h3');
            questionChoice.appendChild(isCorrect);
            isCorrect.setAttribute("style", "border-top: 2px solid rgb(158, 62, 62);color:rgb(158, 62, 62);margin-top:30px;padding:10px;font-size:20px");
            isCorrect.textContent = "Correct !";
           

        } else {
            isCorrect = document.createElement('h3');
            questionChoice.appendChild(isCorrect);
            isCorrect.setAttribute("style", "border-top: 2px solid rgb(158, 62, 62);color:rgb(158, 62, 62);margin-top:30px;padding:10px;font-size:20px");

            isCorrect.textContent = "Wrong !";
            count = count - 10;
        }

    }

    if (nextQ < questions.length && e.target.className == "choices") {

        for (i = 0; i < choices.length; i++) {

            choices[i].textContent = questions[nextQ].answers[i];
        }

        question.textContent = questions[nextQ].question;


    }

      highScores=function(){

        questionChoice.setAttribute("style","display:none")

       submitingScore=document.createElement('div');
      document.body.appendChild(submitingScore);

       allDone= document.createElement('h2')
            
       submitingScore.appendChild(allDone);
        allDone.textContent="All done !";
        allDone.setAttribute("style","text-align: center; color:rgb(158, 62, 62);margin-top:100px;font-size:40px;");

        var finalScore=document.createElement('p');
        allDone.insertAdjacentElement('afterend', finalScore);
        finalScore.textContent="Your finalscore is "+ score +"."
        finalScore.setAttribute("style","text-align: center; color:rgb(158, 62, 62);margin-top:50px;font-size:30px;")

        var form=document.createElement('form');
        finalScore.insertAdjacentElement('afterend', form);
        form.setAttribute("style","text-align: center;color:rgb(158, 62, 62);margin-top:50px;font-size:20px");

        var label=document.createElement('label');
        form.appendChild(label);
        label.setAttribute("for","fname");
        label.textContent="Enter initials :"
        input=document.createElement('input');
        form.appendChild(input);
        input.setAttribute("type","text");
        input.setAttribute("id","scoreText")
     submitButton=document.createElement('input');
        form.appendChild(submitButton);
        submitButton.setAttribute("type","submit");
        submitButton.setAttribute("value","submit")
         submitButton.setAttribute("value","submit")
      
        
    }
       

    if (questions.length == nextQ ) {

        setTimeout( callbackFunction, 1300 );
        function callbackFunction(){
        
        clearTimeout(timer);
        
        score=count;
        highScores(); }
    }
    nextQ++;

}


startButton.addEventListener("click", startQuiz);
var choice = questionChoice.addEventListener("click", chooseAnswer);



function displayGobackAndClearScore(){

    goBack=document.createElement('input');
     clearHighScoresbtn=document.createElement('input');
    listener.appendChild( clearHighScoresbtn);
    listener.appendChild( goBack);
    goBack.setAttribute("type","submit");
    clearHighScoresbtn.setAttribute("type","submit");
    clearHighScoresbtn.setAttribute("class","clear");
    goBack.setAttribute("value","GoBack");
    goBack.setAttribute("class","goBack");
    goBack.setAttribute("style","margin-left:50px;margin-top:50px;color:rgb(56, 10, 10); font-size:20px; cursor: pointer;background:rgb(158, 62, 62)")
    clearHighScoresbtn.setAttribute("style","margin-left:30px;color:rgb(56, 10, 10); font-size:20px;margin-top:50px; cursor: pointer;background:rgb(158, 62, 62)")
    clearHighScoresbtn.setAttribute("value","ClearHighScores");
    goback=document.querySelector(".clear");
   clearHighScoresbuton=document.querySelector(".clear");
   goBack=document.querySelector(".goBack");

   goBack.addEventListener("click", function(e){
    e.preventDefault();
       
        window.location.href = "file:///C:/Users/hhutk_dr318k4/OneDrive/Desktop/working-files/week5/04-Web-APIs/02-Homework/index.html";
   
   });


   clearHighScoresbuton.addEventListener("click", function(e){
    e.preventDefault();
    

         localStorage.clear();
        console.log("hghghgh");
          
        containerHighScores.setAttribute("style","display:none");
       
       

   });


}


function scoreDisplay(){
    

    submitingScore.setAttribute("style","display:none");
    
    

    var list=document.createElement('ul');
    containerHighScores.appendChild(list);
    list.append("High Scores");
    list.setAttribute("style","margin-left:450px;color:rgb(158, 62, 62);font-size:40px;")



     displayGobackAndClearScore();
       
   

    var dispScore;

 
    for(i=0;i<storedScores.length;i++){

        dispScore=storedScores[i].name+" :"+ storedScores[i].score;
       
        var li=document.createElement('li');
        list.insertAdjacentElement('afterend', li);
        li.setAttribute("style"," color:rgb(158, 62, 62);margin-top:10px;font-size:20px;margin-left:500px")
         li.textContent=dispScore;

    }


}

body.addEventListener("submit",function(e){
    e.preventDefault();
   
    var scoresTable=[{name:input.value,score:score}];
     storedScores=JSON.parse(localStorage.getItem("highScores")); 
    
    if (storedScores !== null) { 
        storedScores.push(scoresTable[0]); 
      } else {
        storedScores = scoresTable;
      }

      localStorage.setItem("highScores", JSON.stringify(storedScores));

    storedScores = JSON.parse(localStorage.getItem("highScores")); 
   
    
    scoreDisplay();
 
})










