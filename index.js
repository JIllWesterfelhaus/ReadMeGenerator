const inquirer = require("inquirer")
const fs = require("fs")
const apiCall = require("./utils/api")
//changed writeToFile to Write File, added generateMarkdown.js
//answers to go in an object
function writeFile(data) {
    fs.writeFile("README.md", data, 
    function (err) {if (err) 
        {return console.log (err)}
        console.log ("Success!")
    }
    )
}
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project description?",
            name: "description"
        },
        
        {
            type: "input",
            message: "What is the motivation for this project?",
            name: "motivation"
        },
        {
            type: "input",
            message: "Who are the contributors to your project?",
            name: "contributors"
        },
         {
            type: "input",
            message: "What tech was used to build this project?",
            name: "tech"
        },
         {
            type: "input",
            message: "What is the build status of this project?",
            name: "buildstatus"
        },
         {
            type: "input",
            message: "What is the license for this project?",
            name: "license"
        },
        {
            type: "input",
            message: "What badges does this project have?",
            name: "badges"
        },
         {
            type: "input",
            message: "Have any installations been done from this project?",
            name: "installation"
        },
         {
            type: "input",
            message: "What email can I send additional questions to?",
            name: "email"
        }
    ])
        .then (function(response) {
            let userName = response.name 
            apiCall.getUser(userName,response)
        })
}

init();
