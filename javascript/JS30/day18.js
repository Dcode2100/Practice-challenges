const obj = {
    name: 'John',
    regularMethod: function() {
      console.log(this.name);
    },
    arrowMethod: () => {
      console.log(this.name);
    }
  };
  

  obj.regularMethod(); // Output: John
  obj.arrowMethod(); // Output: undefined




//  Types of invocation in normal function leading to change in output because of change in this binding

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const obj1 = {
  name: 'John'
};

const obj2 = {
  name: 'Jane'
};

// 1. Function invocation
greet(); // Output: Hello, undefined! (Default binding)

// 2. Method invocation
obj1.greet = greet;
obj1.greet(); // Output: Hello, John! (Implicit binding)

// 3. Explicit binding with call
greet.call(obj2); // Output: Hello, Jane! (Explicit binding with call)

// 4. Explicit binding with apply
const args = ['Alex'];
greet.apply(obj2, args); // Output: Hello, Alex! (Explicit binding with apply)

// 5. Binding with bind
const boundGreet = greet.bind(obj2);
boundGreet(); // Output: Hello, Jane! (Binding with bind)






