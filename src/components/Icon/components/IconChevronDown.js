import React from "react";
import PropTypes from "prop-types";

const IconChevronDown = ({ width, height }) => {
  return (
    <svg
      data-testid="IconChevronDown"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IconChevronDown;

IconChevronDown.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
