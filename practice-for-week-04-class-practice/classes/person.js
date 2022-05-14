// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      return console.log('introducePeople only takes an array as an argument.');
    } else if (!people.every( el => el instanceof Person)) {
      return console.log("All items in array must be Person class instances.");
    }
    people.forEach( person => {
      return person.introduce();
    })
  }
}

// let brian = new Person('Brian', "Lee", 23);
// let michelle = new Person('Michelle', "Yoh", 55);
// console.log(Person.introducePeople([brian, michelle]));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
