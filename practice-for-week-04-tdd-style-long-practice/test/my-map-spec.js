// Your code here

const { assert } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');

chai.use(spies);

const should = chai.should();
const expect = chai.expect;

let array;
let callback;
let map;

beforeEach( () => {
    array = [1, 2, 3];

    callback = el => { return el * 2 };

    map = myMap(array, callback);
})

describe('myMap', function() {
    it('should not mutate the passed in array', function() {
        assert.strictEqual(myMap(array, callback) === myMap(array, callback), false);
    });

    it('Should not call the built-in Array.map', function() {
        let spy = chai.spy.on(myMap(array, callback), 'map');
        expect(spy).to.not.have.been.called();
    });

    it('Should ensure that the callback is invoked once for each element', function() {
        assert.deepEqual(myMap(array, callback), [2, 4, 6]);
    });
})
