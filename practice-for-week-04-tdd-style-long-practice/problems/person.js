class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  sayHello() {
    return `${this.name} says hi`;
  };

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  };

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (typeof obj !== 'object') { 
      throw new TypeError('Argument is not an object'); 
    } else if (obj.name === undefined || obj.age === undefined) {
      throw new TypeError('object does not have a name or age property');
    };

    this.name = obj.name;
    this.age = obj.age;

    return this;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (err) {
      return false;
    };
  };
};

module.exports = Person;
