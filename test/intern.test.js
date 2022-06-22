//intern constructor import
const Intern = require('../utils/intern.js');

//intern info to be tested
const intern = new Intern('Lillian', 742, 'lilliansmith@place.com', 'University of Place.com');

//testing for creation of intern object with proper values
test('creates an Intern object', () => {
    //tests for school input to exist
    expect(intern.school) .toEqual(expect.any(String));

    //tests getSchool and getRole functions to return the proper values
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    expect(intern.getRole()).toEqual("Intern");
}); 