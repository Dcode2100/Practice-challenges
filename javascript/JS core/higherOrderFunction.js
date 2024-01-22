/*
This is correct method to find a area of circle but when, multiple
things are to be found then reuse function like in code.
const radius = [5,6,7,8];

const area = function (radius){
    const ans = [];
    for (let i = 0; i < radius.length; i++) {
        ans.push(Math.PI * radius[i] * radius[i]);
    }
    return ans;
}

console.log(area(radius));
*/

// Better way to write code for multivalue calculation reusing function.


const radius = [5,6,7,8];

const circumference = function(radius){
    return 2 * Math.PI * radius;
}
const area = function(radius){
    return Math.PI * radius * radius;
}

const calculate = function (radius, logic){
    const ans = [];
    for (let i = 0; i < radius.length; i++) {
        ans.push(logic(radius[i]));
    }
    return ans;
}



console.log(calculate(radius, area));

console.log(radius.map(area));