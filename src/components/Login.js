import React, { useContext, useEffect } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import cookies from 'react-cookies';
import '../App.css';

function Login() {
  const { mode, setMode } = useContext(themeContext);

  useEffect(() => {
    setMode(cookies.load("mode"));
  }, []);

  return (
    <div className={`loginPage${mode}`}>
      <div className='form-left'>
        <h1>Welcome to haimouni's White Board</h1>
        <p id='entry'>Free use WhiteBoard  a stress-relief cheerful whiteboard for your 401 class,
          where your classmates can meet and gather in one place for adding jokes about programming,
          sharing their happy/sad moments while coding through the program in addition to adding some
          motivational quotes to cheer others up. So, be creative and ENJOY developing it.</p>
      </div>
      <div className='form-right'>
        <SigninForm />
        <SignupForm />
      </div>
    </div >
  )
}

export default Login
