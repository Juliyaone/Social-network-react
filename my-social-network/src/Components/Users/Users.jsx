import React from 'react';
import userPhoto from '../../assecs/img/user_icon.svg';
import { NavLink } from "react-router-dom";
import { followAPI } from '../../api/api';
import './Users.css';


function Users(props) {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }
    return (
      <div>
        <div className='pagination-box'>
          { pages.map((page) => {
              return <span 
              className={props.currentPage === page ? 'active-page number-page' : 'number-page'}  
              onClick = {() => {props.onPageChanged(page)}}>{page}</span>
            })
          }
        </div>

        {props.users.map((user) => <div key={user.id}>
          <div>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img className='user-photo' src={user.photos.small != null ? user.photos.small : userPhoto} width='100px' height='100px' alt='avatar'></img>
              </NavLink>
            </div>
            <div>
              {user.followed ? 

              <button disabled = {props.folowingProgress.some(id => id === user.id)} onClick={() => { 
                props.toggleIsFolowingProgress(true, user.id);

                followAPI.getUnFollow(user.id).then(data => {
                  if(data.resultCode === 0) {
                    props.unFollow(user.id);
                  }
                  props.toggleIsFolowingProgress(false, user.id)
                })
              }}>unFollow</button> : 

              <button disabled = {props.folowingProgress.some(id => id === user.id)} onClick={() => {
                props.toggleIsFolowingProgress(true, user.id);

                followAPI.getFollow(user.id).then(data => {
                  if(data.resultCode === 0) {
                    props.follow(user.id);
                  }
                  props.toggleIsFolowingProgress(false, user.id)

                })
                }}>follow</button>}
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
        </div>)}
      </div>
    )}

export default Users;