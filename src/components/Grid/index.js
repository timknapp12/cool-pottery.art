import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-columns: 100%;
  ${({ columnGapSize, rowGapSize, gapSize, min }) => `
    @media (min-width: ${min}) {
      grid-template-columns: repeat( auto-fit, minmax(${min}, 1fr) );
    }
    grid-column-gap: ${columnGapSize || gapSize};
    grid-row-gap: ${rowGapSize || gapSize};
  `};
`;

const Grid = ({
  gapSize = "1rem",
  columnGapSize,
  rowGapSize,
  min = "9.375rem",
  children,
  ...props
}) => (
  <Container {...{ gapSize, columnGapSize, rowGapSize, min, ...props }}>
    {children}
  </Container>
);

Grid.propTypes = {
  /** Grid items */
  children: PropTypes.node.isRequired,

  /** A valid px, rem, or em unit that defines the minimum size of each grid item before wrapping */
  min: PropTypes.string,

  /** Gutter space between columns and rows */
  gapSize: PropTypes.string,

  /** Overrides gapSize for column gutter space only */
  columnGapSize: PropTypes.string,

  /** Overrides gapSize for row gutter space only */
  rowGapSize: PropTypes.string,
};

export default Grid;
