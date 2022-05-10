/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

let reverse = string => {
  if (string.length <= 1) {
    return string;
  }
  let last = string.length - 1;
  return string[last] + reverse(string.slice(0, last));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
