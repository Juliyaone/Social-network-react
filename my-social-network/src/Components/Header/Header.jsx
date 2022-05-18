import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='container'>
      <div className='header__img-wrapper'>
        <img className='header__img' src='https://21mm.ru/upload/iblock/213/213cb4f3c2b36260da079b68bdfc370d.jpg' width='60' height='60' alt='logo'/>
      </div>
    </div>
  );
}

export default Header;