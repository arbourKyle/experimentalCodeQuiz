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


//The counting thing


function start() {
    
    let num = setInterval(countdown, 1000); 
    
    function countdown() {
    
    timeLeft--;
    count.textContent = timeLeft;
    if(timeLeft === 0)
    clearInterval(num);
    }
   }

//First Question

function init() {
	document.getElementById("begin").addEventListener("click", function() {
  
        document.getElementById("name").style.display = "none";
        questions.textContent = "If you apply slice(1, 4) to a variable assigned the string 'banana' what is the result?";
        response1.textContent = "Is a fruit";
        response2.textContent = "bana";
        response3.textContent = "ana";
  
  pop1();
  pop2();
  pop3();
  });
}

function pop1() {
    response1.addEventListener("click", function() {
                
          while(timeLeft > i){
          timeLeft = timeLeft -10;
          break;
        }
        secondSet();
      });
     }

function pop2() {
    response2.addEventListener("click", function() {
                    
            if(timeLeft > i) {
            timeLeft = timeLeft -10;
            }
            else {
            return;
            }
            secondSet();
          });
        }
        
function pop3() {
    response3.addEventListener("click", function() {
                    
            if (timeLeft > i) {
            timeLeft = timeLeft -10;
            }
            else {
            return;
            }
            document.getElementById("score").textContent = i++;
            secondSet();
          });
        }

//Second Question
        
function secondSet() {

            document.getElementById("name").style.display = "none";
            questions.textContent = "True or False - var x; !var ?";
            response1.textContent = "True";
            response2.textContent = "False";
            document.getElementById("response3").style.display = "none";
            
            pop1a();
            pop2a();
          }
            
     
function pop1a() {
    response1.addEventListener("click", function() {
                
               if(timeLeft > i) {
               timeLeft = timeLeft +1;
               }
               else {
               return;
               }
               document.getElementById("score").textContent = i++;
               thirdSet();
            });
           }
           
function pop2a() {
    response2.addEventListener("click", function() {
                
            if(timeLeft > i) {
            timeLeft = timeLeft -10;
            }
            else {
            return;
            }
            thirdSet();   
            });
           }

//Third Question

function thirdSet() {
	  
            document.getElementById("name").style.display = "none";
            questions.textContent = "Which property moves items across the main axis of a CSS grid or flexbox?";
            response1.textContent = "Justify-content";
            response2.textContent = "Align-items";
            response3.textContent = "Padding-bottom";
  
            pop1b();
            pop2b();
            pop3b();
           }


function pop1b() {
    response1.addEventListener("click", function() {
                
          while(timeLeft > i){
          timeLeft = timeLeft +1;
          break;
        }
        document.getElementById("score").textContent = i++;
        stats();
      });           
     }

function pop2b() {
    response2.addEventListener("click", function() {
                    
            if(timeLeft > i) {
            timeLeft = timeLeft -10;
            }
            else {
            return;
            }
            stats();           
          });
        }
        
function pop3b() {
    response3.addEventListener("click", function() {
                    
            if (timeLeft > i) {
            timeLeft = timeLeft -10;
            }
            else {
            return;
            }
            stats();           
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
          

document.getElementById("begin").addEventListener("click", start);
init();

