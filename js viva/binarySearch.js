
// binarySearch.js

var arr = [12, 15, 18, 23, 26, 30, 38, 40];

function binarySearch(array, el){
    
    var low = 0;
    var high = array.length -low;
    var mid = (low + high) / 2;

    if(array[mid] > el){
        high = mid;
        mid = (low + high) / 2;
    }
    else if ( array[mid] < el){
        low = mid;
        mid = (low + high) / 2;
    }
    else if(array[mid] == el){
        console.log('Found at position' + mid)
    }
    else{
        console.log('This is not present in this array')
    }
}

binarySearch(arr, 38);


    // console.log(mid)


