// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
// 
 
/*
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(delayresolve => setTimeout(delayresolve,millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


// guess the output questions.

const array = [1, 2, 3, 4, 5];
const result = array.map(num => {
  if (num % 2 === 0) {
    return Promise.resolve(num);
  } else {
    return Promise.reject("Odd number");
  }
});

Promise.all(result)
  .then(numbers => console.log(numbers))
  .catch(error => console.log(error));

//   ["Odd number", 2, "Odd number", 4, "Odd number"]
