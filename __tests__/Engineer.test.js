const Engineer = require("../lib/Engineer");


test("Can create engineer", () => {
    const engineer = new Engineer("test engineer", 1, "test@email.com");
    expect(engineer.name).toBe("test engineer");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("test@email.com");
})

test("Name of engineer", () => {
    const name = "tester";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
})

test("id of engineer", () => {
    const id = 1;
    const engineer = new Engineer("", id);
    expect(engineer.id).toBe(id);
})

test("Email of engineer", () => {
    const email = "test@email.com";
    const engineer = new Engineer("", "", email);
    expect(engineer.email).toBe(email);
})

test("Get the name of engineer", () => {
    const name = "tester";
    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
})

test("Get the id of engineer", () => {
    const id = 1;
    const engineer = new Engineer("", id);
    expect(engineer.getId()).toBe(id);
})

test("Get the email of engineer", () => {
    const email = "test@email.com";
    const engineer = new Engineer("", "", email);
    expect(engineer.getEmail()).toBe(email);
})