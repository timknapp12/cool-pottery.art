import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Flexbox = ({
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  height = "auto",
  width = "auto",
  children,
  ...props
}) => (
  <Flex
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexDirection={flexDirection}
    height={height}
    width={width}
    {...props}
  >
    {children}
  </Flex>
);

Flexbox.propTypes = {
  /** Flex items */
  children: PropTypes.node.isRequired,

  /** A valid CSS property for justify-content */
  justifyContent: PropTypes.string,

  /** A valid CSS property for align items */
  alignItems: PropTypes.string,

  /** A valid CSS property for flex direction */
  flexDirection: PropTypes.string,

  /** A valid CSS property for height */
  height: PropTypes.string,

  /** A valid CSS property for width */
  width: PropTypes.string,
};

export default Flexbox;
