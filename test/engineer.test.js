//engineer constructor import
const Engineer = require('../utils/engineer.js');

//engineer info to be tested
const engineer = new Engineer('Lillian', 742, 'lilliansmith@place.com', 'lili742');

//testing for creation of engineer object with proper values
test('creates an Engineer object', () => {
    //tests for github input to exist
    expect(engineer.github) .toEqual(expect.any(String));

    //tests for getGithub and getRole functions to return the proper values
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual("Engineer");
});