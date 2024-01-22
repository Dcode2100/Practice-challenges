//Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// Define the `last` method on the Array prototype
Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
  };
  
  // Example usage
  const arr1 = [1, 2, 3, 4];
  console.log(arr1.last()); // Output: 4
  
  const arr2 = [];
  console.log(arr2.last()); // Output: -1
  