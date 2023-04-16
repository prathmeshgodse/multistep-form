import React from "react";
import Switch from "react-switch";
import "./ToggleSwitch.css";

function ToggleSwitch(props) {
  return (
    <div className="toggle-switch">
      <p className={`${props.isChecked ? "" : "selected"}`}>
        {props.leftValue}
      </p>
      <div className="switch">
        <Switch
          onChange={props.onChange}
          checked={props.isChecked}
          offColor="#02295a"
          onColor="#02295a"
          height={16}
          width={32}
          handleDiameter={10}
          onHandleColor="#ffffff"
          offHandleColor="#ffffff"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
      <p className={`${props.isChecked ? "selected" : ""}`}>
        {props.rightValue}
      </p>
    </div>
  );
}

export default ToggleSwitch;
