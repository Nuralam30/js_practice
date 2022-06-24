
// objDestructure.js

const person = {
    name : 'Nura Alam',
    age : 24,
    profession : 'Student',
    address : 'Cumilla',
    hobby : 'programming',
    friends : ['Riad', 'Juyel', 'Sahab', 'Rafia']
}

const { name, profession, address} = person;

 // console.log(name, profession, address)


// for array
const hobbies = ['Gardening', 'Cricket', 'Watching Movie', 'Programming'];

const [first, ...rest] = hobbies;

console.log(rest)


// nested object 
const Student = {
    stName : 'Ahad',
    details : {
        stAge : 24,
        stAddress : 'barisal'
    }
}

const { stAge } = Student.details;

console.log(stAge)