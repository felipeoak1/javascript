import React, {useContext} from 'react';

import { Container } from './styles';

import {Context} from '../../App.js'

export default function Footer() {
  const contexto = useContext(Context)
  console.log(contexto.selectedTheme.theme)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={contexto.onToggleTheme} type="button">{contexto.selectedTheme.theme == 'dark' ? '🌞' : '🌚'}</button>
    </Container>
  );
}