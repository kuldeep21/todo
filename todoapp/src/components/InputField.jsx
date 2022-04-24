import React from 'react';
import "./inputField.css";

const InputField = ({value,handleChange}) => {
    //const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            className="inputField"
             value={value}
            onChange={handleChange}
            placeholder="Add New Task"
        />
    );
}

export default InputField;