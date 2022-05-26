
// promiseFunc.js

var promise1 = new Promise((resolve, reject) =>{
    var completePromise = false;
    if(completePromise){
        resolve('task completed...');
    }else{
        reject('task cannot complete...');
    }
});

promise1
    .then( (res)=>{
        console.log(res);
    })
    .catch( (err)=>{
        console.log(err);
    });