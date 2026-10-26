const images = ["images/paper.webp", "images/rock.webp", "images/scissors.webp"];

function changePhoto() {
    const playerimg = document.getElementById("playerimg");
    playerimg.src = images[0];
}

changePhoto();


var playerScore = 0;
var computerScore = 0;
var tie = 0;

function rock() {
    let userinput = 2
    let computerinput = ai();
    const playerimg = document.getElementById("playerimg");
    playerimg.src = images[1];
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[0];
    }
    else if(userinput > computerinput){
        console.log("You Win!")
        playerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[2];
    }
    else{
        console.log("You Tied.")
        tie += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[1];
    }
    scoreUpdate();
}

function paper() {
    let userinput = 2
    let computerinput = ai()
    const playerimg = document.getElementById("playerimg");
    playerimg.src = images[0];
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[2];
    }
    else if(userinput > computerinput){
        console.log("You Win!")
        playerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[1];
    }
    else if(userinput === computerinput){
        console.log("You Tied.")
        tie + 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[0];
    }
    scoreUpdate();
}

function scissors(){
    let userinput = 2
    let computerinput = ai()
    const playerimg = document.getElementById("playerimg");
    playerimg.src = images[2];
    if(userinput < computerinput){
        console.log("You Lose!");
        computerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[1];
    }
    else if (userinput > computerinput){
        console.log("You Win!")
        playerScore += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[0];
    }
    else{
        console.log("You Tied.")
        tie += 1;
        const compimg = document.getElementById("compimg");
        compimg.src = images[2];
    }
    scoreUpdate();
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
    if (compElem) compElem.textContent = computerScore;
    if (tiedElem) tiedElem.textContent = tie;
}
scoreUpdate();
