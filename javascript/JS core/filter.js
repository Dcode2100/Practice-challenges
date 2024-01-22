//basic filter concept

const array = [1,2,3,4,5];

/* 
function isgreater(x){
    return x % 2 === 0;
}
const output = array.filter(isgreater);

console.log(output);

*/

// better way to write single line function 


const output = array.filter((x) => x > 4)

console.log(output);
