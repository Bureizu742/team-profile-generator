//import employee module
const Employee = require('./Employee');

//intern class constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        // calling employee constructor
        super(name, id, email);
        this.school = school;
    }

    //get school input
    getSchool() {
        return this.school;
    }

    //get role input
    getRole() {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;