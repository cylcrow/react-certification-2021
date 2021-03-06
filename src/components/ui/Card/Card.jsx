import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledDiv = styled.div`
  overflow: hidden;
  height: 345px;
  width: 345px;
  margin: 8px;
  box-shadow: 2px 2px 2px 2px #ccc;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.surface};

  &:hover {
    background: lightgray;
  }
`;

const Card = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledDiv role={props.role || ''} theme={theme}>
      {props.children}
    </StyledDiv>
  );
};

export default Card;