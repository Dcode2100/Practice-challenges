// first understand to use reduce using 
// normal function without using actual reduce function.

const arr = [ 1,2,3,4,5]
//sum of array elements
function sum (arr) {
    let sum  = 0;
    for(let i = 0; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sum(arr));


// Actual reduce function use just like map and filter.
// acc -> it is accumulator  i.e. sum;
// curr -> it is current i.e. curr;

const output = arr.reduce(function (acc,curr) {
    acc += curr;
    return acc;
}, 0);

console.log(output);