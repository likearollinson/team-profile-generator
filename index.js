//allows necessary modules to be imported
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the manager's office number?",
        },
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "What is the engineer's GitHub user name?",
        },
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend?'
        }
    ]);
};

const generateMainHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    </head>
    
    <body>
        <header>
            <div class="h-100 p-5 border rounded-3" style="background-color: royalblue;">
                <h2 class="text-white" style="text-align: center;">My Team</h2>
                <p></p>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row d-flex justify-content-center" style="margin: 20px;">
                    <div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${answers.managerName}
                                </h5>
                                <p class="card-text">Manager</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${answers.managerID}</li>
                                <li class="list-group-item">Email:<a href="mailto:${answers.managerEmail}"
                                        target="_blank">${answers.managerEmail}</a></li>
                                </li>
                                <li class="list-group-item">Office number: ${answers.managerOffice}</li>
                            </ul>
                        </div>
                    </div>`
const generateEngineerHTML = (answers) =>
    `<div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${answers.engineerName}</h5>
                                <p class="card-text">Engineer</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${answers.engineerID}</li>
                                <li class="list-group-item">Email: <a href="mailto:${answers.engineerEmail}"
                                        target="_blank">${answers.engineerEmail}</a></li>
                                </li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${answers.engineerGit}"
                                        target="_blank">${answers.engineerGit}</a></li>
                            </ul>
                        </div>
                    </div>`
const generateInternHTML = (answer) =>
    `<div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${answer.internName}</h5>
                                <p class="card-text">Intern</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${answer.internID}</li>
                                <li class="list-group-item">Email: <a href="mailto:${answer.internEmail}"
                                        target="_blank">${answer.internEmail}</a></li>
                                <li class="list-group-item">School: ${answer.internSchool}</li>
                            </ul>
                        </div>
                    </div>`
const generateFinalHTML = () =>
    `</div>
            </div>
            </div>
            </div>
        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    
    </html>`

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('./dist/index.html', generateMainHTML(answers)))
        .then((answer) => appendFileAsync('./dist/index.html', generateEngineerHTML(answer)))
        .then((answers) => appendFileAsync('./dist/index.html', generateInternHTML(answers)))
        .then(() => appendFileAsync('./dist/index', generateFinalHTML()))
        .then(() => console.log('Successfully created team list!'))
        .catch((err) => console.error(err));
}

init();