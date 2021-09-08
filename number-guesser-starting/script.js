let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    // this will gengerate a number between 0 and 9 
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2)
}

function compareGuesses(humanNum, computerNum, target) {
    let compGuess = Math.abs(target - computerNum);
    let humanGuess = Math.abs(target - humanNum);

    if (humanNum > 9 || humanNum < 0) {
        alert('Please enter a number between 0 and 9');
    }

    human = getAbsoluteDistance(humanNum, target)
    computer = getAbsoluteDistance(computerNum, target)

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

