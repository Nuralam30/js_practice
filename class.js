
// class.js

class Student{
    constructor(sid, name){
        this.id = sid;
        this.name = name;
    }
}

class studentInfo{
    constructor(age, hometown){
        this.age = age;
        this.hometown = hometown;
    }
}

const student = new Student( 1, 'Nur_Alam');
const info = new studentInfo( 24, 'Cumilla');

const studentAll = Object.assign(student,info);

console.log(studentAll)