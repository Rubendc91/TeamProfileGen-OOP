const Manager = require("../lib/Manager");


test("Can create manager", () => {
    const manager = new Manager("test manager", 1, "test@email.com");
    expect(manager.name).toBe("test manager");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("test@email.com");
})

test("Name of manager", () => {
    const name = "tester";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
})

test("id of manager", () => {
    const id = 1;
    const manager = new Manager("", id);
    expect(manager.id).toBe(id);
})

test("Email of manager", () => {
    const email = "test@email.com";
    const manager = new Manager("", "", email);
    expect(manager.email).toBe(email);
})

test("Get the name of manager", () => {
    const name = "tester";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
})

test("Get the id of manager", () => {
    const id = 1;
    const manager = new Manager("", id);
    expect(manager.getId()).toBe(id);
})

test("Get the email of manager", () => {
    const email = "test@email.com";
    const manager = new Manager("", "", email);
    expect(manager.getEmail()).toBe(email);
})