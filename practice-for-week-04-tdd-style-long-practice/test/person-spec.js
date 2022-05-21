// Your code here

const chai = require('chai');
const expect = chai.expect;

const Person = require('../problems/person');

let james;
let alison;
let updated;

beforeEach( () => {
    james = new Person('James', 23);

    alison = new Person('Alison', 21);

    update = james.update.bind(james);
    tryUpdate = james.tryUpdate.bind(james);
});

describe('Person', function() {
    it('should initialize a Person with a name', function() {
        expect(james.name).to.equal('James');
    });

    it('should initialize a Person with an age', function() {
        expect(james.age).to.equal(23);
    });
});

describe('sayHello', function() {
    it('should return a string of the Person instance name and a greeting message', function() {
        expect(james.sayHello()).to.equal('James says hi')
    });
});

describe('visit(otherPerson)', function() {
    it('should return a string stating that this instance visited the passed-in person instance', function() {
        expect(james.visit(alison)).to.equal('James visited Alison')
    })
});

describe('switchVisit(otherPerson', function() {
    it('should invoke the visit function of the parameter (otherPerson), passing in the current instance as argument', function() {
        expect(james.switchVisit(alison)).to.equal('Alison visited James');
    });
});

describe('update(obj)', function() {
    let obj = 1;

    it('should throw a TypeError with a clear message if the argument is not an object', function() {
        expect(() => james.update(obj)).to.throw(TypeError, 'Argument is not an object');
    });


    it("should update the instance's properties to match the passed-in object's name", function() {
        expect(update(alison).name).to.equal('Alison');
    });

    it("should update the instance's properties to match the passed-in object's age", function() {
        expect(update(alison).age).to.equal(21);
    });

    let jim = new Person();

    it('should have a name property', function() {
        expect(() => update(jim)).to.throw(TypeError, 'object does not have a name or age property');
    });
});

describe('tryUpdate(obj', function() {
    it('should return true if update was successful', function() {
        expect(tryUpdate(alison)).to.equal(true);
    });

    let obj = 1;

    it('should return false if update failed', function() {
        expect(tryUpdate(obj)).to.equal(false);
    });
});
