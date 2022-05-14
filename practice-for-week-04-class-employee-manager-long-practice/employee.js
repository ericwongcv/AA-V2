let addEmployee = require('./manager')

class Employee {
    constructor(name, title, salary, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;

        if (this.boss) {return this.boss.addEmployee(this)};
    }

    bonus(multiplier) {
        return this.salary * multiplier;
    }
}

module.exports = Employee;
