// Your code here

const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

let sayName = john.sayName;
let boundSayName = sayName.bind(john);

setTimeout(boundSayName, 2000);

let sayOccupation = john.sayOccupation;
let boundSayOccupation = sayOccupation.bind(john);

setTimeout(boundSayOccupation, 3000);
