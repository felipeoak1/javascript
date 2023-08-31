import React, {useContext} from 'react';

import { Container } from './styles';

import {Context} from '../../App.js'

export default function Header() {
  
  const contexto = useContext(Context)
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={contexto.onToggleTheme} type="button">{contexto.selectedTheme.theme == 'dark' ? '🌞' : '🌚'}</button>
    </Container>
  );
}