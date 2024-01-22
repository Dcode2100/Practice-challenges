
// example of class and constructor
class bike{
    constructor(type){
        this.tires = type;
    }
    arrfun = () => {
        console.log(`the tires are ${this.tires}`)
    }
}

const newob = new bike("3type");
newob.arrfun();
// the tires are 3type
// arrow and normal function are giving same output in this because arrow function capturing this from lexical scope which is the constructor function and normal function is capturing this from the ?


// this is example of lexical scope of arrow function
function normalFunction() {
  document.write("Normal function:", this);
}

const arrowFunction = () => {
  document.write("Arrow function:", this);
};

const obj = {
  name: "John",
  normalMethod: normalFunction,
  arrowMethod: arrowFunction,
};

obj.normalMethod(); // Output: Normal function: [object Object] since this is dynamically binded to obj object
obj.arrowMethod(); // Output: Arrow function:  [object Window] since this is lexially seaching in window object.


// bind method
const obj2 = {
    name: 'John'
  };
  
  function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const boundGreet = greet.bind(obj2);
  boundGreet();   // Output: Hello, John!

