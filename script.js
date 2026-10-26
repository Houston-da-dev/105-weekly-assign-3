//console.log("Hello world")


function rock() {
    let userinput = 2
    let computerinput = ai();
    if(userinput < computerinput){
        console.log("You Lose!");
    }
    }
    if (userinput > computerinput){
        console.log("You Win!")
    }
    else{
        console.log("You Tied.")
    }

function paper() {
    let userinput = 2
    let computerinput = ai()
    if(userinput < computerinput){
        console.log("You Lose!");
    }
    }
    if (userinput > computerinput){
        console.log("You Win!")
    }
    else{
        console.log("You Tied.")
    }

function scissors(){
     let userinput = 2
    let computerinput = ai()
    if(userinput < computerinput){
        console.log("You Lose!");
    }
    }
    if (userinput > computerinput){
        console.log("You Win!")
    }
    else{
        console.log("You Tied.")
    }



function ai(){
    let random = Math.floor(Math.random() * 3 )+ 1;
    return random;
}