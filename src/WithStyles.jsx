import React from "react";
import PropTypes from "prop-types";

const buildClass = () => {};

const WithStyles = WrappedComponent => {
  const wrappedCmpDefaultProps =
    WrappedComponent && WrappedComponent.defaultProps
      ? WrappedComponent.defaultProps
      : {};

  const Styled = props => {
    const className = buildClass(props);
    const newProps = Object.assign({}, props, className);
    return <WrappedComponent {...newProps} />;
  };

  Styled.propTypes = {
    padding: PropTypes.oneOf(["0", "1", "2", "3"]),
    margin: PropTypes.oneOf(["0", "1", "2", "3"]),
    border: PropTypes.bool,
    rounded: PropTypes.bool,
    bgColor: PropTypes.oneOf([
      "primary",
      "secondary",
      "danger",
      "warning",
      "indigo",
      "orange",
      "black",
      "white"
    ]),
    textColor: PropTypes.oneOf([
      "primary",
      "secondary",
      "danger",
      "warning",
      "indigo",
      "orange",
      "black",
      "white"
    ])
  };

  Styled.deaultProps = {
    padding: wrappedCmpDefaultProps || "0",
    margin: wrappedCmpDefaultProps || "0",
    border: wrappedCmpDefaultProps || false,
    rounded: wrappedCmpDefaultProps || false,
    bgColor: wrappedCmpDefaultProps || "primary",
    textColor: wrappedCmpDefaultProps || "white"
  };

  return Styled;
};

export default WithStyles;
