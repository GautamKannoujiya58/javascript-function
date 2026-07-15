/* 
Mini Workplace Challenge:

You're building an Employee Management System.

Current employees:

const employees = [
    {
        id:101,
        name:"Rahul",
        salary:50000
    },
    {
        id:102,
        name:"Gautam",
        salary:60000
    },
    {
        id:103,
        name:"Adam",
        salary:45000
    }
];

Your manager says:

"HR increased Gautam's salary to ₹65,000."

Your Task

Write

updateSalary(
    employees,
    employeeId,
    newSalary
)
 */



const employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 50000
    },
    {
        id: 102,
        name: "Gautam",
        salary: 60000
    },
    {
        id: 103,
        name: "Adam",
        salary: 45000
    }
];

const updateSalary = (employees, employeeId, newSalary) => {
    const index = employees.findIndex(employee => employee.id === employeeId)
    if (index === -1) {
        return "Employee Not found";
    }
    employees[index].salary = newSalary;
    return employees;
}

updateSalary(employees, 102, 65000)
console.log(employees);




