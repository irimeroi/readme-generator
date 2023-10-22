// Packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'projectName',
}, {
    type: 'input',
    message: 'Please provide a short description of your project',
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
    name: 'contributions',
    default: 'Fork the project and make a pull request with your new code.'
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    validate: (input) => {
        return input.length > 0
    }
}, {
    type: 'input',
    message: 'What is your email address',
    name: 'email',
    validate: (input) => {
        return input.length > 0
    }
}];

//function to start the app
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

init();
