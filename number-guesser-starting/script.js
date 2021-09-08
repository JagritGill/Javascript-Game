let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    // this will gengerate a number between 0 and 9 
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

function compareGuesses(humanNum, computerNum, target) {
    
    humanGuess = getAbsoluteDistance(humanNum, target);
    compGuess = getAbsoluteDistance(computerNum, target);

    if (humanNum > 9 || humanNum < 0) {
        alert('Please enter a number between 0 and 9');
    }



    if (humanGuess <= compGuess) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

