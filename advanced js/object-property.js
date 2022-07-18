
// object-property.js

const Students = [
    { id : 34, name : 'Faruk' },
    { id : 45, name : 'Riad' },
    { id : 32, name : 'Juyel' },
    { id : 55, name : 'Sahab' },
];

// using general method
function student(elements){
    var output = [];

    for(let i=0; i<elements.length; i++){
        var temp = elements[i].name;
        output.push(temp);
    }
    console.log(output)
}
const names = student(Students)


// using map method
const nameArray = Students.map( e => e.name);
const namefilter = Students.filter( e => e.name == 'Riad');
const idFind = Students.find(e => e.id > 34)
console.log(idFind)
