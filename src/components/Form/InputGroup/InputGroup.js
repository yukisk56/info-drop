import React from "react";
import PropTypes from "prop-types";
import Input from "../../Input/Input";
import Label from "../../Label/Label";
import Tag from "../../Tag/Tag";
import StatusMessage from "../../StatusMessage/StatusMessage";
import "./InputGroup.css";

const InputGroup = ({ placeholder, name, label, isRequired, register, error }) => {
  return (
    <div className="input-group">
        <Label text={label} />
        {!isRequired && <Tag label="Optional" />}
        <Input 
          placeholder={placeholder} 
          name={name} 
          register={register}
          isRequired={isRequired}
        />
        { error && <StatusMessage label="This field is required" variant="error"/> }
    </div>
  );
};

export default InputGroup;

InputGroup.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    showTag: PropTypes.bool,
    register: PropTypes.func,
    error: PropTypes.object,
};

InputGroup.defaultProps = {
    placeholder: undefined,
    name: undefined,
    label: undefined,
    showTag: false,
    register: undefined,
    error: undefined
}
