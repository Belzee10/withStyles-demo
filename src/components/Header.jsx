import React from "react";
import PropTypes from "prop-types";

import withStyles from "../WithStyles";

const Header = props => {
  const { type, children, className, style } = props;
  const Tag = type;
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

Header.propTypes = {
  /**
   * Type of the element
   */
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
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

Header.defaultProps = {
  type: "h2",
  children: null,
  className: "",
  style: {}
};

export default withStyles(Header);
