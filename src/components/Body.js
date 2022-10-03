import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ThemeProvider from '../contexs/ThemeProvider';

function Body() {
  return (
    <div>
      
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}

export default Body
