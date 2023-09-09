import React, {useContext} from 'react';

import { Container } from './styles';

import  { Context }  from '../../App'

export default function Header(props) {
  const currentTheme = 'dark'
  console.log(props)
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={()=>props.changeColor()}>{currentTheme == 'dark' ? '🌞' : '🌑'}</button>
    </Container> 
  );
}