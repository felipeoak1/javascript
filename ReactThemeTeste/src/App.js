import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import {ThemeProvider, ThemeContext} from './contexts/ThemeContext'

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

import themes from './styles/themes'

import { themeProps } from './styles/themes/common.js';

// Todas as classes precisam herdar da React Component
export default class App extends React.Component {

  // Criação do construtor da classe, com o argumento props que está dentro da classe que herdamos.
  
  // state = {
  //   theme : 'dark'
  // }

  // No lugar de utilizarmos a função padrão, onde é necessário alterarmos o this padrão dela, utilizamos a arrow function que não possui um this próprio e utiliza o this do contexto onde ela foi criada.
  // handleToggleTheme = () => {
    // console.log('handletoggletheme executou')
    // this.setState(prevState=>({theme: prevState.theme == 'dark' ? 'light' : 'dark'}))
    // Atualização forçada do componente mesmo sem alteração de props ou states.
    // this.forceUpdate()
  // } 

  render() {
  
    return ( 
      <ThemeProvider>

        <ThemeContext.Consumer>

        {({theme, handleToggleTheme}) => (
            <StyledThemeProvider theme={{choosedTheme: themes[theme] || themes.dark, themeProps: themeProps}}>

                <GlobalStyle />
                <Layout 
                changeColor = {handleToggleTheme} 
                tema={theme}
                />
                  
            </StyledThemeProvider>
        )}

        </ThemeContext.Consumer>

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


