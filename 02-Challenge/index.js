// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// classes
const Employee = require('.../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

// create html file from the information entered about the Team 
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "output.html");
const render = require("./lib/htmlRenderer");

// array for prompt answers
const teamMembers = [];

// prompt to add Manager's info
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
    }
    {   type: "input",
        message: "Enter Manager's office number",
        name: "officeNumber",
    }]

// prompt for additional team members (engineer, intern, or none)
const addTeam = {
        type: "list",
        message: "Select team member's role you would like to add.",
        choices: ["Engineer", "Intern", "None - no additional team member to add"],
        name: "role",
    },
