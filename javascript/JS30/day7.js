// The given number is an integer or not

function isint (n){
    let x =  n % 1 === 0;
    console.log(x);
}
const x = "asdf";
isint(x);

// output - false because it is not an integer since on 

//duplicate and add the same array to itself

function add(arr){
    return(arr.concat(arr));
}
    add([2,3,4,5]);

//Write a "mul" function which will properly when invoked as below syntax

function mul(x){
    return function(y){
        return function(z) {
            return x * y * z;
        };
    };
}

// console.log(mul(2)(3)(4));

/* 
Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive

In JavaScript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
Function can be stored as variable
Function can be pass as a parameter to another function
Function can be returned from function    
*/

/*  write a functino which will allow you to do the below logic
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27 
*/

function createBase(basenumber) {
  return function (N) {
    console.log(basenumber + N);
  };
}

var addsix = createBase(6);
addsix(5);
addsix(8);

//You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.
