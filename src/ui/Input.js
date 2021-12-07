import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.Value}
      name={props.name}
      className="text-field"
    />
  );
};

export default Input;
