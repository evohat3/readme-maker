const license = require('./licenseInfo')



// console.log(license.apache)

// console.log (license.MIT)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(an) {
    if (an.license == 'Apache 2.0')
    return `${license.apachbadge}`
    
    if (an.license == 'MIT')
    return `${license.mitbadge}`
    
    if (an.license == 'GNU General Public 3.0')
    return `${license.gnubadge}`


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(an) {
    if (an.license == 'Apache 2.0')
    return `${license.apachlink}`
    
    if (an.license == 'MIT')
    return `${license.mitlink}`
    
    if (an.license == 'GNU General Public 3.0')
    return `${license.gnulink}`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseSection(an) {
if (an.license == 'Apache 2.0')
return `${license.apache}`;

if (an.license == 'MIT')
return `${license.MIT}`;

if (an.license == 'GNU General Public 3.0')
return `${license.GNU}`;


if(an.license == 'NONE')
return `${license.none}`;
} 



//  Create a function to generate markdown for README
function generateMarkdown(an) {
  return ` 
# ${an.title}
---
---
## Table of Contents 
      
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Features](#features)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [License](#license)
      
    

  ![alt text](${renderLicenseBadge(an)})   ![alt text](${an.badge})   [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)



---
---
## Description
---
---
      
          What was the motivation for building this project?
          - ${an.desc1}
      
      
          why did you build this project?
          - ${an.desc2}
      
      
          what problem does your project solve?
          - ${an.desc3}
      
      
          what did you learn in the building process?
          - ${an.desc4}
      

      
## Installation
  ---
  ---      
  
      How to install
  
      - Step 1: ${an.ins1}
      
      - Step 2: ${an.ins2}
      
      - Step 3: ${an.ins3}
      
      

## Usage
---
---      
### *How to use*
#### ${an.use}
      
![ScreenShot](${an.eximg})

### [Link to tutorial here](${an.usevid}) 



## Credits
---
---     
Github Repo
* [${an.gituser}](${an.creditsgit})

Collaborators
* ${an.creditscol}
      
Tech
* ${an.creditstec}

## Features
---
---
 * ${an.feature1}
  
 * ${an.feature2}
  
 * ${an.feature3}

## How to Contribute
---
---     
 *  ${an.contrib}     

## Tests
---
---
* ${an.test}

##  Questions
---
---

contact me at - ${an.email}
   
  
## License 
---
---    

  *  [${an.license} LINK](${renderLicenseLink(an)})

    ${renderLicenseSection(an)}


`;
}

module.exports = generateMarkdown;
