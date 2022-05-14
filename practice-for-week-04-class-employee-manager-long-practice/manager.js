let Employee = require('./employee')

class Manager extends Employee {
    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.employees = [];
    }

    addEmployee(employee) {
        return this.employees.push(employee);
    }

    bonus(multiplier) {

        return (this.salary + this.bonusCounter()) * multiplier;
    }

    bonusCounter() {
        let employeeSalary = 0;

        this.employees.forEach( employee => {
            if (employee instanceof Manager) {
                employeeSalary += employee.salary + employee.bonusCounter();
            } else {
                employeeSalary += employee.salary;
            }
        })
        return employeeSalary;
    }
}

let hobbes = new Manager('Hobbes', 'Founder', 1000000);
let calvin = new Manager('Calvin', 'Director', 130000, hobbes);
let susie = new Manager('Susie', 'TA Manager', 100000, calvin);
let lily = new Employee('Lily', 'TA', 90000, susie);
let clifford = new Employee('Lily', 'TA', 90000, susie);

console.log(hobbes.bonus(0.05));
console.log(calvin.bonus(0.05));
console.log(susie.bonus(0.05));
console.log(lily.bonus(0.05));
console.log(clifford.bonus(0.05));
