// Write a function to sort an array of integers in ascending order using the bubble sort algorithm.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5, 3, 1, 9, 8, 2, 4, 7];
let sortedArray = bubbleSort(arr);
console.log(sortedArray);