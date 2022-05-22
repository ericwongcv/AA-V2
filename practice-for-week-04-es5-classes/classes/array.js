// Your code here

Array.prototype.isEqual = function(array) {
    return array.every( (el, i) => el === this[i]);
};
