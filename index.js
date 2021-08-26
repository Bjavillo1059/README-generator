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
const path = require('path'); // relative paths are used
const inq = require('inquirer');


const badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your application?'
    },
    {
        name: 'Description',
        type: 'input',
        message: 'Please describe what you are doing within this application?'
    },
    {
        name: 'Table of Contents',
        type: 'checkbox',
        message: 'Select the following items you want to add for your TOC',
        choices: ['Description:', 'Technology Used:', 'License', 'Contributing', 'Questions',]
    },
    {
        name: 'License',
        type: 'confirm',
        message: 'Do you want to include an MIT license for your application?'
    },
    {
        name:'Usage',
        type: 'checkbox',
        message: 'Select the following stacks used for this README.md...',
        choices: ['HTML', 'CSS', 'JavaScript', 'Other...',]
    },
    // {
    //     name: 'Contributing'
    // },
    // {
    //     name: 'Tests'
    // },
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
    .then(function (data) {
        genMD(data)
        console.log(data)
    }) 
}


function genMD(info) {
    let markdown = "";

    if (info.License) { // already a boolean statement
        markdown += License;
    } // no need to add else statement

    markdown += `
# ${info.title} 
    `; // calls on the object info with the title property

    fs.writeFileSync("readme.md", markdown) // what you what you want to name your file and where it lives

}

// Function call to initialize app
init();
