function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n > 1000000) {
    throw new TypeError('argument above range');
  } else if (n < 1) {
    throw new TypeError('argument below range')
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
