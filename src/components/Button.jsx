import React from 'react';
import styled from "styled-components";

function Button(props) {
    return (
        <StyledButton primary={ props.primary}  onClick={props.onClick}>
            { props.children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button
