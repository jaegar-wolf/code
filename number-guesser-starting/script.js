let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const randomInt = Math.floor(Math.random() * 10);
    return randomInt;
}

const getAbsoluteDistance = (number1, number2) => {
    let absolute = Math.abs(number1 - number2);
    return absolute;
}
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const computerDiff = getAbsoluteDistance(secretTarget, computerGuess)
    const humanDiff = getAbsoluteDistance(secretTarget, humanGuess);

    return humanDiff <= computerDiff;
    /*le return au dessus est une 'ternary operation' du code en dessous
    if(computerDiff < humanDiff) {
        return false;
    }
    else if(computerDiff > humanDiff){
        return true;
    }
    else if (computerDiff === humanDiff){
        return true;
    }*/
}

const updateScore = winner => {
    switch(winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
/*
updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);*/

//console.log(compareGuesses(1,5,5));
