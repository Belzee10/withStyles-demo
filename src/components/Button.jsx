import React from "react";
import PropTypes from "prop-types";

import withStyles from "../WithStyles";

const Button = props => {
  const { children, className, style } = props;
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   *  Component's children
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Class applied to component
   */
  className: PropTypes.string,
  /**
   * Inline styles applied to component
   */
  style: PropTypes.objectOf(PropTypes.any)
};

Button.defaultProps = {
  children: null,
  className: "",
  style: {}
};

export default withStyles(Button);
