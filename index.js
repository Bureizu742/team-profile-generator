//node module imports
const fs = require('fs');
const inquirer = require('inquirer');

//utils module imports
const generateHTML = require('./utils/generateHTML.js');
const Manager = require('./utils/manager.js');
const Engineer = require('./utils/engineer.js');
const Intern = require('./utils/intern.js');

const teamArray = [];

//manager questions 
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number"
        }
    ])
        //deconstructs manager inputs, then pushes them to the top of the array
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        });
};

//employee questions
const addEmployee = () => {
    console.log(`Please add employees to the dream team!\n`);

    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the name of this employee?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter this employee's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter this employee's email."
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter this employee's github username.",
        when: (input) => input.role === "Engineer"
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter this intern's school",
        when: (input) => input.role === "Intern"
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add an additional employee?',
    }])

        //deconstructs employee inputs
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            //takes in engineer specific data
            if(role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else 
            
            //takes in intern specific data
            if(role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            //pushes them to the bottom of the array
            if(confirmAddEmployee) return addEmployee(teamArray);
            else return teamArray;
        });
};


//writes the index.html page containing the inputs from above 
const writeFile = data => {
    fs.writeFile('./output/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else console.log("Your dream team's profile has been generated!")
    })
};

//starts the prompt chain
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });