import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { margin, _onClick } = props;

  const styles = { margin: margin };

  return (
    <GridBox {...styles} onClick={_onClick}>
      {/* {children} */}
    </GridBox>
  );
};

Grid.defaultProps = {
  _onClick: () => {},
  margin: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

export default Grid;
