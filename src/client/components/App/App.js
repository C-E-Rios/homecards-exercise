import React from 'react';
import './app.css';

import { ThemeProvider } from '@material-ui/styles';
import themeContext from '../../context/theme.context'

import Header from '../Header/Header';
import HomecardList from '../HomecardList/HomecardList';

function App () {
  return (
    <ThemeProvider theme={themeContext}>
      <Header />
      <HomecardList />
    </ThemeProvider>
  );
}

export default App;
