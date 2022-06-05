
import React from "react";

import "./Button.css";

const Button = (props) => {
    return (
        <>
            <button
                className={`btn btn-${props.type} ${props.size} ${props.shape}`}
            >
                {props.value}
            </button>
        </>
    );

};

export default Button;
