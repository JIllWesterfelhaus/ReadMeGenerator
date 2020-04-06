var inquirer = require("inquirer")
var fs = require("fs")
function writeToFile(fileName, data) {
    
}

function init() {
    inquirer.prompt ([
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

    ])
}

init();
