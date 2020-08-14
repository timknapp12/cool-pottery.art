import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => (props.size ? props.size : "auto")};
  height: ${(props) => (props.size ? props.size : "auto")};
`;

const Image = ({ src, alt, size = "8rem", ...props }) => (
  <StyledImage size={size} src={src} alt={alt} {...props} />
);

Image.propTypes = {
  /** source for the image */
  src: PropTypes.string.isRequired,
  /** alt text for the image */
  alt: PropTypes.string.isRequired,
  /** height and width for the image */
  size: Proptypes.string,
};
