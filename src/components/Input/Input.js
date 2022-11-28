import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ placeholder, name, register, isRequired, value }) => {
  return (
    <input 
      className="input-field" 
      placeholder={placeholder} 
      type="text"
      name={name}
      defaultValue={value}
      {...register(name,  { required: isRequired })}
    />
  );
};

export default Input;

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    register: PropTypes.func
};

Input.defaultProps = {
    placeholder: undefined,
    name: undefined,
    value: undefined,
    register: undefined
}
