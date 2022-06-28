import React from 'react';
import './Paginator.css';


function Paginator({onPageChanged, totalCount, pageSize, currentPage}) {

  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }
  return (
    <div className='pagination-box'>
      { pages.map((page) => {
          return <span 
          className={currentPage === page ? 'active-page number-page' : 'number-page'}  
          onClick = {() => {onPageChanged(page)}}>{page}</span>
        })
      }
    </div>)
}

export default Paginator;