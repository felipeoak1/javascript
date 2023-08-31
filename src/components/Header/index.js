import React, {useContext} from 'react';

import { Container } from './styles';

import  { Context }  from '../../App'

export default function Header() {
  const changeColor = useContext(Context)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={changeColor}>🌞</button>
    </Container>
  );
}