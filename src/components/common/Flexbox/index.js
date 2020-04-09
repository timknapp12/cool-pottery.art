import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

const Flexbox = ({
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  children,
  ...props
}) => (
  <Flex
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexDirection={flexDirection}
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
};

export default Flexbox;
