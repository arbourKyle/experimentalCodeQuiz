let questions = document.getElementById("questions");
let response1 = document.getElementById("response1");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let count = document.getElementById("count");
let score = document.getElementById("score");
let askName = document.getElementById("name");
let submit = document.getElementById("submit");
let buttonClick = document.getElementById("buttons");

document.getElementById("name").style.display = "none";

let timeLeft = 60;
let i = 1;

let questionArr = [questionTwo, questionThree];


// function nextQ(evt) 

buttonClick.addEventListener('click', function(event) {

    if (event.target.ul != undefined) { // if the attribute exists...
      questionTwo();
    }

  });


//Kick the timer and call the first question

function init() {
document.getElementById("begin").addEventListener("click", function() {

    function countDown() { 

        timeLeft --;
        if (timeLeft === 0) {
        clearInterval(countdown);
        }
        count.textContent = timeLeft;
        }
        
        let countdown = setInterval(countDown, 1000);
  
        
        questionOne();
    });
}

//First

function questionOne() {

    questions.textContent = "If you apply slice(1, 4) to a variable assigned the string 'banana' what is the result?";
    response1.textContent = "ana";
    response2.textContent = "bana";
    response3.textContent = "Is a fruit";

response1.addEventListener("click", function(){
    
    document.getElementById("score").textContent = i++;
    
});

response2.addEventListener("click", function(){
    
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    

});

response3.addEventListener("click", function(){

    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
            
});
   
}

function questionTwo() {

    questions.textContent = "Which property moves items across the main axis of a CSS grid or flexbox?";
    response1.textContent = "Padding-bottom";
    response2.textContent = "Align-items";
    response3.textContent = "Justify-content";

response1.addEventListener("click", function(){


    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    
});

response2.addEventListener("click", function(){
    
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    
});

response3.addEventListener("click", function(){

    document.getElementById("score").textContent = i++;
});
        
}

    

function questionThree() {

    document.getElementById("response3").style.display = "none";

    questions.textContent = "True or False - var x; !var?";
    response1.textContent = "True";
    response2.textContent = "False";


response1.addEventListener("click", function(){

    document.getElementById("score").textContent = i++;
});

response2.addEventListener("click", function(){
    
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
});

response3.addEventListener("click", function(){

    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
});

    stats();
}

function stats() {

    document.getElementById("name").style.visibility = "visible";

    let inputName = {
        askName: askName.value,
        score: score.value,
        
    };
      
      localStorage.setItem("inputName", JSON.stringify(inputName));
      showStats();
}

function showStats() {

    let inputName = JSON.parse(localStorage.getItem("inputName"));
    if (inputName !== null) {
      document.querySelector("name").textContent = inputName.askName + 
      " your score is " + inputName.score;
    }
  }



init();