// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');


const License = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

// array of questions for user input
const questions = [    
    {
        name: 'License',
        type: 'confirm',
        message: 'Do you want to include an MIT license for your application?'
    },
    {
        name: 'Description',
        type: 'input',
        message: 'Give a brief description of this application?'
    },
    {
        name: 'Table_of_Contents',
        type: 'checkbox',
        message: 'Select the following items you want to add for your TOC',
        choices: ['License', 'Description', 'Technology Used', 'Contributing', 'Questions',]
    },
    {
        name:'Usage',
        type: 'checkbox',
        message: 'Select the following stacks used for this README.md...',
        choices: ['HTML', 'CSS', 'JavaScript', 'Other...',]
    },
    {
        name: 'GitHub',
        type: 'input',
        message: 'What is your GitHub account name?'
    },
    {
        name: 'Email',
        type: 'input',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
// function writeToFile("README.md", markdown) {
//     let specInfo = "";

//     if ()
// }

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
# Description 
${info.Description}
    `; // calls on the object info with the title property

    markdown += `
# Table_of_Contents
${info.Table_of_Contents}
    `;
    
    markdown += `
# Usage
${info.Usage}
    `;

    markdown += `
# GitHub account info 
${info.GitHub}
    `;

    markdown += `
# Contact email
${info.Email}
    `;

    fs.writeFileSync("README.md", markdown) // what you want to name your file and where it lives

}

// Function call to initialize app
init();
