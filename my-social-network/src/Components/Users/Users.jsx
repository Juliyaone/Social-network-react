import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import './Users.css';


function Users({ users, onPageChanged, totalItemsCount, pageSize, currentPage, folowingProgress, unFollow, follow, ...props }) {
    return (
      <>
      <div>
        <Paginator onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}/>
      </div>

        {users.map((user) => <User folowingProgress={folowingProgress} unFollow={unFollow} follow={follow} user={user} key={user.id}/> )}
        </>
    )}

export default Users;