const inquirer = require('inquirer');


class Intern {
    constructor(school, role) {
        this.school = school;
        this.role = role;
    }

    getOfficeNumber() {
        this.school = inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the school of the intern:',
            },
        ])
    }

    getRole() {
        this.role = 'Intern';
    }
}

module.exports = Intern;