// Choices array
const choices = ['rock', 'paper', 'scissors']

// Get buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

// Get results paragraph
const resultsPara = document.getElementById('results');

// Get scores
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

// Randomly return rock, paper, or scissors
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}

// Render result to screen
function renderResult(message) {
    resultsPara.textContent = message
    if(playerScore.textContent == '5' || computerScore.textContent == '5'){
        if(playerScore.textContent == '5') {
            renderGameOver('You')
        } else {
            renderGameOver('The computer')
        }
        
    }
}

// Render game over and reset button
function renderGameOver(winner) {

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    const gameOver = document.createElement('p')
    gameOver.setAttribute('id', 'gameOverText')
    const resetGame = document.createElement('button')
    resetGame.setAttribute('id', 'resetGameBtn')

    gameOver.textContent = `Game Over! ${winner} won!`
    resetGame.textContent = "New Game?"
    resetGame.addEventListener('click', resetScores)
    resultsPara.append(gameOver, resetGame)
}

// Reset scores
function resetScores() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    resultsPara.removeChild(document.getElementById('gameOverText'));
    resultsPara.removeChild(document.getElementById('resetGameBtn'));
    resultsPara.textContent = '';
    // document.getElementById('gameOverText').remove()
    // document.getElementById('resetGameBtn').remove()
}

const playMatch = (playerSelection) => {
    // Generate computer Selection
    const computerSelection = computerPlay();
    let message = '';
    
    // Determine who wins
    if(playerSelection === computerSelection) {
        message = 'It\'s a tie!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore.textContent = parseInt(playerScore.textContent) + 1
    }
    else {
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1
    }
    // Render result
    renderResult(message);
}

rockBtn.addEventListener('click', () => playMatch('rock'));
paperBtn.addEventListener('click', () => playMatch('paper'));
scissorsBtn.addEventListener('click', () => playMatch('scissors'));
