// TODO: Include packages needed for this application

const inq = require('inquirer')
const file = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// console.log(inq)
// console.log(file)
// console.log(generateMarkdown)



// question prompts
 const quest = [{
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
        message: 'installation guide in 3 steps (press enter to start)'
    },
    {
        type: 'input',
        name: 'ins1',
        message: 'step 1'
    },
    {
        type: 'input',
        name: 'ins2',
        message: 'step 2'
    },
    {
        type: 'input',
        name: 'ins3',
        message: 'step 3'
    },
    {
        type: 'input',
        name: 'use',
        message: 'provide instructions on how to use: '
    },
    {
        type: 'input',
        name: 'useEx',
        message: 'give an example of usage'
    },
    {
        type: 'input',
        name: 'useimg',
        message: 'provide direct link for the screenshot of the example'
    },
    {
        type: 'input',
        name: 'creditscol',
        message: 'list your collaborators (credits)'
    },
    {
        type: 'input',
        name: 'creditstec',
        message: 'list your tech (credits)'
    },
    {
        type: 'input',
        name: 'badge',
        message: 'enter your badge link'
    },
    {
        type: 'confirm',
        name: 'features',
        message: 'Feature section give 3 features (press enter to start)'

    },
    {
        type: 'input',
        name: 'feature1',
        message: 'enter feature 1'

    },
    {
        type: 'input',
        name: 'feature2',
        message: 'enter feature 2'

    },
    {
        type: 'input',
        name: 'feature3',
        message: 'enter feature 3'

    },

    {
        type: 'input',
        name: 'contrib',
        message: 'how can others contribute?'

    },
    {
        type: 'input',
        name: 'test',
        message: 'how do we test this code?'

    },

    {
            type: 'list',
            name: 'license',
            message: 'What License would you like to use?',
            choices: ['Apache 2.0', 'MIT', 'GNU General Public 3.0', 'NONE']
            
    },
];


// Init Function
 function init() {
    inq.prompt(quest).then((an) => {

        file.writeFile('README.md', generateMarkdown(an), (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('File saved successfully!');
            }
          });
    })
 }

// Function call to initialize app
init();



