import React, { useState } from 'react'

export const themeContext = React.createContext();

function ThemeProvider(props) {

  const [mode, setMode] = useState('light');

  function switchMode() {
    const currentMode = (mode === 'light') ? 'dark' : 'light';
    setMode(currentMode);
  }

  const themeStates = { mode, setMode, switchMode };

  return (
    <themeContext.Provider value={themeStates}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
