import React from "react";

const Button = (props: any) => {

    const {buttonName} = props;

    return(
        <input
        type="button"
        value={buttonName}
        />
    );
}
export default Button;