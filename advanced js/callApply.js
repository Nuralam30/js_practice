
// callApply.js
const normalPerson = {
    name : 'Nura Alam',
    salary : 20000,
    bonous : 2000,
    getSalary : function(amount){   //method
        console.log(this)
        this.salary = this.salary + amount;
        return this.salary;
    }
}

// const bonous = normalPerson.bonous;
// normalPerson.getSalary(bonous)
// console.log(normalPerson.salary)

const specialPeron = {
    name : 'Anderson',
    salary : 28000
}

const specialPeronSalary = normalPerson.getSalary.bind(specialPeron);
specialPeronSalary(3000);
specialPeronSalary(3500);
console.log(specialPeron.salary)