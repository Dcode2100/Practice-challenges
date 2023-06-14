import React from "react";

type PersonProps = {
  name: {
    firstname: string;
    lastname: string;
  };
};

const Person = (props: PersonProps) => {
  return <div className="text-4xl">{props.name.firstname}
  {props.name.lastname}</div>;
};

export default Person;
