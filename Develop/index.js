// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What was your motivation?', 
    'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")', 
    'What did you learn?'
];

console.log(questions);

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "Enter Your Project Title",
      },
    {
      type: 'input',
      name: 'tite',
      message: questions[0],
    },
  ])
  .then((data) => {
    const writeToFile = `# ${data.title}\n` 
        + `\n# ${data.tite}\n`;
    
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
