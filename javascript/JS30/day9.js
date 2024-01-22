// How would you use a closure to create a private counter?

// function counter(){
//     let count = 0;

//     return{
//         add: function(inc) { count += inc},
//         retrieve : function() { return console.log(count) },
//     }
    
// }

// var myCounter  = counter(); //myCounter is a variable that holds an object returned by the counter() function, which provides an interface for incrementing a private counter variable.
// myCounter.add(2);
// myCounter.add(3);

// myCounter.retrieve ();


// What will the following code output?

// (function() {
//     var a = b = 15;
//   })();
// the parenthesis in the above function is IIFE that is speical type of invoke function which is invoked directly as the execution starts 
/*  syntax for IIFE is (function(){
    ... whatever the fuck is in this
 }) ();
*/
//   console.log(b);

// Answer
// The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

// var a = b = 5;
// is interpreted the following way:

// var a = b;
// b = 5;
// But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.


// write a function for this

multiply(5)(6);

function multiply(n){
    return function(y){
        return console.log(n * y);
    }
}




