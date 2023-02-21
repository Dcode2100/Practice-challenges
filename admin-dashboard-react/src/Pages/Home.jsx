import React from 'react'
import Navbar from '../components/Navbar'

const h1 = {
  color: "white",
  textAlign: "center",
  marginTop: "5rem",
};
const Home = () => {
  return (
    <div>
      <Navbar />

      <h1 style={h1}>Home</h1>
    </div>
  );
};

export default Home