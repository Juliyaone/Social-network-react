import React from 'react';
import './DialogItem.css';
import { NavLink } from "react-router-dom";



const DialogItem = ({name, id}) => {
  let path = `/dialogs/${id}`;
  return (
    <li className='dialog-item'>
      <NavLink to={path}>{name}</NavLink>
    </li>
  )
}

export default DialogItem;