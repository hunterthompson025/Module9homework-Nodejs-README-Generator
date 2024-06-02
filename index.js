// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Write a short description of your project',
            },
            {
                type: 'list',
                message: 'What license should your project have?',
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?',
                default: 'npm test',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about this repo?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
            },
];
        
// Function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
};


// Initalize function
const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeFile('README.md', markdownContent);
        })
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
