import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../contexs/ThemeProvider';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";


function Header() {

  const theme_Context = useContext(themeContext);
  const { isLogged, setIsLogged } = useContext(AuthContext);

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('_id');
    setIsLogged(false);
  }

  return (
    <nav className={`bp4-navbar bp4-${theme_Context.mode}`}>
      <div className="bp4-navbar-group bp4-align-left">
        <div className="bp4-navbar-heading">Haimouni's White Board</div>
      </div>
      <div className="bp4-navbar-group bp4-align-right">
        {isLogged && <Link to="/" className="bp4-button bp4-minimal bp4-icon">Main</Link>}
        {isLogged && <button  className="bp4-button bp4-minimal bp4-icon-user">{cookies.load('username')}</button>}
        {isLogged && <Link to="/login" className="bp4-button bp4-minimal bp4-icon" onClick={logOut}>Logout</Link>}
        <span className="bp4-navbar-divider"></span>
        <button className="bp4-button bp4-minimal bp4-icon" onClick={theme_Context.switchMode}>{theme_Context.mode} mode</button>
      </div>
    </nav>
  )
}

export default Header
