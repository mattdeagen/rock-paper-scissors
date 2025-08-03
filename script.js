// FUNCTION: return computers choice which will randomly be 'rock', 'paper', or 'scissors'
function getComputerChoice () {
    const choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random()*3)]
}

// FUNCTION: get the human player's choice (assumes input is valid)
function getHumanChoice () {
    return prompt("Enter your choice: ").toLowerCase();
}

// FUNCTION: play a round, increment winners score, and log a winner announcement
function playRound () {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    return determineWinner(humanChoice, computerChoice);
}

function determineWinner (humanChoice, computerChoice) {
    console.log(`Round result: Human - ${humanChoice} | Computer - ${computerChoice}`)
    // human wins
    if( (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper') ) {
        humanScore++;
        console.log(`Human wins! Scores: Human - ${humanScore} | Computer = ${computerScore}`)
    // computer wins
    } else if ( (computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper') ) {
        computerScore++;
        console.log(`Computer wins! Scores: Human - ${humanScore} | Computer = ${computerScore}`)
    } else {
        console.log("It's a tie!")
    }
}

let humanScore = computerScore = 0;

playRound()
playRound()
playRound()
playRound()
playRound()
