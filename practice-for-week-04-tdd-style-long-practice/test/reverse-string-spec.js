// Your code here

const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe('reverseString', function() {
    let string = 'fun';

    it('should return the reversed string', function() {
        expect(reverseString(string)).to.equal('nuf');
    });

    let arr = ['cool']

    it('should throw TypeError for arguments that are not a string', function() {
        expect(() => reverseString(arr)).to.throw(TypeError);
    })
});
