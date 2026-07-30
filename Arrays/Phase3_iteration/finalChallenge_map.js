// Mini Challenge:

/*
The HR team says:

"We don't want the raw salary. Create a new array where each employee looks like this:"
*?

const employees = [
    { name: "Rahul", salary: 40000 },
    { name: "Aman", salary: 55000 },
    { name: "Gautam", salary: 60000 },
]
[
    {
        name: "Rahul",
        annualSalary: 480000
    },
    {
        name: "Aman",
        annualSalary: 660000
    },
    {
        name: "Gautam",
        annualSalary: 720000
    }
]
*/

const employees = [
    { name: "Rahul", salary: 40000 },
    { name: "Aman", salary: 55000 },
    { name: "Gautam", salary: 60000 },
]

const annualEmployeeSalary = employees.map(employee => ({ name: employee.name, annualSalary: employee.salary * 12 }));
console.log(annualEmployeeSalary);
