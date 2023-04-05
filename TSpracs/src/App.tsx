import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      <h1>React + Vite</h1>
      <button onClick={() => setCount( (prev) => (prev+1))}>increasecount</button>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App
