import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import PropTypes from 'prop-types'
import { Container } from './styles';

export default function Footer() {
  const {theme, handleToggleTheme} = useContext(ThemeContext)
  return (
    <Container> 
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>{theme == 'dark' ? '🌞': '🌚'}</button>
    </Container>
  );
}

// Footer.propTypes = {
//   changeColor: PropTypes.func.isRequired,
//   tema: PropTypes.string.isRequired,
// }