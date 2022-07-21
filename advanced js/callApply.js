
// callApply.js
const normalPerson = {
    name : 'Nura Alam',
    salary : 20000,
    getSalary : function(bonous, tips, tax){   //method
        console.log(this)
        this.salary = this.salary + bonous - tips - tax;
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

// const specialPeronSalary = normalPerson.getSalary.bind(specialPeron);
// specialPeronSalary(3000);
// specialPeronSalary(3500);
// console.log(specialPeron.salary)

// normalPerson.getSalary.call(specialPeron, 2000, 200, 20)
// console.log(specialPeron.salary)

normalPerson.getSalary.apply(specialPeron, [3000, 300, 30]);
console.log(specialPeron.salary)