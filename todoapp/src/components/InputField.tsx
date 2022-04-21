import React from 'react';

const InputField = () => {
    //const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            //className="form-control add-todo"
            // value={value}
            // onKeyUp={handleKeyUp}
            // onChange={handleChange}
            placeholder="Add New Task"
        />
    );
}

export default InputField;