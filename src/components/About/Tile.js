import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../Image";
import { StyledText, white, black } from "../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: ${white};
  height: 100%;
  max-width: ${(props) => (props.size ? props.size : "auto")};
  border-radius: 8px;
`;

const Title = styled(StyledText)`
  font-weight: 700;
  color: ${black};
`;

const Tile = ({ src, alt, title = "", description = "", size, ...props }) => (
  <Wrapper size={size} {...props}>
    <Image src={src} alt={alt} size={size} />
    {title}
    <br />
    {description}
  </Wrapper>
);

Tile.propTypes = {
  /** source for the image */
  src: PropTypes.string.isRequired,
  /** alt text for the image */
  alt: PropTypes.string.isRequired,
  /** Title of the tile */
  title: PropTypes.string,
  /** description of the tile */
  description: PropTypes.string,
};

export default Tile;
