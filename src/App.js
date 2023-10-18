import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

import themes from './styles/themes'

import { themeProps } from './styles/themes/common.js';

// Todas as classes precisam herdar da React Component
export default class App extends React.Component {

  // Criação do construtor da classe, com o argumento props que está dentro da classe que herdamos.

  state = {
      theme: 'dark',
      oiTudoBem: true
    }

  // No lugar de utilizarmos a função padrão, onde é necessário alterarmos o this padrão dela, utilizamos a arrow function que não possui um this próprio e utiliza o this do contexto onde ela foi criada.
  handleToggleTheme = () => {
    this.setState(prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}))
  }

  render() {
    let { theme } = this.state

    return ( 
        <ThemeProvider theme={{choosedTheme: themes[theme] || themes.dark, themeProps: themeProps}}>
          <GlobalStyle />
          <Layout changeColor = {this.handleToggleTheme} tema={theme}/>
        </ThemeProvider>
    );
  }
}
 
  // const [theme, setTheme] = useState('dark')

  // function handleChangeColor() {
  //   setTheme((prevState)=>prevState == 'dark' ? 'light' : 'dark')
  //   console.log(theme)
  // }

  // const currentTheme = useMemo(()=>{
  //   return theme || themes.dark
  // }, [theme])


