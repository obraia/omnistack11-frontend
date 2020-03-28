import React, { useState } from 'react';

import userPersistedState from './utils/userPersistedState';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light.js';
import dark from './styles/themes/dark.js';

import ButtonTheme from './components/ButtonTheme';

import Routes from './routes';

function App() {

  const [theme, setTheme] = userPersistedState('themeBeTheHope', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ButtonTheme toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
