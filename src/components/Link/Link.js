import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Link.css";

const Link = ({ label, iconBefore, to, variant = "secondary" }) => {
  return (
    <RouterLink className={`link ${variant}`} data-testid="Link" to={to}>
      {iconBefore && <Icon name={iconBefore} />}
      <p>{label}</p>
    </RouterLink>
  );
};

export default Link;

Link.propTypes = {
  label: PropTypes.string.isRequired,
  iconBefore: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

Link.defaultProps = {
  iconBefore: undefined,
  variant: undefined,
};
