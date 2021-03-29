import React from "react";
import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ label }) => {
  return (
    <span className="tag" data-testid="Tag">
      {label}
    </span>
  );
};

export default Tag;

Tag.propTypes = { label: PropTypes.string.isRequired };
