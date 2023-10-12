import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './components/reportWebVitals';

import Header from './features/Header/components/Header';
import About from 'features/About/components/About';
import Works from 'features/Works/components/Works';
import Achievements from 'features/Achievements/components/Achievements';
import Contact from 'features/Contact/components/Contact';
import Footer from 'features/Footer/components/Footer';
import GlobalCSS from 'components/GlobalCSS';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { ColorConstants } from 'types/color';
import Top from 'features/Top/components/Top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main : ColorConstants.IMAYOU,
      light: ColorConstants.JINZAMOMI,
      dark : ColorConstants.IMAYOU,
      contrastText: ColorConstants.SAKURA
    },
    secondary: {
      main : ColorConstants.OMESHIONANDO,
      light: ColorConstants.OMESHIONANDO,
      dark : ColorConstants.OMESHIONANDO,
      contrastText: ColorConstants.SAKURA
    }
  }
});

root.render(
  <React.StrictMode>
    <GlobalCSS/>
    <ThemeProvider theme={theme}>
      <Header/>
      <Top/>
      <About/>
      <Works/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
   
  </React.StrictMode>
);

reportWebVitals();
