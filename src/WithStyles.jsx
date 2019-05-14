import React from "react";
import PropTypes from "prop-types";

const buildClass = props => {
  const propNamesMapped = {
    padding: "p",
    margin: "m",
    border: "border",
    rounded: "rounded",
    bgColor: "bg",
    textColor: "text",
    cursor: "cursor"
  };

  let classes = "";
  if (props.className !== undefined) classes = props.className;
  for (const key in props) {
    if (propNamesMapped.hasOwnProperty(key)) {
      classes +=
        typeof props[key] === "string"
          ? ` ${propNamesMapped[key]}-${props[key]}` // the prop value is a String
          : ` ${propNamesMapped[key]}`; /// the prop value is a Boolean
    }
  }
  return classes;
};

const WithStyles = WrappedComponent => {
  const wrappedCmpDefaultProps =
    WrappedComponent && WrappedComponent.defaultProps
      ? WrappedComponent.defaultProps
      : {};

  const Styled = props => {
    const className = buildClass(props);
    const newProps = { ...props, className };

    return <WrappedComponent {...newProps} />;
  };

  Styled.propTypes = {
    padding: PropTypes.oneOf(["0", "1", "2", "3"]),
    margin: PropTypes.oneOf(["0", "1", "2", "3"]),
    border: PropTypes.bool,
    rounded: PropTypes.bool,
    cursor: PropTypes.oneOf(["default", "pointer"]),
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
    cursor: wrappedCmpDefaultProps || "default",
    bgColor: wrappedCmpDefaultProps || "primary",
    textColor: wrappedCmpDefaultProps || "white"
  };

  return Styled;
};

export default WithStyles;
