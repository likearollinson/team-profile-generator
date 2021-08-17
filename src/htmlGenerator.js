const generateMainHTML = (teamCards) =>
    `
    <!DOCTYPE html>
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
                ${teamCards}
                </div>
                </div>
            </main>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
        
        </html>
        `

const generateMangagerCard = (manager) =>
    `
    <div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${manager.name}
                                </h5>
                                <p class="card-text">Manager</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.id}</li>
                                <li class="list-group-item">Email:<a href="mailto:${manager.email}"
                                        target="_blank">${manager.email}</a></li>
                                </li>
                                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                    `

const generateEngineerCard = (engineer) =>
    `
    <div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${engineer.name}</h5>
                                <p class="card-text">Engineer</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${engineer.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.email}"
                                        target="_blank">${engineer.email}</a></li>
                                </li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}"
                                        target="_blank">${engineer.gitHub}</a></li>
                            </ul>
                        </div>
                    </div>
                    `
const generateInternCard = (intern) =>
    `
    <div class="col">
                        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${intern.name}</h5>
                                <p class="card-text">Intern</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${intern.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.email}"
                                        target="_blank">${intern.email}</a></li>
                                <li class="list-group-item">School: ${intern.school}</li>
                            </ul>
                        </div>
                    </div>
                    `

generateFullHTML = (data) => {
    cardArr = [];

    for (i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        console.log(role)
        if (role === 'Manager') {
            const managerCard = generateMangagerCard(employee);
            cardArr.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            cardArr.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateInternCard(employee);
            cardArr.push(internCard);
        }
    }
    const teamCards = cardArr.join('');

    const generateTeam = generateMainHTML(teamCards);
    return generateTeam;
}



module.exports = generateFullHTML;