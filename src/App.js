import React from 'react';

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

}

  render() {
    let { theme } = this.state

    return ( 
        <ThemeProvider theme={{choosedTheme: themes[theme] || themes.dark, themeProps: themeProps}}>
          <GlobalStyle />
          <Layout 
            changeColor = {()=> this.setState({theme: theme === 'dark' ? 'light' : 'dark' })} 
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
