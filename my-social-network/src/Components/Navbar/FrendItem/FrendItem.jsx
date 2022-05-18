import './FrendItem.css';
import { NavLink, useNavigate } from 'react-router-dom';

const FrendItem = ({id, name}) => {
  return (
    <li className='side-bar__frends-item'>{name}</li>
  );
};

export default FrendItem;
