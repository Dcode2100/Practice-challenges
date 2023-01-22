import React,{useState,useEffect} from 'react'

const Ue1 = () => {
  const[Count,setCount] = useState(2)

  
    const Change = useEffect(() => {
      console.log({Count})
    }, [])
    
  return (
  <div>
    <button onClick={()=>setCount(Count + 1)}>button</button>
    <input  placeholder="enter something" onChange={Change}></input>
     {Count}
  </div>
  )
}

export default Ue1;
