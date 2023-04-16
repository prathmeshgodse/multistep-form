import React from "react";
import "./NavigationButton.css";

function NavigationButton(props) {
  return (
    <
        button className={`navigation-button ${props.isFocused ? "focused" : ""}`}
        onClick={props.toggleFocus}
    >
      <p>{props.value}</p>
    </button>
  );
}

export default NavigationButton;
