import React from "react";
import PropTypes from "prop-types";
import {
  IconAdd,
  IconChevronDown,
  IconChevronLeft,
  IconDone,
  IconInfoCircleOutline,
} from "./";

const Icon = ({ name, size = 20 }) => {
  const props = { width: size, height: size };
  const icons = {
    add: <IconAdd {...props} />,
    chevronDown: <IconChevronDown {...props} />,
    chevronLeft: <IconChevronLeft {...props} />,
    done: <IconDone {...props} />,
    infoCircleOutline: <IconInfoCircleOutline {...props} />,
    default: <IconAdd {...props} />,
  };

  return <>{icons[name] || icons["default"]}</>;
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "add",
    "chevronDown",
    "chevronLeft",
    "done",
    "infoCircleOutline",
  ]).isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: undefined,
};

export default Icon;
