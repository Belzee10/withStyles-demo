import React from "react";
import PropTypes from "prop-types";

import withStyles from "../WithStyles";

const Text = props => {
  const { type, children, className, style } = props;
  const Tag = type;
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  /**
   * Type of the element
   */
  type: PropTypes.oneOf(["span", "label", "p"]),
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

Text.defaultProps = {
  type: "span",
  children: null,
  className: "",
  style: {}
};

export default withStyles(Text);
