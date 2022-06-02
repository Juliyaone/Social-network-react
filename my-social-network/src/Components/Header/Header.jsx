import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div className='container'>
      <div className='header__img-wrapper'>
        <img className='header__img' src='https://21mm.ru/upload/iblock/213/213cb4f3c2b36260da079b68bdfc370d.jpg' width='60' height='60' alt='logo'/>
        <div className="header__login-block">
          {props.isAuth ? <NavLink to="/login">Login</NavLink> : props.login}
        </div>
      </div>
    </div>
  );
}

export default Header;