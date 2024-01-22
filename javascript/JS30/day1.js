// To run the code simple type this in your terminal  - node filename.

// 
//Q1. Write a function that takes a string as an argument and returns true if it's a palindrome, false otherwise.


function palindromeChecker() {
    var str = [3,4,5,6,6,5,4,3];
    var i = 0,j = str.length-1;
    console.log(str[0]);
    var ans = true;
    for (let k = 0; k < str.length/2; k++) {
        if(str[i] !== str[j]) {
            ans = "false";
            break;
        }
        i++;
        j--;
    }
    console.log(ans);
}
palindromeChecker();



