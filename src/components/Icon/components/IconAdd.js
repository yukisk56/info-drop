import React from "react";
import PropTypes from "prop-types";

const IconAdd = ({ width, height }) => {
  return (
    <svg
      data-testid="IconAdd"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2888 4.71114L11.2888 10.8036L5.19639 10.8036V13.1964L11.2888 13.1964L11.2888 19.2889L13.6817 19.2889L13.6817 13.1964L19.7741 13.1964V10.8036L13.6817 10.8036L13.6817 4.71114L11.2888 4.71114Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IconAdd;

IconAdd.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
