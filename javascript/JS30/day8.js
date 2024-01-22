// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// for (let index = 0; index <= 100; index++) {
//   if(index % 3 == 0 && index % 5 == 0) console.log("fizzbuzz")
//     else if(index % 3 == 0) console.log("fizz")
//     else if(index % 5 == 0) console.log("buzz")
//     else console.log(index);

// }

// method 2 for fizzbuzz

// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? "fizzbuzz" : "fizz") : b ? "buzz" : i);
// }



// Given two strings, return true if they are anagrams of one another

let stra = "army"
let strb = "mary"
let arr = [ 2,4,6,6,8,7,9,9];
console.log(stra.split("").reverse().join(""))

console.log(arr.splice(2,7,9));
// const ang = (str1,str2) => {

//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   str1 = str1.split("").sort().join();
//   str2 = str2.split("").sort().join();

//   return str1 === str2;

// }
// console.log( ang(stra,strb));