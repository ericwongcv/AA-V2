const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength, message, ...params) {
    super(...params);

    this.name = 'MaximumLengthExceededError';


    if (excessLength === undefined) {
      this.message = 'Maximum length exceeded'
    } else {
      this.message = message || `Maximum length exceeded by ${excessLength}`;
    }
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
