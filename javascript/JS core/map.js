/*  write a program to return double, triple and binary of an 
 given array */

 const arr = [1,2,3,4,5];
 
 
 // Method one to write single working function
 function binary(x){
    return x.toString(2);
 }
 const output1 = arr.map(binary)
 console.log(output1);
 
 

// method 2 we can directly pass function in the function
const output2 = arr.map(function binary(x) {
    return x.toString(2);
});
console.log(output2);



// method 3 We can directly use the arrow function to pass  
//  value of x and convert it to binary.
const output3 = arr.map((x) => x.toString(2));

console.log(output3);


