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
      
            countDown();
            questionOne();
        });
}

function questionOne() {
    
    document.getElementById("questions").hidden = false;
    document.getElementById("response1").hidden = false;
    document.getElementById("response2").hidden = false;
    document.getElementById("response3").hidden = false;

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



init();