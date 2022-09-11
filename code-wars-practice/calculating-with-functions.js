function zero(op) { return op ? op(0) : 0 };
function one(op) { return op ? op(1) : 1 };
function two(op) { return op ? op(2) : 2 };
function three(op) { return op ? op(3) : 3 };
function four(op) { return op ? op(4) : 4 };
function five(op) { return op ? op(5) : 5 };
function six(op) { return op ? op(6) : 6 };
function seven(op) { return op ? op(7) : 7 };
function eight(op) { return op ? op(8) : 8 };
function nine(op) { return op ? op(9) : 9 };

function plus(b) { return function res(a) { return a + b } };
function minus(b) { return function res(a) { return a - b } };
function times(b) { return function res(a) { return a * b } };
function dividedBy(b) { return function res(a) { return parseInt(a / b) } };

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// function zero(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 0 + opVal[0];
//             case 'minus':
//                 return 0 - opVal[0];
//             case 'times':
//                 return 0 * opVal[0];
//             case 'divide':
//                 return parseInt(0 / opVal[0]);
//         };
//     };
//     return 0;
// }
// function one(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 1 + opVal[0];
//             case 'minus':
//                 return 1 - opVal[0];
//             case 'times':
//                 return 1 * opVal[0];
//             case 'divide':
//                 return parseInt(1 / opVal[0]);
//         };
//     };
//     return 1;
// }
// function two(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 2 + opVal[0];
//             case 'minus':
//                 return 2 - opVal[0];
//             case 'times':
//                 return 2 * opVal[0];
//             case 'divide':
//                 return parseInt(2 / opVal[0]);
//         };
//     };
//     return 2;
// }
// function three(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 3 + opVal[0];
//             case 'minus':
//                 return 3 - opVal[0];
//             case 'times':
//                 return 3 * opVal[0];
//             case 'divide':
//                 return parseInt(3/ opVal[0]);
//         };
//     };
//     return 3;
// }
// function four(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 4 + opVal[0];
//             case 'minus':
//                 return 4 - opVal[0];
//             case 'times':
//                 return 4 * opVal[0];
//             case 'divide':
//                 return parseInt(4 / opVal[0]);
//         };
//     };
//     return 4;
// }
// function five(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 5 + opVal[0];
//             case 'minus':
//                 return 5 - opVal[0];
//             case 'times':
//                 return 5 * opVal[0];
//             case 'divide':
//                 return parseInt(5 / opVal[0]);
//         };
//     };
//     return 5;
// }
// function six(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 6 + opVal[0];
//             case 'minus':
//                 return 6 - opVal[0];
//             case 'times':
//                 return 6 * opVal[0];
//             case 'divide':
//                 return parseInt(6 / opVal[0]);
//         };
//     };
//     return 6;
// }
// function seven(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 7 + opVal[0];
//             case 'minus':
//                 return 7 - opVal[0];
//             case 'times':
//                 return 7 * opVal[0];
//             case 'divide':
//                 return parseInt(7 / opVal[0]);
//         };
//     };
//     return 7;
// }
// function eight(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 8 + opVal[0];
//             case 'minus':
//                 return 8 - opVal[0];
//             case 'times':
//                 return 8 * opVal[0];
//             case 'divide':
//                 return parseInt(8 / opVal[0]);
//         };
//     };
//     return 8;
// }
// function nine(opVal) {
//     if (opVal !== undefined) {
//         switch (opVal[1]) {
//             case 'plus':
//                 return 9 + opVal[0];
//             case 'minus':
//                 return 9 - opVal[0];
//             case 'times':
//                 return 9 * opVal[0];
//             case 'divide':
//                 return parseInt(9 / opVal[0]);
//         };
//     };
//     return 9;
// }

// function plus(num) {
//     return [num, 'plus'];
// }
// function minus(num) {
//     return [num, 'minus'];
// }
// function times(num) {
//     return [num, 'times'];
// }
// function dividedBy(num) {
//     return [num, 'divide'];
// }

// console.log(seven(times(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));
