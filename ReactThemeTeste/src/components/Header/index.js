import React from 'react';
import PropTypes from 'prop-types'
import {ThemeContext} from '../../contexts/ThemeContext'

import { Container } from './styles';

export default class Header extends React.Component {
  
  render() {
    // const {changeColor} = this.props
    // const {tema} = this.props
    
    return ( 

      <ThemeContext.Consumer>
        {({theme, handleToggleTheme})=>(
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={()=>handleToggleTheme()}>{theme == 'dark' ? '🌞' : '🌑'}</button>
          </Container> 
        )}
      </ThemeContext.Consumer>
    )
  }
}

// Se não há props não há necessidade de propTypes.
// Header.propTypes = {
//   changeColor: PropTypes.func.isRequired,
//   tema: PropTypes.string.isRequired,
// }