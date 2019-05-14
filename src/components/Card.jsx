import React from "react";
import PropTypes from "prop-types";

import withStyles from "../WithStyles";

import Box from "./Box";
import Text from "./Text";
import Button from "./Button";

const Card = props => {
  const {
    cardBodySettings,
    cardFooterSettings,
    buttonSettings,
    textSettings,
    className,
    style
  } = props;
  return (
    <Box className={className} style={style}>
      <Box {...cardBodySettings}>
        <Text {...textSettings}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          incidunt delectus provident voluptates voluptatum ratione corporis.
        </Text>
      </Box>
      <Box {...cardFooterSettings}>
        <Button {...buttonSettings}>Book now</Button>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  /**
   * Class applied to component
   */
  className: PropTypes.string,
  /**
   * Inline styles applied to component
   */
  style: PropTypes.objectOf(PropTypes.any)
};

Card.defaultProps = {
  className: "",
  style: {}
};

export default withStyles(Card);
