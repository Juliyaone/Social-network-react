import React from 'react';
import userPhoto from '../../assecs/img/user_icon.svg';
import { NavLink } from "react-router-dom";
import './Users.css';


function User({ folowingProgress, unFollow, follow, user, ...props }) {

    return (
        <div>
          <div>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img className='user-photo' src={user.photos.small != null ? user.photos.small : userPhoto} width='100px' height='100px' alt='avatar'></img>
              </NavLink>
            </div>
            <div>
              {user.followed ? 

              <button disabled = {folowingProgress.some(id => id === user.id)} onClick={() => { 
                unFollow(user.id);
              }}>unFollow</button> : 

              <button disabled = {folowingProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id);
                }}>follow</button>

              }
            </div>
          </div>
          <div>
            <div>
              <span>{user.name}</span>
              <span>{user.status}</span>
            </div>
            <div>
              <span>{"user.location.cantry"}</span>
              <span>{"user.location.city"}</span>
            </div>
        </div>
      </div>
    )}

export default User;