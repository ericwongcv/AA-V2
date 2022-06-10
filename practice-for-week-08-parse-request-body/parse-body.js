function firstStep(input) {
  // Your code here
  return input = input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map( el => el.split('='));
}

function thirdStep(input) {
  // Your code here
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < 2; j++) {
      input[i][j] = input[i][j].replace(/\+/g, " ");
    }
  }

  return input;
}

function fourthStep(input) {
  // Your code here

  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < 2; j++) {
      input[i][j] = decodeURIComponent(input[i][j]);
    }
  }

  return input;
}

function fifthStep(input) {
  // Your code here
  let object = {};

  input.forEach( pair => {
    object[pair[0]] = pair[1];
  })

  return object;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

// let input = 'name=Fido&color=black&age=1&description=Hello+World%21'
// input = firstStep(input);
// input = secondStep(input);
// input = thirdStep(input);
// input = fourthStep(input);
// console.log(fifthStep(input));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
