let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, comGuess, secretTarget) => { 
    if (humanGuess === comGuess) {
        return true;
    } else if (Math.abs(humanGuess - secretTarget) > Math.abs(comGuess - secretTarget)) {
      return false;
    } else {
      return true;
    }
}

const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber ++;
