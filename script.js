//console.log("Hello world")
let playerScore = 0;
let computerScore = 0;
let tie = 0;

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