/* 
first the variable in the execution context is assigned undefined
    ( undefined is the prememory allocation)
    If the variable is allocated data in further code then
    then the undefined is replaced with the value inserted.
*/
    // javascript is losely type language because it doesn't throw error if you try to add number and string(it doesn't give error).

// # never declare variable as undefined( that is used for processing part it can create problem later)


const a = function(c){
    console.log("helo");
    return function(b){
        console.log(b);
    }
    
}

console.log(a(7)(6));