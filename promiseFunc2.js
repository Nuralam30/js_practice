
// promiseFunc2.js
console.log('welcome..');

function taskOne(){
    return new Promise((resolve,reject) =>{
        resolve('task 1 completed.... ');
    });
}

function taskTwo(){
    return new Promise((resolve,reject) =>{
        setTimeout( ()=>{
            resolve('task 2 completed.... ');
        },2000);
    });
}

function taskThree(){
    return new Promise((resolve,reject) =>{
        reject('task 3 cannot be completed.... ');
    });
}

function taskFour(){
    return new Promise((resolve,reject) =>{
        resolve('task 4 completed.... ');
    });
}


taskOne()
    .then( (res)=>{
        console.log(res)
    })
    .then(taskTwo)
    .then( (res)=>{
        console.log(res)
    })
    .then(taskThree)
    .then( (res)=>{
        console.log(res)
    })
    .then(taskFour)
    .then( (res)=>{
        console.log(res)
    })
    .catch( (err)=>{
        console.log(err)
    })



console.log('end....');