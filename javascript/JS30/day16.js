// const obj = {
//     name: 'Billy',
//     method: function() {
//         console.log(this); 
//     }
// }

// const newob = obj.method;
// newob(); // undefined
// Reason - newob is a function, not a method. It is not called on an object, so this is undefined.
// More detailed explanation - https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work

console.log(this); // Window


// const myObject = {
//     value: 42,
//     getValue() {
//       return(this.value);
//     }
//   };
  
//   myObject.getValue(); 

  const lear = {
    name: 'Billy',
    method: function() {
        const inner = function() {
      const innerArrow = () => {
        console.log(this.name);
      }
      innerArrow();
    }
    inner();
    }
  };
  
  lear.method();// output will be undefined because innerArrow is an arrow function and arrow functions do not have their own this
  // if innerArrow was not an arrow function, the output would be Billy because innerArrow would have its own this, which would be lear