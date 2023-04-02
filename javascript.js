//getComputerSelection {Random rock paper or scissors}
    //let choice be a string
    //let chooser be a random number between 1 and 3
    //switch chooser === 1 : choice = rock
    //                   2 : choice = paper
    //                   3 : choice = scissors
    //return choice

//playRound {Game of Rock Paper Scissors}
    //create variable playerSelection
    //ask for user input for playerSelection
    //getComputerSelection as computerSelection
    //gameOutcome is winOrLose(playerSelection, computerSelection)
    //switch gameOutcome === win : `You Win! ${playerSelection} beats ${computerSelection}!`
    //                       lose : `You Lose! ${computerSelection} beats ${playerSelection}!`
    //                       draw : `Your Drawed!`
    //return gameOutcome

//winOrLose {Game of Rock Paper Scissors}
    //Accept variables playerSelection and computerSelection
    //convert playerSelection to lowercase
    //if playerSelection === computerSelection, return draw
    //if playerSelection === paper
        //if computerSelection === scissors, return loss
        //else return win
    //if playerSelection === rock
        //if computerSelection === paper, return loss
        //else return win
    //if playerSelection === scissors
        //if computerSelection === rock, return loss
        //else return win
