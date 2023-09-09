import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({theme}) => theme.choosedTheme.backgroundColor};
    color: ${({theme}) => theme.choosedTheme.textColor};
    font-family: sans-serif;
  }
`;
