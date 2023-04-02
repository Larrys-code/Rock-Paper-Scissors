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
function playRound() {
    //create variable playerSelection
    //ask for user input for playerSelection
    let playerSelection = prompt("Type Rock, Paper or Scissors! ");
    //convert playerSelection to lowercase
    playerSelection = playerSelection.trim().toLowerCase();
    //make an outcomeMessage
    let outcomeMessage = "";
    //make a gameOutcome
    let gameOutcome = "";
    //if playerSelection isn't legal, gameOutcome is retry. else:
    if (!(playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors")){
        gameOutcome = "retry";
    }else{
        //getComputerSelection as computerSelection
        let computerSelection = getComputerSelection();
        //gameOutcome is winOrLose(playerSelection, computerSelection)
        gameOutcome = winOrLose(playerSelection, computerSelection);
        //switch gameOutcome === win : `You Win! ${playerSelection} beats ${computerSelection}!`
        //                       lose : `You Lose! ${computerSelection} beats ${playerSelection}!`
        //                       draw : `You Drawed!`
        switch (gameOutcome){
            case "win" :
                outcomeMessage = `You Win! ${playerSelection} beats ${computerSelection}!`;
                break;
            case "loss" :
                outcomeMessage = `You Lose! ${computerSelection} beats ${playerSelection}!`;
                break;
            case "draw" :
                outcomeMessage = `You Drawed!`;
                break;
        }
    
        //alert outcomeMessage
        alert(outcomeMessage);
    }
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
