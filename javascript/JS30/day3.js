// Write a function that flattens an array of nested arrays into a single-level array.

function flattenarray (arr) {
    let result = [];
    for (let i = 0; i < arr.Length(); i++) {
        if (arr.isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
}

flattenarray([1,2,3,4,[5,6,7],6,7,8,9]);