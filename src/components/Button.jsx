import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { children, className, style } = props;
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: "",
  style: ""
};

export default Button;
