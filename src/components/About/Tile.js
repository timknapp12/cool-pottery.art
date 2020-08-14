import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../Image";
import { StyledText } from "../constants";

const Wrapper = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: white;
`;

const Title = styled(StyledText)`
  font-weight: 700;
  color: black;
`;

const Tile = ({ src, alt, title = "", description = "", ...props }) => (
  <Wrapper {...props}>
    <Image src={src} alt={alt} />
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
