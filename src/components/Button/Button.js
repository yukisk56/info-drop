import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Button.css";

const Button = ({
  label,
  iconBefore,
  onClick,
  type = "button",
  variant = "secondary",
  disabled = false,
}) => {
  return (
    <button
      className={`button ${variant}`}
      data-testid="Button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {iconBefore && <Icon name={iconBefore} />}
      <p>{label}</p>
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconBefore: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  iconBefore: undefined,
  type: undefined,
  variant: undefined,
  disabled: undefined,
};
