console.log('hello world')

const choices = ['rock', 'paper', 'scissors']


// Randomly return rock, paper, or scissors
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    // Player wins
    // rock --- scissors
    // paper --- rock
    // scissors --- paper
    if(playerSelection === computerSelection) {
        return 'It\'s a tie!'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}

const playerSelection = window.prompt('Enter you choice.')
const computerSelection = computerPlay()

// console.log(`Player selected ${playerSelection}\nComputer selected ${computerSelection}`);

console.log(playRound(playerSelection, computerSelection));
