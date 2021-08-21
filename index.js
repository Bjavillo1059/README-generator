// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your READEME'
    },
    {
        name: 'Description',
        type: 'input',
        message: 'Please describe what you are doing within this README document?'
    },
    {
        name: 'Table of Contents',
        type: 'input',
        message: 'Please add TOC of information here...'
    },
    {
        name: 'Installation'
    },
    {
        name:'Usage',
        type: 'checkbox',
        message: 'please the following stacks used for this README.md...'
    },
    {
        name: 'License'
    },
    {
        name: 'Contributing'
    },
    {
        name: 'Tests'
    },
    {
        name: 'Questions',
        type: 'input',
        message: 'What is your GitHub account name?'
    },
    {
        name: 'Questions',
        type: 'input',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then(data => {
        console.log(data)
    }) 
}

// Function call to initialize app
init();