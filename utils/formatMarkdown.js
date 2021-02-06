function formatReadMeFile(data) {
    let markDown = "";
    let tableOfContentText = "";
  
    const {
      title,
      description,
      installation,
      projectUsage,
      contributing,
      tests,
      license,
      username,
      email,
    } = data;
  
    //It generate markdown for title
    if (title) {
      markDown = `
    # ${title}
  
    ${checkMarkdownLicense(license)}
    
    ## Description 
  
    *The what, why, and how:* 
    
    ${description}
      
      `;
    }
    // Add Table of Contents to markdown
    //Generate table of content
    markDown += `
    ## Table of Contents
    ${installation ? "* [Installation](#installation)" : null}
    ${projectUsage ? "* [Usage](#Usage)" : null}
    ${contributing ? "* [Contributing](#contributing)" : null}
    ${tests ? "* [Tests](#tests)" : null}
    ${license ? "* [License](#license)" : null}
    `;
    // Add installation
  
    if (installation) {
      markDown += `
    ## Installation
  
    *Steps required to install project and how to get the development environment running:*
  
    ${installation}
      `;
    }
  
    // Add usage if usage exists
    if (projectUsage) {
      markDown += `
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${projectUsage}`;
    }
  
    // Added contribution guide line
    if (contributing) {
      markDown += `  
    ## Contributing
    
    * Please follow these guidelines for how to do so if you want to contribute to it.*
    
    ${contributing}`;
    }
  
    // This vontains tests guideline
    if (tests) {
      markDown += `   
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${tests}`;
    }
  
    //This section contains licese name
    markDown += `
      
    ## License
    ${license}
      `;
  
    //question section
  
    markDown += `
    ---
    
    ## Questions?
    
    For any questions, please contact me with the information below:
   
    GitHub: [@${username}](${`http://github.com/${username}`})
  
    Email: ${email ? email : null}
    `;
  
    return markDown;
  }
  
  function checkMarkdownLicense(license) {
    switch (license) {
      case "ISC":
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      case "GNU GPL v3":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      case "Apache License 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
  }
  
  module.exports = formatReadMeFile;
  