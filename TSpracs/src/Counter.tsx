import React from "react";

type CounterProps = {
  count: number
  word: string
  isloggedin?: boolean
  message: string

};
const Counter = (props: CounterProps) => {
 
  return (
    <div className=" w-full text-4xl text-center m-auto whitespace-nowrap h-[100vh]">
      {props.isloggedin && <h1 className="text-blue-400 ">{props.message}</h1>}
      <h2>{props.count}</h2>
      <h2>{props.word}</h2>
    </div>
  )
};


export default Counter;
