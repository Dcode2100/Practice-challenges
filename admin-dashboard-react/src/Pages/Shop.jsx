import React from 'react'

const shop = {
  color: "white",
  height: "100vh",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Shop = () => {
  return (
    <div>
      <h1 style={shop}>Shop</h1>
    </div>
  );
}

export default Shop