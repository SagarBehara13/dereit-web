import React from 'react'
import { ThemeProvider } from 'styled-components';
import Theme from './src/styles/Theme';
import GlobalStyle from './src/styles/Global';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    { element }
  </ThemeProvider>
)