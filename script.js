
var q1 = {
    question: 'Which one of the following is the correct way for calling the JavaScript code?',
    op1: "1. Preprocessor",
    op2: "2. Triggering Event",
    op3: "3. RMI",
    op4: "4. Function/Method",
    ans: "4"

}

var q2 = {
    question: 'The "function" and " var" are known as?',
    op1: "1. Keywords",
    op2: "2. Data types",
    op3: "3. Declaration statements",
    op4: "4. Prototypes",
    ans: "3"
}

var q3 = {
    question: 'Which of the following variables takes precedence over the others if the names are the same?',
    op1: "1. Global variable",
    op2: "2. The local element",
    op3: "3. The two of the above",
    op4: "4. None of the above",
    ans: "2"
}

var q4 = {
    question: 'Which one of the following is the correct way for calling the JavaScript code?',
    op1: "1. Preprocessor",
    op2: "2. Triggering Event",
    op3: "3. RMI",
    op4: "4. Function/Method",
    ans: "4"
}

var q5 = {
    question: 'Which of the following type of a variable is volatile?',
    op1: "1. Mutable variable",
    op2: "2. Dynamic variable",
    op3: "3. Volatile variable",
    op4: "4. Immutable variable",
    ans: "1"
}

var arrayofquestion = [q1.question, q2.question, q3.question, q4.question, q5.question,];
var arrayofanswers = [q1.ans,q2.ans,q3.ans,q4.ans,q5.ans];
var arrayofoption1 = [q1.op1,q2.op1,q3.op1,q4.op1,q5.op1];
var arrayofoption2 = [q1.op2,q2.op2,q3.op2,q4.op2,q5.op2];
var arrayofoption3 = [q1.op3,q2.op3,q3.op3,q4.op3,q5.op3];
var arrayofoption4 = [q1.op4,q2.op4,q3.op4,q4.op4,q5.op4];
var questionNumber = 0;
var buttons = document.getElementsByClassName('button');
var strtBtn = document.getElementsByClassName('start');
var options = document.getElementsByClassName('options');
var endOfQuizVar = false;
var correctAns = 0;
var wrongAns = 0;
var totalQuestions = 5;
var j = 60;
var paragraphText = "Try to answer the following code related questions within the time limit. Keep in mind that incorrent answers will penalize your time by 10 seconds!."

removeHomeScreen();

function removeHomeScreen()
{

    strtBtn[0].addEventListener("click", function()
    {
        document.getElementsByTagName('ul')[0].classList.add("visible");
        document.getElementsByTagName('ul')[0].classList.remove("hide");
        document.getElementsByClassName('start')[0].classList.add("hide");
        displayNextQuestion(questionNumber);
        waitForButtonPress(questionNumber);
        timer();
    });
}

// function showHomeScreen ()
// {
//     document.getElementsByClassName('paragraph')[0].textContent = paragraphText;
//     document.getElementsByTagName('ul')[0].classList.remove("visible");
//     document.getElementsByTagName('ul')[0].classList.add("hide");
//     document.getElementsByClassName('start')[0].classList.remove("hide");
//     questionNumber = 0;

// }

function showUserName()
{

    document.getElementsByClassName('paragraph')[0].classList.add("hide");
    document.getElementsByClassName('paragraph')[0].classList.remove("visible");
    document.getElementsByClassName('enterInitialsText')[0].classList.add("hide");
    document.getElementsByClassName('userNameInput')[0].classList.add("userNameInputLocked");
    document.getElementsByClassName('submitButton')[0].addEventListener("click", function(event){})

}

function takeUserName()
{
    var endOfQuizText = "You have answered "+ correctAns+ " question(s) correctly out of " + totalQuestions;
    var input = document.getElementsByClassName('userNameInput');
    var submitButton = document.getElementsByClassName('submitButton');

    document.getElementsByTagName('ul')[0].classList.add("hide");
    document.getElementsByTagName('ul')[0].classList.remove("visible");
    document.getElementsByClassName('right-or-wrong')[0].classList.add('hide');
    document.getElementsByClassName('right-or-wrong')[0].classList.remove('visible');
    document.getElementsByClassName('paragraph')[0].textContent = endOfQuizText;
    document.getElementsByClassName('nameForm')[0].classList.remove("hide");
    document.getElementsByClassName('nameForm')[0].classList.add("visible");

    submitButton[0].addEventListener("click", function(event){
        event.stopPropagation();
        var scoreID = Math.floor(Math.random()*1000);
        localStorage.setItem(scoreID, input[0].value);
        showUserName();

    })
    
}

function timer()
{
    var timerText = document.getElementsByClassName('timer');

    var repeat = setInterval(function(){
        timerText[0].textContent = "Timer: "+ j;
        console.log(j);

        if (j <=0){
            takeUserName();
            clearInterval(repeat);
            timerText[0].textContent = "Timer: 0"

        }
        j = j-1;

    }, 1000);


}

function displayNextQuestion(i)
{
    document.getElementsByClassName('paragraph')[0].textContent = arrayofquestion[i];
    buttons[0].textContent = arrayofoption1[i];
    buttons[1].textContent = arrayofoption2[i];
    buttons[2].textContent = arrayofoption3[i];
    buttons[3].textContent = arrayofoption4[i];
}

function waitForButtonPress(questionNumber)
{

options[0].addEventListener("click", function(event){
        if (event.target.dataset.num == arrayofanswers[questionNumber])
        {
            document.getElementsByClassName('right-or-wrong')[0].textContent="Right";
            correctAns = correctAns + 1;
            questionNumber = questionNumber + 1;
            if (questionNumber < totalQuestions){
                console.log("Question number: " + questionNumber);
                displayNextQuestion(questionNumber);}
            else { 
                questionNumber = 0;
                takeUserName();
                }

        } else {document.getElementsByClassName('right-or-wrong')[0].textContent="Wrong";
            j = j - 10;
            questionNumber = questionNumber + 1;
            displayNextQuestion(questionNumber);
            if (questionNumber < totalQuestions){
                console.log("Question number: " + questionNumber);
                displayNextQuestion(questionNumber);}
                else { 
                questionNumber = 0;
                takeUserName();
                }
        
            }
        })

}

