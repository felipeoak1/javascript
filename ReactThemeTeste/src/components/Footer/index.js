import React from 'react';
import PropTypes from 'prop-types'
import { Container } from './styles';

export default function Footer(props) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={props.changeColor}>{props.tema == 'dark' ? '🌞': '🌚'}</button>
    </Container>
  );
}

Footer.propTypes = {
  changeColor: PropTypes.func.isRequired,
  tema: PropTypes.string.isRequired,
}