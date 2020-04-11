let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

function compareGuesses(user, computer, target) {
    let userResult = user - target;
    let computerResult = computer - target;
    userResult = Math.abs(userResult);
    computerResult = Math.abs(computerResult);
    if (userResult === computerResult) {
        return true;
    } else if (userResult < computerResult) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore--;
    }
}

const advanceRound = () => currentRoundNumber++;