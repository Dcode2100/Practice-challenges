import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (<>
    <div>Home</div>
    <Link to='/dashboard'>Go to dashboard consider this as fake login</Link>
    </>
  )
}

export default Home