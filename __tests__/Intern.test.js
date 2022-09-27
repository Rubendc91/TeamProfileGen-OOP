const Intern = require("../lib/Intern");


test("Can create intern", () => {
    const intern = new Intern("test intern", 1, "test@email.com");
    expect(intern.name).toBe("test intern");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("test@email.com");
})

test("Name of intern", () => {
    const name = "tester";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
})

test("id of intern", () => {
    const id = 1;
    const intern = new Intern("", id);
    expect(intern.id).toBe(id);
})

test("Email of intern", () => {
    const email = "test@email.com";
    const intern = new Intern("", "", email);
    expect(intern.email).toBe(email);
})

test("Get the name of intern", () => {
    const name = "tester";
    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
})

test("Get the id of intern", () => {
    const id = 1;
    const intern = new Intern("", id);
    expect(intern.getId()).toBe(id);
})

test("Get the email of intern", () => {
    const email = "test@email.com";
    const intern = new Intern("", "", email);
    expect(intern.getEmail()).toBe(email);
})