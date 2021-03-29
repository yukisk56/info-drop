import React from "react";
import PropTypes from "prop-types";
import "./StatusMessage.css";

const StatusMessage = ({ label, variant }) => {
  return (
    <p className={`statusMessage ${variant}`} data-testid="StatusMessage">
      {label}
    </p>
  );
};

export default StatusMessage;

StatusMessage.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["loading", "error", "success"]),
};
