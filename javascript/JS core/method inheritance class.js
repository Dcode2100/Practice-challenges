/* 
 CLASS INHERITANCE

 To create a class inheritance, use the extends keyword.
 A class created with a class inheritance inherits all the methods from another class

 Create a class named "Model" which will inherit the methods from the "Car" class:
*/

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();


  // OUTPUT -
  //           I have a Ford, it is a Mustang