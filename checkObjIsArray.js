
// checkObjIsArray.js

const Student = {
    id : 1,
    name : 'Nura Alam',
    friends : ['Sahab', 'Rafia', 'Moktadul', 'Juyel']
}

// const check = typeof(Student.friends)

if(Array.isArray(Student.name)){
    console.log('It is an array.')
}else{ 
    console.log('It is not an array.')
}