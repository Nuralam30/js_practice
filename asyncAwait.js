
// asyncAwait.js

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


const taskAll = async () =>{
    try {
        var t1 = await taskOne();
        console.log(t1);
        var t2 = await taskTwo();
        console.log(t2);
        var t3 = await taskThree();
        console.log(t3);
        var t4 = await taskFour();
        console.log(t4);
    }catch (err){
        console.log(err);
    }
}

taskAll();


console.log('end....');