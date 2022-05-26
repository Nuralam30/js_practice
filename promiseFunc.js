
// promiseFunc.js
console.log('welcome');

var promise1 = new Promise((resolve, reject) =>{
    // var completePromise = true;
    // if(completePromise){
    //     resolve('completed promise 1...');
    // }else{
    //     reject(new Error('cannot complete promise 1...'));
    // }


    // for promise.race function
    setTimeout( ()=>{
        resolve('completed promise 1...');
    },2000)
});

// promise1
//     .then( (res)=>{
//         console.log(res);
//     })
//     .catch( (err)=>{
//         console.log(err.message);
//     });



var promise2 = new Promise((resolve, reject) =>{
    //resolve('completed promise 2');


    // for promise.race function
    setTimeout( ()=>{
        resolve('completed promise 2...');
    },1000)
});

// promise2
//     .then( (res)=>{
//         console.log(res);
//     })


// call all promise at a time
// Promise.all([promise1, promise2])
//     .then( ([res1, res2])=>{        // destructutre method
//         console.log(res1);
//         console.log(res2);
//     })


// promise race function
Promise.race([promise1, promise2])
    .then( (res)=>{
        console.log(res);
    })



console.log('end');