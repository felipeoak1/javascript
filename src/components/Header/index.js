import React, {useContext} from 'react';

import { Container } from './styles';

import  { Context }  from '../../App'

export default class Header extends React.Component {
  render() {
    const {changeColor} = this.props
    const {tema} = this.props
    return ( 
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={()=>changeColor()}>{tema == 'dark' ? '🌞' : '🌑'}</button>
      </Container> 
    )
  }
}