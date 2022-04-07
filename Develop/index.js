const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, renderLicenseBadge, renderLicenseSection, renderLicenseLink} = require('./utils/generateMarkdown');

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

function init() {
    inquirer
        .prompt([...questions])
        .then((answers) => {
            fs.writeFile(`${answers.projectTitle}.md`, generateMarkdown(answers),(err) =>
            err ? console.log(err) : console.log('SUCCESS!'))
    })
};

init();

