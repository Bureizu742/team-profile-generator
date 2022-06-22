//employee class constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //get name input
    getName() {
        return this.name;
    }

    //get id input
    getId() {
        return this.id;
    }

    //get email input
    getEmail() {
        return this.email;
    }
};

//module export
module.exports = { Employee };