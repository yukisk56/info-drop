import React from "react";
import PropTypes from "prop-types";

const IconDone = ({ width, height }) => {
  return (
    <svg
      data-testid="IconDone"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.52501 17.657L4.57501 12.707L5.98901 11.293L9.64301 14.943L9.52501 14.828L18.01 6.34299L19.424 7.75699L10.939 16.243L9.52601 17.656L9.52501 17.657Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IconDone;

IconDone.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
