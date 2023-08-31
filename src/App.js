import React, {useState, createContext, useMemo} from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

export const Context = createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  function handleChangeColor() {
    setTheme((prevState)=>prevState == 'dark' ? 'light' : 'dark')
    console.log(theme)
  }

  const currentTheme = useMemo(()=>{
    return theme || themes.dark
  }, [theme])

  return (
    <Context.Provider value={handleChangeColor}>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
