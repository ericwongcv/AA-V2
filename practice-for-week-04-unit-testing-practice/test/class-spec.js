const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

let word;

beforeEach( () => {
  word = new Word('hello')
})

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word.word).to.not.equal(undefined);
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('hello');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal('hll');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal('eo');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal('ellohay');
    });
  });
});
