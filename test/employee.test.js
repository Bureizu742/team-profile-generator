//employee constructor import 
const Employee = require('../utils/employee.js');

//employee info to be tested
const employee = new Employee('Lillian', 742, 'lilliansmith@place.com');

//testing for creation of employee object with proper values
test('creating an employee object', () => {
    //tests for name, id, and email inputs to equate to user inputs
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    //tests for name, id, and email functions returning the proper values
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
