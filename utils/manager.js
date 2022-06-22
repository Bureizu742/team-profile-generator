//import employee module 
const Employee = require('./employee.js');

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