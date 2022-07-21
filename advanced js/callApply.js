
// callApply.js
const normalPerson = {
    name : 'Nura Alam',
    salary : 20000,
    bonous : 2000,
    getSalary : function(amount){   //method
        this.salary = this.salary + amount;
        return this.salary;
    }
}

const bonous = normalPerson.bonous;
normalPerson.getSalary(bonous)
console.log(normalPerson.salary)