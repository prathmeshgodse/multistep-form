import React from "react";
import "./CallToActionButton.css"

function CallToActionButton(props) {
  return (
    <button className={`call-to-action-button ${props.isFinalAction ? "final-action": ""}`} onClick={props.onClick}>
      <p>{props.label}</p>
    </button>
  );
}

export default CallToActionButton
