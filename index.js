const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generateHTML = require('./src/generateHTML');

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

console.log("Initiating  team generatror");

const Team = []

function TeamMenu() {
    console.log(`
    Adding Manger to the team
    =================
    `);
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the managers name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the managers id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager office Number?",
        },
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            "Manager",
            answers.managerOfficeNumber

        )
        console.log(manager);
        Team.push(manager);
        createTeam()
    });
}

function createTeam() {

    inquirer.prompt([{
        type: "list",
        name: "teamChoice",
        message: "Which type of team member",
        choices: [
            "Engineer",
            "Intern",
            "Finish adding members"
        ]
    }]).then((userChoice) => {
        console.log(userChoice);
        if (userChoice.teamChoice === "Engineer") {

            function engineerQuestions() {
                console.log(`
                Adding Team Engineer
                =================
                `);
                inquirer.prompt([
                    {
                        type: "input",
                        name: "engineerName",
                        message: "What is the engineers name?",
                    },
                    {
                        type: "input",
                        name: "engineerId",
                        message: "What is the engineers id?",
                    },
                    {
                        type: "input",
                        name: "engineerEmail",
                        message: "What is the engineers email?",
                    },
                    {
                        type: "input",
                        name: "gitHub",
                        message: "What is the engineers gitHub username?",
                    },
                ]).then((answers) => {
                    const engineer = new Engineer(
                        answers.engineerName,
                        answers.engineerId,
                        answers.engineerEmail,
                        userChoice.teamChoice,
                        answers.gitHub
                    )
                    console.log(engineer);
                    Team.push(engineer);
                    createTeam();
                });
            }
            engineerQuestions();

        } else if (userChoice.teamChoice === "Intern") {
            function internQuestions() {
                console.log(`
                Adding Team Intern
                =================
                `);
                inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is the interns name?",
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "What is the interns id?",
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the interns email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What school does the intern attend?",
                    },
                ]).then((answers) => {
                    const intern = new Intern(
                        answers.internName,
                        answers.internId,
                        answers.internEmail,
                        userChoice.teamChoice,
                        answers.school
                    )
                    console.log(intern);
                    Team.push(intern);
                    createTeam();
                });
            }
            internQuestions();
        } else {
            generateHTML(Team);
            console.log(Team);

        }
    })
}



TeamMenu()


