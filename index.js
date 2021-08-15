const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlGenerator = require('./src/htmlGenerator');


//allows necessary modules to be imported
const inquirer = require('inquirer');
const fs = require('fs');

const teamArr = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error('Please enter a manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.error('Please enter a valid ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.error('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error('Please enter a valid office number!');
                    return false;
                }
            }
        }
    ])
        .then(mangerData => {

            const { name, id, email, officeNumber } = mangerData;
            const manager = new Manager(name, id, email, officeNumber);

            teamArr.push(manager);
            console.log(manager);
        })
}

const employeePrompt = () => {
    console.log(`
    ----------------------------------------------------------------
    Adding more employees to the team!
    ----------------------------------------------------------------
    `)

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error('Please enter an employee name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.error('Please enter a valid ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.error('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub user name?",
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error('Please enter a GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.error('Please enter a valid school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to create a new employee?',
            default: false
        }
    ])

        .then(employeeInput => {

            let { name, id, email, role, gitHub, school, confirmNewEmployee } = employeeInput;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, gitHub);
            }

            console.log(employee);

            if (role === 'Intern') {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArr.push(employee);

            if (confirmNewEmployee) {
                return employeePrompt(teamArr);
            } else {
                return teamArr;
            }
        })
};


const writeFile = inputs => {
    fs.writeFile('./dist/index.html', inputs, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Success! HTML generated!')
        }
    })
};

managerPrompt()
    .then(employeePrompt)
    .then(teamArr => {
        return htmlGenerator(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });