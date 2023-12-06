import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

import { CssBaseline, createTheme } from '@mui/material';
import { ContainerApp } from './ContainerApp';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A7CE',
    },
    secondary: {
      main: '#0073FF'
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <ContainerApp />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
)
