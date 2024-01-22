
function x() {
    for (var i = 1 ; i<=5; i++){
    setTimeout(function ( ) {
    console. log (i) ;
    },1000);
    }
        console. log("Namaste JavaScript");
    }
    x();

    /* exepected output 
    namaste javascript 
    1 - after 1 sec
    2 - after 2 sec
    3
    4
    5
    */

    /*REAL OUTPUT
    namaste javascript
    6 - after 1 sec
    6 - after 2 sec
    6 ...
    6 ...
    6 ...
     */

    /* but this is wrong, Because of closure logics that the function forms closure with its own lexical environment variable and function
        and also with its parents so as the all the five part of for loop have referenced the same i and since the javscript doesn't wait for 
        anyone and also the function only remembers the variable i and not its value so the for loop will complete it and when accrodingly the settimeout 
        will end for every i after printing the console.log as it is first and then after all the value in for loop.  */


    // solution to the problem is that to use the let keyword since they are block scoped, everytime the loop is called the function will form the closure with 
    // a new copy of i so accordingly all the values for the loop is printed and also the five copy are made.

    // if interviewer asked to solve it only by var then the solution will be- 
//     function x(){
//     for(var i = 1; i <=5; i++){
//         function close(x){          
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
//         close(i);       // This extra calling of function will help the closure the remember the unique value.
//     }
//     console.log("Namaste"); 
//    }
//    x();