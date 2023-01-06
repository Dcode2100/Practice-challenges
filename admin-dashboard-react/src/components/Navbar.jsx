import React from 'react'
import './Style.css';

const Navbar = ({openSidebar}) => {
  return (
    <div className=' app__navbar '>
      <div className="app__navbar-container">
      <button className='sidebar__button' onClick={openSidebar}> Button</button>
          <div className="nav__links-container">
            <button className='button__links'>Home</button>
            <button className='button__links'>Contact us</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar