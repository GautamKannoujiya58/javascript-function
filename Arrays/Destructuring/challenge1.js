const employee = { id: 101, name: "Rahul", department: "Engineering", salary: 75000 };

// Without using:

/*
id = employee.id
name = employee.name
department = employee.department
salary = employee.salary
*/

// with Destructuring:

const { id, name, department, salary } = employee;
console.log(id, name, department, salary); // 101 Rahul Engineering 75000
