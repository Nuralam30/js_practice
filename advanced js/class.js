
class Person {
    constructor(name, age , salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

const person1 = new Person('Nura Alam', 24, 20000);
const person2 = new Person('Moktadul', 24, 21000);
console.log(person1)
console.log(person2)



// class create in different way
function Person1(name, age , salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

const person3 = new Person1('Juyel', 24, 21000);
console.log(person3)

