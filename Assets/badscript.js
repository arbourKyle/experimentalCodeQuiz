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
    let name = document.getElementById("name");
    let submit = document.getElementById("submit");
    
    document.getElementById("name").style.display = "none";
    
    let timeLeft = 60;
    let i = 1;
    let x = 0;
    
    //First Question
    
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
    
            document.getElementById("questions").hidden = false;
            document.getElementById("response1").hidden = false;
            document.getElementById("response2").hidden = false;
            document.getElementById("response3").hidden = false;
            questions.textContent = "If you apply slice(1, 4) to a variable assigned the string 'banana' what is the result?";
            response1.textContent = "Is a fruit";
            response2.textContent = "bana";
            response3.textContent = "ana";
      
            countDown();
            pop1();
            pop2();
            pop3();
           });
        }
    
    function pop1() {
        response1.addEventListener("click", function() {
                    
            if(timeLeft > 10) {
                timeLeft = timeLeft - 10;
            }
                    
            secondSet();
            
          });
         }
    
    function pop2() {
        response2.addEventListener("click", function() {
                        
            if(timeLeft > 10) {
                timeLeft = timeLeft - 10;
            }
                            
            secondSet();
            });
        }
            
    function pop3() {
        response3.addEventListener("click", function() {
                        
            document.getElementById("score").textContent = i++;
            
    
            console.log(i);
            secondSet();
            
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
            pop3a();
        }
                
         
    function pop1a() {
        response1.addEventListener("click", function() {
                    
            document.getElementById("score").textContent = i++;
            
            console.log(i);
            thirdSet();
           
           });
        }
               
    function pop2a() {
        response2.addEventListener("click", function() {
                    
            if(timeLeft > 10) {
                timeLeft = timeLeft - 10;
            }
            
            
            thirdSet();
            
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
        }
    
    
    function pop1b() {
        response1.addEventListener("click", function() {
            
            document.getElementById("score").textContent = i++;
                        
            console.log(i);
            stats();        
          });           
        }
    
    function pop2b() {
        response2.addEventListener("click", function() {
                        
            if(timeLeft > 10) {
                timeLeft = timeLeft - 10;
            }
                               
            stats();                  
           });
        }
            
    function pop3b() {
        response3.addEventListener("click", function() {
                
            if(timeLeft > 10) {
                timeLeft = timeLeft - 10;
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
    
    function enterName() {
        document.getElementById("submit").addEventListener("click", function() { 
        
            let finalScore = {
            nameInput: nameInput.value,
            score: score.value
            }
    
            localStorage.setItem("finalScore", JSON.stringify(finalScore));
            displayMessage();
            });
        }
    
    
    function displayMessage() {
    
        let retrieved = JSON.parse(localStorage.getItem("finalScore"));
        if (retrieved !== null) {
            document.querySelector("questions").textContent = finalScore.nameInput + 
          " you scored " + finalScore.score;
        }
            
    }
       
              
    
    document.getElementById("begin").addEventListener("click", init());