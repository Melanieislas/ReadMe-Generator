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
    {
    type: 'input',
        name: 'Usage',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
    type: 'list',
      message: 'What license would you like to use?',
      name: 'License',
      choices: ['MIT License', 'Mozilla Public License 2.0', 'ISC License (ISC)', 'IBM Public License Version 1.0'],
    },
    {
    type: 'input',
        name: 'Contribute',
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
    type: 'input',
        name: 'Tests',
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
    type: 'input',
        name: 'Github',
        message: "Enter your Github username",
    },
    {
    type: 'input',
        name: 'Email',
        message: "Enter your email",
    },
  ])
  .then((data) => {

    if(data.License === 'MIT License' ) {
        var icon = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    else if (data.License === 'Mozilla Public License 2.0') {
        var icon = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }
    else if (data.License === 'ISC License (ISC)') {
        var icon = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
    else if (data.License === 'IBM Public License Version 1.0') {
        var icon = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    }

    const writeToFile = `# ${icon} ${data.title}\n` 
        + `\n## Description\n\n- ${data.Descriptive0}\n- ${data.Descriptive1}\n- ${data.Descriptive2}\n- ${data.Descriptive3}\n`
        + `\n## Table of Contents\n\n${data.Contents} \n\n 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)\n`
        + `\n## Installation\n\n${data.Installation}\n`
        + `\n## Usage\n\n${data.Usage}\n`
        + `\n## License\n\nThis application is covered by the ${data.License} license.\n`
        + `\n## Contributing\n\n${data.Contribute}\n`
        + `\n## Tests\n\n${data.Test}\n`
        + `\n## Questions\n\nAny additonal questions? Reach me at\n\n- ${data.Github}\n- ${data.Email}`;
    
    const filename = `README.md`;
        fs.writeFile(filename, writeToFile, (err) => {
            if (err)
            console.log(err) 
        });
    
  });
