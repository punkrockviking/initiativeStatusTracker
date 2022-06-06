import React from 'react';
import styled from 'styled-components'

const Button = styled.button`

    /* Adapt the colors based on primary prop */
/*   background: red; */
  background: ${props => props.buttonColor};
  color: black;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;


export default Button