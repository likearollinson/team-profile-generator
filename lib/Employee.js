const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }


    getName() {
        return = inquirer.prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'Please enter the name of the employee:',
            },
        ])
    }

    getId() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeId',
                message: 'Please enter the employee ID:',
            },
        ])
    }

    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'Please enter the employee email:',
            },
        ])
    }

    getRole() {
        return 'Employee';
    }
}

const employee = new Employee();
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();



