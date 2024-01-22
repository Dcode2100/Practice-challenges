// Explain what a callback function is and provide a simple example

// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});


// Q2: Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}


// Q3: How to check if an object is an array or not? Provide some code.

// ANSWER

// The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype

var arrayList = [1 , 2, 3];
// One of the best use cases of type checking of an object is when we do method overloading in JavaScript. For understanding this let say we have a method called greet which take one single string and also a list of string, so making our greet method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value?

// function greet(param) {
//   if() {
//     // here have to check whether param is array or not
//   }
//   else {
//   }
// }

// However, in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

//  function greet(param) {
//    if(typeof param === 'string') {
//    }
//    else {
//      // If param is of type array then this block of code would execute
//    }
//  }



// Now it's fine we can go with above two implementations, but when we have a situation like a parameter can be single value, array, and object type then we will be in trouble.

// Coming back to checking type of object, As we mentioned that we can use Object.prototype.toString

if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
// If you are using jQuery then you can also used jQuery isArray method:

if($.isArray(arrayList)) {
  console.log('Array');
} else {
  console.log('Not an array');
}
// FYI jQuery uses Object.prototype.toString.call internally to check whether an object is an array or not.

// In modern browser, you can also use:

Array.isArray(arrayList);