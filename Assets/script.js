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
    let i = 0;
    let x = 0;

function display(){
    document.getElementById("questions").hidden = false;
    document.getElementById("response1").hidden = false;
    document.getElementById("response2").hidden = false;
    document.getElementById("response3").hidden = false;
}


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
      
            countDown();
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
    	
    document.getElementById("score").textContent = i += 1;
    questionTwo();
});

response2.addEventListener("click", function(){
        
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    questionTwo();
});

response3.addEventListener("click", function(){
    
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    questionTwo();
});
    display();
    
}

function questionTwo() {
    
    questions.textContent = "Which property moves items across the main axis of a CSS grid or flexbox?";
    response1.textContent = "Padding-bottom";
    response2.textContent = "Align-items";
    response3.textContent = "Justify-content";

response1.addEventListener("click", function(event){
    	
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    
    questionThree();
    
});

response2.addEventListener("click", function(){
        
    if(timeLeft > 10) {
    timeLeft = timeLeft - 10;
    }
    questionThree();
});

response3.addEventListener("click", function(){
    
    document.getElementById("score").textContent = i += 1;
    questionThree();
});
    display();
}

function questionThree() {
    
    document.getElementById("response3").hidden = true;

    questions.textContent = "True or False - var x; !var?";
    response1.textContent = "True";
    response2.textContent = "False";
    

response1.addEventListener("click", function(){
	
    document.getElementById("score").textContent = i += 1;
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
    
    
    // questionTwo();
}

init();