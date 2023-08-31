import React, { useContext } from 'react';

import { Container } from './styles';

import { Context } from '../../App'

export default function Footer() {
  const changeColor = useContext(Context)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={changeColor}>🌞</button>
    </Container>
  );
}