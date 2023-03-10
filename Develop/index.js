// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const descriptiveQuestions = [
    'What was your motivation?', 
    'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")', 
    'What problem does it solve?',
    'What did you learn?'
];

//console.log(questions);

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "Enter Your Project Title",
      },
    {
      type: 'input',
      name: 'Descriptive0',
      message: descriptiveQuestions[0],
    },
    {
    type: 'input',
      name: 'Descriptive1',
      message: descriptiveQuestions[1],
    },
    {
    type: 'input',
      name: 'Descriptive2',
      message: descriptiveQuestions[2],
    },
    {
    type: 'input',
        name: 'Descriptive3',
        message: descriptiveQuestions[3],
    },
    {
    type: 'input',
        name: 'Contents',
        message: "Enter instructions for your table of contents, to show the user how to navigate in your README",
    },
    {
    type: 'input',
        name: 'Installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
  ])
  .then((data) => {
    const writeToFile = `# ${data.title}\n` 
        + `\n## Description\n \n - ${data.Descriptive0}\n - ${data.Descriptive1}\n - ${data.Descriptive2}\n - ${data.Descriptive3}\n`
        + `\n## Table of Contents\n\n ${data.Contents} \n\n 
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)\n`
        + `\n## Installation\n\n ${data.Installation}\n`;
    
    console.log(data.title);
    const filename = `README.md`;
        fs.writeFile(filename, writeToFile, (err) => {
            if (err)
            console.log(err) 
        });
    
  });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    //const READMe =  generateMarkdown();
    /*
    const fileName = 'README.md';
    
    fs.writeFile(fileName, READMe, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}`);
    })*/
}

// Function call to initialize app
init();
