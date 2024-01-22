// Q2. Given an array of numbers, write a function to find the two numbers that add up to a target number.

function twosum(arr,target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(arr[i], arr[j]);
            }
        }
    }
    console.log(result);
}

twosum([1,2,3,4,5,6,7,8,9], 10);
