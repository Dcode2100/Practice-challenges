// Question 1 : What is the output of below code ?
let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);

// Solution : Output is {name:"Akki"}
// Reason: When the object is used as a key, it is converted to its string representation and the default toString() method returns [object Object]. and not just return 
// the object name. So, x[y] and x[z] are both converted to x["[object Object]"] and hence the latter one is the output.

// Question 2 : What is the output of below code ?
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2")
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }
  runFunc();
// Solution : Output is 11, NaN, 0-22, NaN, Hello78

// Question 3 : What is the output of below code ?
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
// Solution : Output is true, false
// Reason: the second console log returns false because the type of a is number and b is boolean.


// Question 4Find the max and min element in an array?
let array = [2,5,4,5,6,87,8,9]
let min = 0;
let max = 10000000;
array.map((number) => {
     min<number ? min = number : min = min
})

array.map((number) => {
    max>number ? max = number : max = max
})
console.log(max,min)