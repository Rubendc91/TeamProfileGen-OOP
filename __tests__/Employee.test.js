const Employee = require("../lib/Employee");


test("Can create Employee", () => {
    const employee = new Employee("test employee", 1, "test@email.com");
    expect(employee.name).toBe("test employee");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("test@email.com");
})

test("Name of employee", () => {
    const name = "tester";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("id of employee", () => {
    const id = 1;
    const employee = new Employee("", id);
    expect(employee.id).toBe(id);
})

test("Email of employee", () => {
    const email = "test@email.com";
    const employee = new Employee("", "", email);
    expect(employee.email).toBe(email);
})

test("Get the name of employee", () => {
    const name = "tester";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test("Get the id of employee", () => {
    const id = 1;
    const employee = new Employee("", id);
    expect(employee.getId()).toBe(id);
})

test("Get the email of employee", () => {
    const email = "test@email.com";
    const employee = new Employee("", "", email);
    expect(employee.getEmail()).toBe(email);
})