let uScore= 0;
let cScore = 0;
let tScore = 0;
const allChoices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const TieScore = document.querySelector("#tie-score");
const message = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");

// console.log(msgContainer);
// console.log(allChoices);
// console.log(userScore);
// console.log(compScore);
// console.log(message);

function genCompChoice(){
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.trunc(Math.random()*3);
    return options[randInd];
}

function drawGame(userChoice){
    tScore++;
    TieScore.innerText = tScore;
    message.innerText=`Draw Game. Both chose ${userChoice}`;
    msgContainer.style.backgroundColor = "yellow";
    message.style.color = "black";
}

function compWin(userChoice, compChoice){
    cScore++;
    compScore.innerText = cScore;
    message.innerText = `Computer Won - ${userChoice} vs ${compChoice}`;
    msgContainer.style.backgroundColor = "red";
}

function userWin(userChoice, compChoice){
    uScore++;
    userScore.innerText = uScore;
    message.innerText = `You Won - ${userChoice} vs ${compChoice}`;
    msgContainer.style.backgroundColor = "green";
}

function playGame(userChoice){
    const compChoice = genCompChoice();
    console.log(`computer choice - ${compChoice}`);
    if(userChoice === compChoice){
        drawGame(userChoice);
    }
    else if(userChoice === 'rock'){
        if(compChoice === 'paper'){
            compWin(userChoice, compChoice);
        }
        if(compChoice === 'scissors'){
            userWin(userChoice, compChoice);
        }
    }
    else if(userChoice === 'paper'){
        if(compChoice === 'rock'){
            userWin(userChoice, compChoice);
        }
        if(compChoice === 'scissors'){
            compWin(userChoice, compChoice);
        }
    }
    else if(userChoice === 'scissors'){
        if(compChoice === 'rock'){
            compWin(userChoice, compChoice);
        }
        if(compChoice === 'paper'){
            userWin(userChoice, compChoice);
        }
    }
}


allChoices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(`user choice - ${userChoice}`);
        playGame(userChoice);
    })
})
