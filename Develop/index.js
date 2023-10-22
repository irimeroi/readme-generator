// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'projectName',
}, {
    type: 'input',
    message: 'Please provide a short description of your project.',
    name: 'description',
}, {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
}, {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'dependencies',
    default: 'npm i'
}, {
    type: 'input',
    message: 'What command should be run to conduct tests?',
    name: 'tests',
    default: 'npm test'
}, {
    type: 'input',
    message: 'Please provide usage instructions',
    name: 'usage'
}, {
    type: 'input',
    message: 'If contributing is allowed, how does one contribute to the repo to the repo?',
    name: 'contribuitions',
    default: 'Fork the project and make a pull request with your new code'
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
    //add validate to ensure they add the username
}, {
    type: 'input',
    message: 'What is your email address',
    name: 'email'
    //add validate to ensure they add the email
}];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        fs.writeFile('dist/README.md', generateMarkdown(answers), function(error) {
            if (error) {
                console.error(error)
            }
            console.log('Success! You can find your file in the dist directory!')
        })
    })
};

// Function call to initialize app
init();
