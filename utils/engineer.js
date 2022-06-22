//import employee module
const Employee = require('./employee.js');

//engineer class constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //get github input 
    getGithub() {
        return this.github;
    }

    //get role input
    getRole() {
        return "Engineer";
    }
}

// to be exported 
module.exports = { Engineer };