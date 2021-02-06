// include node fs module
const fs = require("fs");
let inquirer = require("inquirer");
let question = require("./utils/question");
let formatReadMeFile = require("./utils/formatMarkdown");
//inquirer package
inquirer
  .prompt(question)
  .then((data) => {
    // writeFile function with filename, content and callback function
    const formatedData = formatReadMeFile(data);
    fs.writeFile("README.md", formatedData, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else when wrong
      console.log(error);
    }
  });
