// example 1

class SearchSyntaxError extends SyntaxError {
    constructor(...params) {
        // Pass all arguments to parent constructor
        super(...params);

        // Maintains proper stack trace for where error was thrown (available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SearchSyntaxError);
        }

        // The name property should match the class's name
        this.name = 'SearchSyntaxError';
    }
}

let searchError = new SearchSyntaxError();
console.log(searchError);


// example 2. Additional information and custom message

class MissingRequiredFieldError extends Error {
    constructor(fieldName = 'field', ...params) {
        // Pass remaining arguments to parent constructor
        super(...params);

        // Maintains proper stack trace for where error was thrown (available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MissingRequiredFieldError);
        }

        // The name property should match the class's name
        this.name = 'MissingRequiredFieldError';

        // Custom debugging information
        this.fieldName = fieldName;
        this.message = `Missing required field "${fieldName}".`;
        this.date = new Date();
    }
}

try {
    throw new MissingRequiredFieldError('email')
} catch(e) {
    console.error(e.name);        //MissingRequiredFieldError
    console.error(e.fieldName);   //email
    console.error(e.message);     //Missing required field "email"
    console.error(e.stack);       //stacktrace
}
