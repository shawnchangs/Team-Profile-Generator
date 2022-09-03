const Engineer = require('../lib/Engineer');

test("Can set GitHUb account via constructor", () => {
    const test = 'GitHub';
    const employ = new Engineer('Foo', 1, 'test@test.com', test);
    expect(employ.github).toBe(test);
});

test("getRole() should return \"Engineer\"", () => {
    const test = 'Engineer';
    const employ = new Engineer('Foo', 1, 'test@test.com', 'GitHub');
    expect(employ.getRole()).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
    const test = 'GitHub';
    const employ = new Engineer('Foo', 1, 'test@test.com', test);
    expect(employ.getGithub()).toBe(test);
});
