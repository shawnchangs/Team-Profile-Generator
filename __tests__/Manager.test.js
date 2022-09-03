const Manager = require('../lib/Manager');
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const test = 1234;
    const employ = new Manager('Names', 1, 'test@test.com', test);
    expect(employ.officeNumber).toBe(test);
});

test('getRole() should return "Manager"', () => {
    const test = "Manager";
    const employ = new Manager('Names', 1, 'test@test.com', 1234);
    expect(employ.getRole()).toBe(test);
});

test("Can get office number via getOffice()", () => {
    const test = 1234;
    const employ = new Manager('Names', 1234, 'test@test.com', 1234);
    expect(employ.getOfficeNumber()).toBe(test);
});
