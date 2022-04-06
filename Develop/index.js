// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    // {
    //     type: 'list',
    //     message: 'Please select table of contents.',
    //     name: 'tableOC',
    //     choices: ['Installation'('#installation'), 'Usage'('#usage'), 'Credits'('#credits'), 'License'('#license')],
    // },
    {
        type: 'input',
        message: 'Provide installation steps.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, any third-party assests, or any other features.',
        name: 'credits',
    },
    {
        type: 'checkbox',
        message: 'Select Licenses',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC License', 'GNU GPLv2',],
    },
    
];

inquirer
    .prompt([...questions])
    .then((answers) => {
        fs.writeFile(`${answers.projectTitle}.json`, JSON.stringify(answers),(err) =>
        err ? console.log(err) : console.log('SUCCESS!'))
        generateMarkdown(answers)
});
console.log(answers)

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
