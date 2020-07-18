// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)
  ## Description 
  ${data.description}

  
  ## Table of Contents
     * Description
     * Installation
     * Usage
     * License
     * Contributing
     * Test
     * Questions

 
  ## Installation
    The following command should be run to install dependencies: ${data.installation}

  
  ## Usage
     What to know about using the repo: ${data.usage}

  
  ## License
     Type of License for application: ${data.license}


  ## Contributing
     What to know about using the repo: ${data.contributing}


  ## Test
     Command to run tests: ${data.test}


  ## Questions
     * GitHub Username: ${data.github}
     * GitHub Link: ${data.githublink} 
     * Email Address: ${data.email}
     * Contact Instructions: Please email me for additional questions or call me at (222) 555-1234.

`;

}

module.exports = generateMarkdown;
