
// enqueDeque.js

var stackInput = [];
var stuckOutput = [];
var arr = [12, 13, 14, 15];

// enqueue function
function enqueue(inputData, item){
    return inputData.push(item);
}
for ( let i=0; i<arr.length; i++){
    enqueue(stackInput, arr[i]);
}
console.log(stackInput)


// dequeue function
function dequeue(stackInput, stuckOutput){
    if(stuckOutput.length <= 0){
        while(stackInput.length > 0){
            var outputResult = stackInput.pop();
            stuckOutput.push(outputResult);
        }
    }
    return stuckOutput;
}

dequeue(stackInput, stuckOutput);
console.log(stuckOutput)
