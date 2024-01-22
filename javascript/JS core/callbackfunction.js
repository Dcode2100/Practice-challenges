k// var i =0;
// setTimeout( function(i) {
//     console.log(1 + i)
// }, 5000);

// call back function example
function x(y){
    console.log("x");
    
y();
    console.log("5");
}
x(function y(){
    console.log("y")
});