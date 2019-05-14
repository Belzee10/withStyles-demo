import React from "react";
import PropTypes from "prop-types";

import Box from "./Box";
import Text from "./Text";
import Button from "./Button";

const Card = props => {
  const { className, style } = props;
  return (
    <Box className={className} style={style}>
      <Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          incidunt delectus provident voluptates voluptatum ratione corporis.
        </Text>
      </Box>
      <Box>
        <Button bgColor="primary" padding="2" border={true}>
          Book now
        </Button>
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

export default Card;
