import React, {useState, createContext, useMemo, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

import { themeProps } from './styles/themes/common.js';

export const Context = createContext()

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'light',
      oiTudoBem: true, 
    }
  }

  render() {
    const { theme } = this.state

    function handleChangeColor() {
      return theme === 'dark' ? 'light' : 'dark' 
    }
    
    return ( 
      <Context.Provider value={handleChangeColor}>
        <ThemeProvider theme={{choosedTheme: themes[theme], themeProps: themeProps}}>
          <GlobalStyle />
          <Layout changeColor = {()=>this.setState({theme: theme === 'dark' ? 'light' : 'dark' })} tema={theme}/>
        </ThemeProvider>
      </Context.Provider>
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
