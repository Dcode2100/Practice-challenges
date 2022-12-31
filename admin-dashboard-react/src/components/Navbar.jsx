import React from 'react'

const Navbar = ({openSidebar}) => {
  return (
    <div className='flex'>
      <button className='border border-black h-10 ' onClick={openSidebar}> Button</button>
      <div className="border-black p-2 bg-blue-800 relative h-10 w-80">
        Navbar
      </div>
      
    </div>
  )
}

export default Navbar