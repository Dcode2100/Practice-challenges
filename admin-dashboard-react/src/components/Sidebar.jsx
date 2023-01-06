import React from 'react'

const Sidebar = ({sidebar}) => {
  return (
    <div className={ sidebar ?'border-4 h-80 w-60':'w-0'} >
        Sidebar
        
    </div>
    
  )
}

export default Sidebar