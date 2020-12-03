const fs = require("fs");
const inquirer = require("inquirer");
const Title = require("./title");

const title = new Title();


const promptUser = () => 
    inquirer.prompt([
        {   
            message: "What is the name of your project?",
            name: "title",
            type: "input",
        },
        {   
            message: "Provide a table of content",
            name: "table of content",
            type: "input",
        },
        {  
            message: "Please provide a description of the project",
            name: "description",
            type: "input",
        },
        {   
            message: "What is the name of the user?",
            name: "userName",
            type: "input",
        },
        {   
            message: "What is the installation process?",
            name: "installation",
            type: "input",
        },
        {   
            message: "Purpose of the project?",
            name: "usage",
            type: "input",
        },
        {   
            message: "What licenses are required with this project?",
            name: "licenses",
            type: "input",
        },
        {   
            message: "Who contributed to this project?",
            name: "contribution",
            type: "input",
        },
        {   
            message: "How did you test your project?",
            name: "test",
            type: "input",
        },
        {   
            message: "What is the user github email address?",
            name: "GitHub user email",
            type: "input",
        },
        {   
            message: "Please provide a profile picture",
            name: "GitHub profile picture",
            type: "input",
        },
    ]);
    
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));


