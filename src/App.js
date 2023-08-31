import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

export const Context = createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(()=>{
    return themes[theme] || themes.dark
  }, [theme])
  
  
  function handleToggleTheme() {
    setTheme(prevState => prevState == 'dark' ? 'light' : 'dark' )
    console.log(theme)
  } 
  
  return (
    <Context.Provider value={{onToggleTheme: handleToggleTheme, selectedTheme:{theme}}}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
