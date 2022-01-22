//Begin
    //->addeventlistener on click kicks the timer and pops the first question, adding content to heading(question) and list items(choices)

// Function pop1
    //->addeventlistener click on the right answer updates the score plus one and pops the next question
    //-> click on the wrong answer decrements the timer by 10 and pops the next question
    //-> repeat
    //-> final question prompt user for input, store name and final score, display final score

// -IF -> timer reaches zero, alert game over







let questions = document.getElementById("questions");
let response1 = document.getElementById("response1");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let count = document.getElementById("count");
let score = document.getElementById("score");



function start() {
let timeLeft = 60;

let num = setInterval(countdown, 1000); 

function countdown() {

	timeLeft--;
  count.textContent = timeLeft;
 if(timeLeft === 0)
  clearInterval(num);
}
}


function begin() {

}



function pop1() {

}

function pop2() {

}

function pop3() {

}


document.getElementById("begin").addEventListener("click", start);



