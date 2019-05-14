import React from "react";
import PropTypes from "prop-types";

import withStyles from "../WithStyles";

const Box = props => {
  const { children, className, style } = props;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Box.propTypes = {
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

Box.defaultProps = {
  children: null,
  className: "",
  style: {}
};

export default withStyles(Box);
