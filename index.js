const inquirer = require("inquirer")
const fs = require("fs")
function writeToFile(fileName, data) {[
    title: "Portfolio2";
    description: "Second version of my portfolio for Northwestern Coding Bootcamp.";
    contributors: "Jill Westerfelhaus";
    tech: "HTML, CSS and Bootstrap.";
    buildstatus: "Build status is complete.";
    license: "Licensed under the Unlicense.";
    installation: "No";
    email: "jillwesthaus@gmail.com"]
}
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project description?",
            name: "description"
        }
        {
            type: "input",
            message: "Who are the contributors to your project?",
            name: "contributors"
        }
         {
            type: "input",
            message: "What tech was used to build this project?",
            name: "tech"
        }
         {
            type: "input",
            message: "What is the build status of this project?",
            name: "buildstatus"
        }
         {
            type: "input",
            message: "What is the license for this project?",
            name: "license"
        }
         {
            type: "input",
            message: "Have any installations been done from this project?",
            name: "installation"
        }
         {
            type: "input",
            message: "What email can I send additional questions to?",
            name: "email"
        }

    ])
        .then()
}

init();
