//console.log("Hello world")
var playerScore = 0;
var computerScore = 0;
var tie = 0;

function rock() {
    let userinput = 2
    let computerinput = ai();
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1
    }
    if (userinput > computerinput){
        console.log("You Win!")
        playerScore += 1
    }
    else{
        console.log("You Tied.")
        tie += 1
    }
}

function paper() {
    let userinput = 2
    let computerinput = ai()
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1
    }
    if (userinput > computerinput){
        console.log("You Win!")
        playerScore += 1
    }
    else{
        console.log("You Tied.")
        tie + 1
    }
}

function scissors(){
     let userinput = 2
    let computerinput = ai()
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1
    }
    if (userinput > computerinput){
        console.log("You Win!")
        playerScore += 1
    }
    else{
        console.log("You Tied.")
        tie += 1
    }
}

function ai(){
    let random = Math.floor(Math.random() * 3 )+ 1;
    return random;
}

function scoreUpdate(){
    let playerElem = document.getElementById("playerscore");
    let compElem = document.getElementById("comp");
    let tiedElem = document.getElementById("tie");

    if (playerElem) playerElem.textContent = playerScore;
    if (compElem) playerElem.textContent = computerScore;
    if (tiedElem) playerElem.textContent = tie;
}
scoreUpdate();