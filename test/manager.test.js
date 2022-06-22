//manager constructor import
const Manager = require('../utils/manager.js');

//manager info to be tested
const manager = new Manager('Lillian', 742, 'lilliansmith@place.com', 42);

//testing for creation of manager object with proper values
test('creates an Manager object', () => {
    //tests for officeNumber to exist
    expect(manager.officeNumber).toEqual(expect.any(Number));

    //tests getRole function returns the proper value "Manager"
    expect(manager.getRole()).toEqual("Manager");
});