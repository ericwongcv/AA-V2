// Your code here

const chai = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');
const expect = chai.expect;

describe('returnsThree', function() {

    it('should return the number 3', function() {
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal', function() {
    let number = 3;
    
    it('should return the reciprocal of the argument', function() {
        expect(reciprocal(3)).to.equal(1/3);
    })

    let aboveRange = 1000001;
    let belowRange = 0;

    it('should throw a TypeError if argument is above 1000000', function() {
        expect(() => reciprocal(aboveRange)).to.throw(TypeError);
    })

    it('should throw a TypeError if argument is below 1', function() {
        expect(() => reciprocal(belowRange)).to.throw(TypeError);
    })

});
