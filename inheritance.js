
// inheritance.js

class Father{
    constructor(){
        this.FatherName = "Mr. Anderson";
    }
}

class Child extends Father{
    constructor(name){
        super();
        this.childName = name;
    }
    getAll(){
        return 'Father Name :' + this.FatherName + '\n'+ 'Child Name :' + this.childName;
    }
}

const childAll = new Child('Richard');

console.log(childAll)
console.log(childAll.getAll());