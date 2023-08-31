import React, { useContext } from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

import { Context } from '../../App'

export default function Footer() {
  const {handleChangeColor, currentTheme} = useContext(Context)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleChangeColor}>{currentTheme == 'dark' ? '🌞': '🌚'}</button>
    </Container>
  );
}