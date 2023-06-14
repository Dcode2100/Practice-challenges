import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Person from "./Person";
import Counter from "./Counter";

function App() {
  const PersonName={
    firstname:"sahil",
    lastname:"kumar",
  }
  const newpersonname=[
    {firstname: "dikshant", lastname: "kumar"},
    {firstname: "sahil", lastname: "kumar"},
    {firstname: "dikshant", lastname: "kumar"},
    {firstname: "sahil", lastname: "kumar"},

  ]
  return (
    <div className=" w-full whitespace-nowrap h-[50vh] flex items-center justify-center flex-col">
      <Counter
        count={55}
        word="wtf"
        isloggedin={true}
        message="loggen in successfully"
      />
      <Person name={PersonName}/>
    </div>
  );
}

export default App;
