import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import FrendItem from './FrendItem/FrendItem';

// import StoreCotext from '../../../src/StoreCotext';



const Navbar = () => {
  return (
    <>
      <nav className='side-bar-nav'>
        <ul className='side-bar__list'>
          <li className='side-bar__item'><NavLink className='side-bar__link' to='/profile'>Profile</NavLink></li>
          <li className='side-bar__item'><NavLink className='side-bar__link' to='/dialogs'>Messages</NavLink></li>
          <li className='side-bar__item'><NavLink className='side-bar__link' to='/news'>News</NavLink></li>
          <li className='side-bar__item'><NavLink className='side-bar__link' to='/music'>Music</NavLink></li>
          <li className='side-bar__item'><NavLink className='side-bar__link' to='/settings'>Settings</NavLink></li>
        </ul>
      </nav>

      <h3>Мои Друзья</h3>

      <ul className='side-bar__frends-list'>
        {/* {state.getState().sidebar?.frendsData?.frends.map((frend) => <FrendItem key={frend.id} name={frend.name}/>)} */}
      </ul>
      
    </>
  );
};

export default Navbar;
