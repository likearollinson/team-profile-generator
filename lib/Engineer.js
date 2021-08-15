const inquirer = require('inquirer');


class Engineer {
    constructor(gitHub, role) {
        this.gitHub = gitHub;
        this.role = role;
    }

    getGitHub() {
        this.gitHub = inquirer.prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: 'Please enter the GitHub username of the engineer:',
            },
        ])
    }

    getRole() {
        this.role = 'Engineer';
    }
}

module.exports = Engineer;