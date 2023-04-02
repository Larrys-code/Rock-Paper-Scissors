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

//firstToThree {Rock Paper Scissors match, first to three wins}
function firstToThree() {
    //make playerScore and computerScore variables
    let playerScore = 0;
    let computerScore = 0;
    //make a result variable
    let result = "";
    let scoreMessage = "";
    //Keep playing whilst playerScore and computerScore are < 3
    while (playerScore < 3 && computerScore < 3) {
        //result is the output of playRound
        result = playRound();
        switch (result) {
            //if the result of playRound is win +1 to playerScore, report the score
            case "win" :
                playerScore = ++playerScore;
                scoreMessage = `The Score is Player: ${playerScore} Computer: ${computerScore}`;
                alert(scoreMessage);
                break;
            //if the result is loss +1 to computerScore, report the score
            case "loss" :
                computerScore = ++computerScore;
                scoreMessage = `The Score is Player: ${playerScore} Computer: ${computerScore}`;
                alert(scoreMessage);
                break;
            //if the result is draw, report the score
            default :
                scoreMessage = `The Score is Player: ${playerScore} Computer: ${computerScore}`;
                alert(scoreMessage);
        }
    }
    //if playerScore === 3, report victory
    if (playerScore === 3){
        alert("YOU WON!");
        return "win";
    }else if (computerScore === 3){
    //if computerScore === 3, report defeat
        alert("YOU LOST!");
        return "loss";
    }
}