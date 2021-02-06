let path = require("path");
let fs = require("fs");
let absolutePath = path.dirname(fs.realpathSync(__filename));
let projectName = absolutePath.split(/[\/,\\]+/);

module.exports = [
  {
    type: "input",
    message: `Enter title of Project (${projectName[projectName.length - 2]}:`,
    name: "title",
    default: projectName[projectName.length - 2],
    validate: function (title) {
      if (title) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Enter Description of Project:",
    name: "description",
    validate: function (description) {
      if (description) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Enter Installation Guide of Project:",
    name: "installation",
    validate: function (installationGuide) {
      if (installationGuide) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Enter Usage of Project:",
    name: "projectUsage",
    validate: function (projectUsage) {
      if (projectUsage) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Enter Contributing guideline of Project:",
    name: "contributing",
    validate: function (contributingGuideline) {
      if (contributingGuideline) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Enter Tests guideline of Project:",
    name: "tests",
    validate: function (testGuideline) {
      if (testGuideline) {
        return true;
      }
      return false;
    },
  },
  {
    type: "list",
    message: "Choose License of Project:",
    name: "license",
    choices: ["Apache License 2.0", "GNU GPL v3", "MIT", "ISC"],
  },
  {
    type: "input",
    message: "Your github username: ",
    name: "username",
    validate: function (nameInput) {
      if (nameInput) {
        return true;
      }
      return false;
    },
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
    validate: function (emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    },
  },
];
