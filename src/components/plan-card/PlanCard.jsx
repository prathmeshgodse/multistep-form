import React from "react";
import "./PlanCard.css";

function PlanCard(props) {
  const handelOnClick = () => {
    props.onClick(props.name);
  };

  return (
    <div
      className={`plan-card${props.isSelected ? " selected" : ""}`}
      onClick={handelOnClick}
    >
      <img src={props.icon} alt="plan-icon" />
      <div className="details">
        <p className="name">{props.name}</p>
        <p className="price">{`$${props.price}/${
          props.tenureIsYearly ? "yr" : "mo"
        }`}</p>
        {props.tenureIsYearly ? <p className="perks">{props.perks}</p> : null}
      </div>
    </div>
  );
}

export default PlanCard;
