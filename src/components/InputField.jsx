import React from "react";
import "../CSS/componentsCSS/InputField.css";

const InputField = ({ fieldName, type, placeholder }) => {
  return (
    <>
      <div>
        <label htmlFor={fieldName.split(" ").join("").toLowerCase()}>
          {fieldName}
        </label>
        <br />
        <input
          type={type}
          name={fieldName.split(" ").join("").toLowerCase()}
          id={fieldName.split(" ").join("").toLowerCase()}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputField;
