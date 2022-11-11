import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ placeholder, name, onChange, register, isRequired }) => {
  return (
    <input 
      className="input-field" 
      placeholder={placeholder} 
      type="text"
      name={name}
      onChange={onChange}
      {...register(name,  { required: isRequired })}
    />
  );
};

export default Input;

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func
};

Input.defaultProps = {
    placeholder: undefined,
    name: undefined,
    register: undefined
}
