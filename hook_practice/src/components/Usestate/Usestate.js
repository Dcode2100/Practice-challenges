/* Understanding of useState and every part of it
 */

import React, {useState} from 'react';

// add function name in the below state intialisation for rerendering everytime the state is updated
// or directly input the value like below
// function initialcount(){
//   console.log("rerendering");
//   return 4;

// }

function adder(){
  console.log("error")
  return 2; 
}

function Usestate() {

  const [count,setCount] = useState(adder())
  const [theme,setTheme] = useState("theme")
  function increment(){
    setCount(prevCount => prevCount - 1);
    setTheme("red")
  }
   
  
  return (
    <div className="App">
        <button onClick={increment}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={()=>{setCount(count + 1);setTheme("Blue")}}>+</button>
    </div>
  );
}

export default Usestate;
