import React from 'react'

const home = {
  color: "white",
  height: "100vh",
  background: "linear-gradient(45deg, #4d4293 30%, #42e555 90%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

};


const Home = () => {
  return (
    <div >
      <h1 style={home}>Home</h1>
    </div>
  );
};

export default Home