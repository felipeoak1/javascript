import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

import themes from './styles/themes'

import { themeProps } from './styles/themes/common.js';

export default class App extends React.Component {

  constructor(props) {{ 
    super(props)
    this.state = {
      theme: 'dark',
      oiTudoBem: true
    }}

    this.handleToggleTheme = this.handleToggleTheme.bind(this)
  }

  handleToggleTheme() {
    this.setState(prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}))
  }

  render() {
    let { theme } = this.state

    return ( 
        <ThemeProvider theme={{choosedTheme: themes[theme] || themes.dark, themeProps: themeProps}}>
          <GlobalStyle />
          <Layout 
            changeColor = {this.handleToggleTheme}
            tema={theme}/>
        </ThemeProvider>
    );
  }
 
 
  // const [theme, setTheme] = useState('dark')

  // function handleChangeColor() {
  //   setTheme((prevState)=>prevState == 'dark' ? 'light' : 'dark')
  //   console.log(theme)
  // }

  // const currentTheme = useMemo(()=>{
  //   return theme || themes.dark
  // }, [theme])


};
