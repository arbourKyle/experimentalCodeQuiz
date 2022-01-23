//Init
    //->addeventlistener on click kicks the timer and pops the first question, adding content to heading(question) and list items(choices)

// Function pop1
    //-> addeventlistener click on the right answer updates the score plus one and pops the next question
    //-> click on the wrong answer decrements the timer by 10 and pops the next question
    //-> repeat
    //-> final question prompt user for input, store name and final score, display final score

// -IF -> timer reaches zero, alert game over


//Alternate pop1
    // -> addeventlistener on a function 1 ->> function 1 contains....






let questions = document.getElementById("questions");
let response1 = document.getElementById("response1");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let count = document.getElementById("count");
let score = document.getElementById("score");

document.getElementById("name").style.display = "none";

let timeLeft = 60;
let i = 1;
let x = 0;




//The counting thing


/* var idVar = setInterval(() => { 
    timer() 
  }, 1000);
  
  function timer() {    
    timeLeft--;
    count.textContent = timeLeft;
    
  }
   
  function myStopFunction() {
    clearInterval(idVar);
  } */



function stopTimer() {
   if(timeLeft === 0) {
    let timeLeft = x;
   }
   
}


function setInt() {
    
    let num = setInterval(countdown, 1000); 
    
    function countdown() {
    
    timeLeft--;
    count.textContent = timeLeft;
    if(timeLeft === 0){
    clearInterval(num);
    }
    else {
    return;
    }
   }
}

//First Question

function init() {
    document.getElementById("begin").addEventListener("click", function() {

        document.getElementById("questions").hidden = false;
        document.getElementById("response1").hidden = false;
        document.getElementById("response2").hidden = false;
        document.getElementById("response3").hidden = false;
        questions.textContent = "If you apply slice(1, 4) to a variable assigned the string 'banana' what is the result?";
        response1.textContent = "Is a fruit";
        response2.textContent = "bana";
        response3.textContent = "ana";
  
        setInt();
        pop1();
        pop2();
        pop3();
        stopTimer();
       });
    }

function pop1() {
    response1.addEventListener("click", function() {
                
        while(timeLeft > 0){
        timeLeft = timeLeft -10;
        break;
        }

        secondSet();
        stopTimer();
      });
     }

function pop2() {
    response2.addEventListener("click", function() {
                    
        while(timeLeft > 0) {
        timeLeft = timeLeft-10;
        break;
        }
        
        
        secondSet();
        stopTimer();
       });
    }
        
function pop3() {
    response3.addEventListener("click", function() {
                    
        if(timeLeft > 0) {
        timeLeft++;
        }
        else {
        return;
        }

        document.getElementById("score").textContent = i++;
        secondSet();
        stopTimer();
       });
    }

//Second Question
        
function secondSet() {
    
        questions.textContent = "True or False - var x; !var ?";
        response1.textContent = "True";
        response2.textContent = "False";
        document.getElementById("response3").hidden = true;
            
        pop1a();
        pop2a();
        stopTimer();
    }
            
     
function pop1a() {
    response1.addEventListener("click", function() {
                
        if(timeLeft > 0) {
        timeLeft++;
        return;
        }

        document.getElementById("score").textContent = i++;
        thirdSet();
        stopTimer();
       });
    }
           
function pop2a() {
    response2.addEventListener("click", function() {
                
        while(timeLeft > 0) {
        timeLeft = timeLeft -10;
        break;
        }
        

        thirdSet();
        stopTimer();
       });
    }

        
//Third Question

function thirdSet() {
         
        document.getElementById("response3").hidden = false;
        questions.textContent = "Which property moves items across the main axis of a CSS grid or flexbox?";
        response1.textContent = "Justify-content";
        response2.textContent = "Align-items";
        response3.textContent = "Padding-bottom";
  
        pop1b();
        pop2b();
        pop3b();
        stopTimer();
    }


function pop1b() {
    response1.addEventListener("click", function() {
                
        if(timeLeft > 0){
        timeLeft++;
        return;
        }
        
        document.getElementById("score").textContent = i++;
        stats();
        stopTimer();
      });           
    }

function pop2b() {
    response2.addEventListener("click", function() {
                    
        while(timeLeft > 0) {
        timeLeft = timeLeft -10;
        break;
        }
                    
        stats();
        stopTimer();          
       });
    }
        
function pop3b() {
    response3.addEventListener("click", function() {
            
        while(timeLeft > 0) {
        timeLeft = timeLeft -10;
        break;
        }
                            
        stats();
        stopTimer();
       });
    }

//Stats prompt

function stats() {

        var x = document.getElementById("name").value;
        document.getElementById("name").innerHTML = x;
        document.getElementById("name").style.display = "block";
        document.getElementById("questions").textContent = "Please enter your name";
    
        document.getElementById("response1").style.display = "none";
        document.getElementById("response2").style.display = "none";
        document.getElementById("response3").style.display = "none";
    }
   
          

document.getElementById("begin").addEventListener("click", init());

