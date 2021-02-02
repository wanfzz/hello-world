import React from 'react';
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router'

const Button = styled.button<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

function Home() {
  let history = useHistory();
  return (
    <>
      <h1>HOME</h1>
      <Button onClick={() => history.push('/login')}>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </>
  );
}

export default Home
