//import employee module 
const Employee = require('./Employee');

//manager class constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //get role input
    getRole() {
        return "Manager";
    }
}

//module export
module.exports = Manager;