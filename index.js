// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateTeam = require("./src/template");

// classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// create html file from the information entered about the Team 
// const OUTPUT_DIR = path.resolve(__dirname, "dist");
// const outputPath = path.join(OUTPUT_DIR, "output.html");
// const render = require("./lib/htmlRenderer");

// array for prompt answers
const teamMembers = [];

// prompt to add Manager's info (there's only 1 manager. name, employee ID, email, office number)
const addManager = [
    {
        type: "input",
        message: "Enter Manager's name",
        name: "managerName",
    },
    {
        type: "input",
        message: "Enter Manager's employee ID",
        name: "managerId",
    },
    {
        type: "input",
        message: "Enter Manager's email address",
        name: "managerEmail",
    },
    {   type: "input",
        message: "Enter Manager's office number",
        name: "officeNumber",
    }]

// prompt for additional team members (engineer, intern, or none)
const addTeam = {
        type: "list",
        message: "Select team member's role you would like to add.",
        choices: ["Engineer", "Intern", "None - no additional team member to add"],
        name: "teamRole",
    };

// adding Engineer info (name, ID, email, GitHub username)
const addEngineer = [
    {
        type: "input",
        message: "Enter Engineer's name",
        name: "engineerName",
    },
    {
        type: "input",
        message: "Enter Engineer's ID number",
        name: "engineerId",
    },
    {
        type: "type",
        message: "Enter Engineer's email address",
        name: "engineerEmail",
    },
    {
        type: "type",
        message: "Engineer's GitHub username ",
        name: "github",
    },
]

// adding Intern info (name, ID, email, school)
const addIntern = [
    {
        type: "input",
        message: "Enter Intern's name",
        name: "internName",
    },
    {
        type: "input",
        message: "Enter Intern's ID number",
        name: "internId",
    },
    {
        type: "input",
        message: "Enter Intern's email address",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Intern's school",
        name: "school",
    },
]

// function for Manager's info
function managerData() {
    inquirer.prompt(addManager)
        .then((data) => {
            let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            teamMembers.push(manager);
            TeamMember();
        });
}

// function for additional team members (Engineer or Intern)
function TeamMember() {
    inquirer.prompt(addTeam)
        .then((data) => {
            if (data.teamRole === "Engineer") {
                inquirer.prompt(addEngineer)
                    .then((data) => {
                        let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
                        teamMembers.push(engineer);
                        TeamMember();
                    });
            } else if (data.teamRole === "Intern") {
                inquirer.prompt(addIntern)
                    .then((data) => {
                        let intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
                        teamMembers.push(intern);
                        TeamMember();
                    })
            } else {
                createHTML(teamMembers);
            }
        })
}

function createHTML () {
    console.log("Success! Your Team Profile has been generated", teamMembers)
    fs.writeFileSync(
      "./dist/index.html",
      generateTeam(teamMembers),
      "utf-8"
    );
  }

// // generate html for team profiles
// function renderHTML(data) {
//     if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR);
//     }
//     fs.writeFile(outputPath, render(data), (err) =>
//         err ? console.error(err) : console.log("Success! Your Team Profile has been generated"))

// }

// function call to initialize app
managerData();
