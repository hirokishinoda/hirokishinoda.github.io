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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalCSS/>
    <Header/>
    <About/>
    <Works/>
    <Achievements/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
