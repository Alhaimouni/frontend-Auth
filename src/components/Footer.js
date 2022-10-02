import React, { useContext } from 'react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <div className={`foot${theme_Context.mode}`}>
      <p>All right reserved 2022</p>
    </div >
  )
}

export default Footer
