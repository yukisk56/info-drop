import React from "react";
import PropTypes from "prop-types";

const IconChevronLeft = ({ width, height }) => {
  return (
    <svg
      data-testid="IconChevronLeft"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.28802 12L14.298 18.01L15.712 16.596L11.112 11.996L15.712 7.39599L14.298 5.98999L8.28802 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IconChevronLeft;

IconChevronLeft.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
