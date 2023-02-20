import React from 'react'

const bl = [ 'a' , 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z']
const bls = bl.map((bls) => <li>{bls}</li>);
const Colors = () => {
  return (
    <div className='border-4 border-black'>
      <h1 className='text-2xl font-bold'>Colors</h1>
      <div className='flex flex-col'>
          <ul className='pl-4 text-3xl border-2 flex flex-row gap-5 flex-wrap'>{bls}</ul>
      </div>
    </div>
  )
}

export default Colors