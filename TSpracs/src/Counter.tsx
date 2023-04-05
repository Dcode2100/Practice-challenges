import React from 'react'
import App from './App'

const Counter = (count:any) => {
    
    const increasecount: any = () => {
        (count + 2)
      }
  return (
    <div>
        <h1>Increase the counter by 2 in the counter app</h1>
        <button onClick={increasecount}>Increase</button>
    </div>
  )
}

export default Counter