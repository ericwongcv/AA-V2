// Phase 1: Initialize global variable
secretNumber = 100;

// checkGuess

let checkGuess = (number) => {
    if (number === secretNumber) {
        console.log('Correct!')
        return true;
    } else if (number > secretNumber) {
        console.log('Too high');
        return false;
    } else if (number < secretNumber) {
        console.log('Too low');
        return false;
    }
}

// askGuess

const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

let askGuess = () => {

    rl.question('Enter a guess: ', (answer) => {

        numAttempts--;

      if (checkGuess(Number(answer))) {
          console.log(`You win!`);
          rl.close();
      } else if (numAttempts === 0) {
          console.log('You lose');
          rl.close();
      } else {
          askGuess()
      }
    });
}

// Phase II: Making it Random

// randomInRange
let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// askRange

let firstQuestion = (answer) => {
    min = Number(answer);

    rl.question('Enter a max number: ', secondQuestion);
}

let secondQuestion = (answer) => {

    max = Number(answer);

    secretNumber = randomInRange(min, max);
    console.log(`I am thinking of a number between ${min} and ${max}`);
    askGuess();
}

let askRange = () => {
    let min;
    let max;
    rl.question('Enter a min number: ', firstQuestion);
}

// Limit turns to 5

numAttempts = 5;

// askLimit

let askLimit = () => {
    rl.question('Enter the limit of guesses: ', (answer) => {
        numAttempts = Number(answer)

        askRange();
    })
}

askLimit();
