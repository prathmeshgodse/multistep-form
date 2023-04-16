import React from "react";
import "./FormHeader.css"

function FormHeader(props) {
    return (
        <div className="form-header">
            <p className="form-title">
                {props.title}
            </p>
            <p className="form-description">
                {props.description}
            </p>
        </div>
    )
}

export default FormHeader