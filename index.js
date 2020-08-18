// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional data
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require("./generateMarkdown");
var util = require("util");
var writeFile = util.promisify(fs.writeFile);


// array of data for user
inquirer.prompt([
{
    type: "input",
    name: "title",
    message: "What is your project title"
},
{
    type: "input",
    name: "description",
    message: "What is your description of the project?"
},
{
    type: "input",
    name: "installation",
    message: "What are the installation instructions for the project?"
},
{
    type: "input",
    name: "usage",
    message: "What usage information would you like to provide?"
},
{
    type: "input",
    name: "contribution",
    message: "What are the constribution guidelines for the project?"
},
{
    type: "input",
    name: "test",
    message: "What are the testing instructions for the project?"
},
{
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU Genral Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero v 1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense"
    ]
},
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
}
]).then(function(data) {
console.log(data.questions);
    var readMe = generateMarkdown(data);

    return writeFile("README.md", readMe);

}).then(function () {
    console.log("README was created!")
}).catch(function (err) {
    console.log(err);
});