//getComputerSelection {Random rock paper or scissors}
function getComputerSelection() {
    //let choice be a string
    let choice = "";
    //let chooser be a random number between 1 and 3
    let chooser = Math.floor(Math.random() * (3) + 1);
    //switch chooser === 1 : choice = rock
    //                   2 : choice = paper
    //                   3 : choice = scissors
    switch (chooser) {
        case 1 :
            choice = "rock";
            break;
        case 2 :
            choice = "paper";
            break;
        case 3 :
            choice = "scissors";
            break;
        default :
            choice = console.log("ComputerSelection is broken");
            break;
    }
    //return choice
    return choice;
}

//playRound {Game of Rock Paper Scissors}
function playRound(playerSelection) {

    //make a gameOutcome
    let gameOutcome = "";
    //getComputerSelection as computerSelection
    let computerSelection = getComputerSelection();

    switch(playerSelection){
        case "rock":
            playerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L181,67L181,83L197,83L197,149L181,149L181,181L165,181L165,197L149,197L149,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM69,101L53,101L53,179L69,179L69,195L99,195L99,179L115,179L115,165L99,165L99,149L67,149L67,131L99,131L99,115L115,115L115,99L133,99L133,115L149,115L149,131L163,131L163,85L69,85L69,101ZM147,181L117,181L117,195L147,195L147,181ZM179,133L165,133L165,147L179,147L179,133ZM115,133L101,133L101,147L115,147L115,133ZM131,117L117,117L117,131L131,131L131,117ZM163,149L117,149L117,163L163,163L163,149ZM35,101L21,101L21,179L35,179L35,101Z");
            break;
        case "paper":
            playerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L83,67L83,51L99,51L99,19L115,19L115,3L133,3L133,19L149,19L149,67L229,67L229,83L245,83L245,115L261,115L261,133L245,133L245,165L229,165L229,181L213,181L213,197L197,197L197,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM21,179L35,179L35,101L21,101L21,179ZM53,179L69,179L69,195L195,195L195,181L163,181L163,163L227,163L227,149L163,149L163,131L243,131L243,117L163,117L163,99L227,99L227,85L133,85L133,115L149,115L149,165L131,165L131,117L117,117L117,133L101,133L101,149L67,149L67,131L99,131L99,115L115,115L115,83L131,83L131,21L117,21L117,53L101,53L101,69L85,69L85,85L69,85L69,101L53,101L53,179Z");
            break;
        case "scissors":
            playerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L229,67L229,83L245,83L245,115L261,115L261,133L245,133L245,149L181,149L181,181L165,181L165,197L149,197L149,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM69,101L53,101L53,179L69,179L69,195L99,195L99,179L115,179L115,165L99,165L99,149L67,149L67,131L99,131L99,115L115,115L115,99L133,99L133,115L149,115L149,131L163,131L163,85L69,85L69,101ZM163,149L117,149L117,163L163,163L163,149ZM147,181L117,181L117,195L147,195L147,181ZM35,101L21,101L21,179L35,179L35,101ZM131,117L117,117L117,131L131,131L131,117ZM115,133L101,133L101,147L115,147L115,133ZM243,117L181,117L181,131L243,131L243,117ZM227,85L181,85L181,99L227,99L227,85Z");
            break;
    }
    switch(computerSelection){
        case "rock":
            computerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L181,67L181,83L197,83L197,149L181,149L181,181L165,181L165,197L149,197L149,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM69,101L53,101L53,179L69,179L69,195L99,195L99,179L115,179L115,165L99,165L99,149L67,149L67,131L99,131L99,115L115,115L115,99L133,99L133,115L149,115L149,131L163,131L163,85L69,85L69,101ZM147,181L117,181L117,195L147,195L147,181ZM179,133L165,133L165,147L179,147L179,133ZM115,133L101,133L101,147L115,147L115,133ZM131,117L117,117L117,131L131,131L131,117ZM163,149L117,149L117,163L163,163L163,149ZM35,101L21,101L21,179L35,179L35,101Z");
            break;
        case "paper":
            computerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L83,67L83,51L99,51L99,19L115,19L115,3L133,3L133,19L149,19L149,67L229,67L229,83L245,83L245,115L261,115L261,133L245,133L245,165L229,165L229,181L213,181L213,197L197,197L197,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM21,179L35,179L35,101L21,101L21,179ZM53,179L69,179L69,195L195,195L195,181L163,181L163,163L227,163L227,149L163,149L163,131L243,131L243,117L163,117L163,99L227,99L227,85L133,85L133,115L149,115L149,165L131,165L131,117L117,117L117,133L101,133L101,149L67,149L67,131L99,131L99,115L115,115L115,83L131,83L131,21L117,21L117,53L101,53L101,69L85,69L85,85L69,85L69,101L53,101L53,179Z");
            break;
        case "scissors":
            computerIcon.setAttribute("d", "M19,99L19,83L67,83L67,67L229,67L229,83L245,83L245,115L261,115L261,133L245,133L245,149L181,149L181,181L165,181L165,197L149,197L149,213L67,213L67,197L19,197L19,181L3,181L3,99L19,99ZM69,101L53,101L53,179L69,179L69,195L99,195L99,179L115,179L115,165L99,165L99,149L67,149L67,131L99,131L99,115L115,115L115,99L133,99L133,115L149,115L149,131L163,131L163,85L69,85L69,101ZM163,149L117,149L117,163L163,163L163,149ZM147,181L117,181L117,195L147,195L147,181ZM35,101L21,101L21,179L35,179L35,101ZM131,117L117,117L117,131L131,131L131,117ZM115,133L101,133L101,147L115,147L115,133ZM243,117L181,117L181,131L243,131L243,117ZM227,85L181,85L181,99L227,99L227,85Z");
            break;
    }

    //gameOutcome is winOrLose(playerSelection, computerSelection)
    gameOutcome = winOrLose(playerSelection, computerSelection);

    //return gameOutcome
    return gameOutcome;
}

//winOrLose {Game of Rock Paper Scissors}
function winOrLose(playerSelection, computerSelection) {
    //Accept variables playerSelection and computerSelection
    //if playerSelection === computerSelection, return draw
    if (playerSelection === computerSelection) {
        return "draw";
    }else if (playerSelection === "paper") {
        //if playerSelection === paper
        //if computerSelection === scissors, return loss
        //else return win
        return (computerSelection === "scissors" ? "loss" : "win");
    }else if (playerSelection === "rock") {
        //if playerSelection === rock
        //if computerSelection === paper, return loss
        //else return win
        return (computerSelection === "paper" ? "loss" : "win");
    }else if (playerSelection === "scissors") {
        //if playerSelection === scissors
        //if computerSelection === rock, return loss
        //else return win
        return (computerSelection === "rock" ? "loss" : "win");
    }
}

//firstToThree {Rock Paper Scissors match, first to three wins}
function firstToThree(playerSelection) {
    //make a result variable
    let result = "";
    //result is the output of playRound
    result = playRound(playerSelection);
    switch (result) {
            //if the result of playRound is win +1 to playerScore, report the score
        case "win" :
            playerScore = ++playerScore;
            playerScoreDisplay.textContent = `${playerScore}`;
            computerScoreDisplay.textContent = `${computerScore}`;
            resultMessage.textContent = "nice";
            break;
        //if the result is loss +1 to computerScore, report the score
        case "loss" :
            computerScore = ++computerScore;
            computerScoreDisplay.textContent = `${computerScore}`;
            playerScoreDisplay.textContent = `${playerScore}`;
            resultMessage.textContent = "oof";
            break;
        //if the result is draw, report the score
        default :
            computerScoreDisplay.textContent = `${computerScore}`;
            playerScoreDisplay.textContent = `${playerScore}`;
            resultMessage.textContent = "···";
    }
    
    //if playerScore === 3, report victory
    if (playerScore === 3){
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = "WINNER!";
        return "win";
    }else if (computerScore === 3){
    //if computerScore === 3, report defeat
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = "LOSER!";       
        return "loss";
    }
}
let playerScore = 0;
let computerScore = 0;
const playerIcon = document.getElementById("playerChoice").firstElementChild;
const computerIcon = document.getElementById("computerChoice").firstElementChild;
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultMessage = document.querySelector(".message");
const choiceButton = document.querySelectorAll(".rpsButton");
choiceButton.forEach(button => button.addEventListener("click", function(){firstToThree(this.id)}));
console.log(playerIcon.getAttribute("d"));