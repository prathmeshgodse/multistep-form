import React from "react";
import "./TextField.css";

function TextField(props) {
  return (
    <div className="textfield">
      <p>{props.name}</p>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextField;
