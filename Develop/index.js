// TODO: Include packages needed for this application

const inq = require('inquirer')
const file = require('fs')
const output = [];



// console.log(inq)
// console.log(file)

// // TODO: Create an array of questions for user input
// const questions = [];

inq.prompt ([{
    type: 'input',
    name: 'title',
    message: 'Enter the title to your readme: ',
    default: 'README'
},
{
    type: 'input',
    name: 'desc1',
    message: 'What was your motivation for this project? ',
},
{
    type: 'input',
    name: 'desc2',
    message: 'why did you build this project? ',
},
{
    type: 'input',
    name: 'desc3',
    message: 'what problem does your project solve? ',
},
{
    type: 'input',
    name: 'desc4',
    message: 'what did you learn in the building process? ',
},
{
    type: 'confirm',
    name: 'install',
    message: 'to enter the steps it takes to install (press enter to start) ',
    default: true,
},
{
    type: 'input',
    name: 'insStep',
    message: "(enter step)",
},
{
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to another step? (just hit enter for YES)?',
    default: true,
 },

])
.then((an) => {


// var readMe = ` 
// # <${an.title}>

// ## Description

// What was the motivation for building this project?
// - ${an.desc1}

// why did you build this project?
// - ${an.desc2}

// what problem does your project solve?
// - ${an.desc3}

// what did you learn in the building process?
// - ${an.desc4}

// ## Table of Contents 

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// - Step 1: ${an.ins1}

// - Step 2: ${an.ins2}

// - Step 3: ${an.ins3}

// ## Usage

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.

// `;

// console.log(readMe)











})
.catch((err) => {
    console.error(err);
});



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
