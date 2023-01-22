import React,{useState} from 'react'

const Us2 = () => {
    const[inputValue,newChangeValue] = useState("dikshant");
    
    const onChange = (event) => {  // bydefault object is recieved that is event
        const newval = event.target.value          // way to get the value i.e. event.target.value
        newChangeValue(newval)
      }
  return (
  <>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={onChange}></input>
  </>)
}

export default Us2