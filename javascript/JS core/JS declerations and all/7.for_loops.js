 // program to add first n natural numbers
 /*
 let sum = 0
 let n = prompt("enter the value of n") // promt is a part of console not JS
 n = Number.parseInt(n) // code to convert into integer
 for( let i = 0; i < n; i++) {
    sum += (i+1)
  }
console.log("Sum of first" + n + " natural numbers is " + sum)   
*/


// Below is demonstartion of (for in) loop
let obj = {
    harry:90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
// For in loop 
for(let a in obj){     // loop through the key of the object 
    console.log("marks of" + a + " are " + obj[a])
}
// For of loop          // loop through the value of the object
for(let b in "dikshant"){
  console.log(b)
}