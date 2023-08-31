import React, {useContext} from 'react';

import { Container } from './styles';

import  { Context }  from '../../App'

export default function Header() {
  const {handleChangeColor, currentTheme} = useContext(Context)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleChangeColor}>{currentTheme == 'dark' ? '🌞' : '🌑'}</button>
    </Container> 
  );
}