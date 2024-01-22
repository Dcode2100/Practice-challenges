import React from "react";

let arr = [
  { id: 1, age: 12, name: "Manu" },
  { id: 2, age: 24, name: "Quincy" },
  { id: 3, age: 22, name: "Abbey" },
];

let filtered = arr.filter((el) => el.age <20);
console.warn(filtered);

let reduced = arr.reduce((el) => el.id === "3" )
console.warn(reduced);

//write a reduce function to extrat a array of id equal to 3
arr.reduce((acc, el) => {
    if (el.id === 3) {
        acc.push(el);
    }
    console.log(acc);
});



const Test = () => {
  return <div></div>;
};

export default Test;
