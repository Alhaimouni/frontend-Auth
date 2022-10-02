import React, { useContext } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import '../App.css';

function Login() {
  const { mode } = useContext(themeContext);
  return (
    <div className={`loginPage${mode}`}>
      <div className='form-left'>
        <h1>Welcome to haimouni's White Board</h1>
        <p>Enter the description</p>
      </div>
      <div className='form-right'>
        <SigninForm />
        <SignupForm />
      </div>
    </div >
  )
}

export default Login
