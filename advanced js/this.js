
const person1 = {
    name : 'Nura Alam',
    getName : function(){
        console.log(this)
    }
}

const person2 = {
    name : 'Moktadul'
}

person2.getName = person1.getName;  // here this refers to the object that has in the left side of the method
person1.getName()
person2.getName()