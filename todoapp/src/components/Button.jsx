import React from "react";

const Button = ({buttonName,onclick}) => {


    return(
        <input
        type="button"
        value={buttonName}
        onClick={onclick}
        />
    );
}
export default Button;