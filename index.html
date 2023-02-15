const fs = require('fs')
const inquirer = require('inquirer')
const htmlGenerator = require('./lib/html_generator')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let employees = [];

function engineerPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Engineer's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineer's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineer's E-Mail: "
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Engineer's GitHub: "
        }
        ])
        .then((engineerResponse => {
            let newEngineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.gitHub);
            employees.push(newEngineer);
            buildTeam();      
        }))
};

function internPrompt() {
    inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Intern's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern's E-Mail: "
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Intern's School: "
        }
        ])
        .then((internResponse => {
            let newIntern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.gitHub);
            employees.push(newIntern);
            buildTeam();      
        }))
};

function compileTeam() {
    let teamProfile = htmlGenerator(employees)

    fs.writeFile('./dist/teamProfile.html', teamProfile,(err) =>
    err ? console.log(err) : console.log('Team profile has been generated.'))
};

function buildTeam() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'buildTeam',
        choices: ['Add an Engineer', 'Add an Intern', 'Generate My Team'],
        message: 'Would you like to add an engineer, intern, or generate your team?',
    }])
    .then(buildTeam => {
        if(buildTeam.buildTeam === 'Add an Engineer') {
            engineerPrompt()
        } else if(buildTeam.buildTeam === 'Add an Intern') {
            internPrompt()
        } else if(buildTeam.buildTeam === 'Generate My Team')
            compileTeam()
    })
};

function init() {
        inquirer
        .prompt([{
            type: 'input',
            name: "name",
            message: "Manager's Name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's E-Mail: "
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's Office Number: "
        }
        ])
        .then((managerResponse => {
            let newManager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);
            employees.push(newManager);
            buildTeam();
        }))
    };

init();