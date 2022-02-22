// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee id: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter employee email: "
    },
    {
        type: "input",
        name: "role",
        message: "Enter employee role:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter employee github or leave blank if not an engineer: "
    },
    {
        type: "input",
        name: "school",
        message: "Enter employee school or leave blank if not an intern: "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter employee officeNumber or leave blank if not a manager: "
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            return fs.writeFileSync(path.join(process.cwd(), filename), data);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (responses) {
        writeToFile("team.html", generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
