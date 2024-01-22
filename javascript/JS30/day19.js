// confusion solution of hoisting 
    

 // -> Only the function decleartion and initialization is hoisted that is whole function can be called before the function decleartion and initialization.
    // -> var keyword only decleartion is hoisted not the initialization. it is just assigned undefined value.
hosited()

console.log(a)
function hosited(){
    console.log('hosited');
}

var a = 10;
let b = 20;
console.log(b)
const arrhoisted = () => {
    console.log('arrhoisted');
}
arrhoisted()