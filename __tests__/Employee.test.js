const Employee = require('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const employ = new Employee();
    expect(typeof (employ)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = 'Laura';
    const employ = new Employee(name);
    expect(employ.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const test = 1234;
    const employ = new Employee('Names', test);
    expect(employ.id).toBe(test);
});

test("Can set email via constructor argument", () => {
    const test = 'test@test.com'
    const employ = new Employee('Names', 1234, test);
    expect(employ.email).toBe(test);
});

test("Can get name via getName()", () => {
    const test = 'Laura';
    const employ = new Employee(test);
    expect(employ.getName()).toBe(test);
});

test("Can get id via getId()", () => {
    const test = '1234';
    const employ = new Employee('Names', test);
    expect(employ.getId()).toBe(test);
});

test("Can get email via getEmail()", () => {
    const test = 'test@test.com';
    const employ = new Employee('Names', 1234, test);
    expect(employ.getEmail()).toBe(test);
});

test("getRole() should return \"Employee\"", () => {
    const test = 'Employee';
    const employ = new Employee('Laura', 1234, 'test@test.com');
    expect(employ.getRole()).toBe(test);
});
