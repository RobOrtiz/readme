const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => 
inquirer.prompt([
    {   
        message: "What is the name of your project?",
        name: "title",
        type: "input",
    },
    {   
        message: "Provide a quick summary",
        name: "summary",
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
        message: "What is your github username?",
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
        message: "Choose a license",
        name: "licenses",
        type: "checkbox",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "GNU"]
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
        message: "Please provide a screenshot image file path",
        name: "Screenshot",
        type: "input",
    },
])

    const generateREADME = (answers) => 
    `# ${answers.title}
    [licenses](${answers.badge})
        ## ${answers.summary}

        ## Table of Content
        - [description](#description)
        - [installation](#installation)
        - [usage](#usage)
        - [licenses](#licenses)
        - [contribution](#contribution)
        - [test](#test)
        - [questions](#questions)
        - [username](#username)

        ${answers.description}
        ## *description*

        ${answers.username}
        ## *username*

        ${answers.installation}
        ## *installation*

        ${answers.usage}
        ## *usage*

        ${answers.licenses}
        ## *licenses*

        ${answers.contribution}
        ## *contribution*

        ${answers.test}
        ## *test*

        ${answers.email}
        ## *email*

        ${answers.screenshot}
        ## *screenshot*
        `
    
     promptUser()
        .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
        .then(() => console.log("Great Job! You successfully wrote to README.md"))
        .catch((err) => console.error(err));
// fs.writeFile('README.md', generateREADME, err => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Great Job! You successfully wrote to README.md");
//     }
// };