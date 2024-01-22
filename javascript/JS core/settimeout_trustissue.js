console.log("start");

setTimeout( function ab()  {
    console.log("Done with 5 sec");
}, 5000);

console.log("end");

//million

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}


console.log('while expires');

// This is an example how the callstack is blocked because of n number of function running in call stack blocking 
// the main thread resulting into delaying the callback function execution waiting in callback queue.