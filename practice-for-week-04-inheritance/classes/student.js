const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(firstStudent, secondStudent) {
    if (firstStudent.GPA === secondStudent.GPA) {
      return console.log("Both students have the same GPA");
    } else {
      let firstHigher = `${firstStudent.firstName} ${firstStudent.lastName} has the higher GPA.`;
      let secondHigher = `${secondStudent.firstName} ${secondStudent.lastName} has the higher GPA.`;
      return firstStudent.GPA > secondStudent.GPA ? firstHigher : secondHigher;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
