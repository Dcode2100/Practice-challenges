/* */
let a = "dikshant "
let b = 6
console.log(a + b)

console.log(typeof (a+b))

/* Below is an example of working const as below x is pointing to the object
*/
const x = {             // the bracket defines the object and inside that are 
    name: "dikshant",   // key value pairs, we cannot change the value of keys,                       
    section: 1,         // and neither we can store object inside const object.
    isPrincipal: false
}
x['friend'] = "kunal" // example of how we can store new key value pair inside pre made const type object.
 console.log(x)


const y = {            
    a: "dikshant",
    b: "to the new",
    C: "FOR THE SSSK",
}

console.log( y.a )  // 1st way to extract out of const variable.
console.log( y.b )  // 2nd way to extract out of const object.

