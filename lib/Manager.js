const inquirer = require('inquirer');


class Manager {
    constructor(officeNumber, role) {
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getOfficeNumber() {
        this.officeNumber = inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the office number of the manager:',
            },
        ])
    }

    getRole() {
        this.role = 'Manager';
    }
}

module.exports = Manager;