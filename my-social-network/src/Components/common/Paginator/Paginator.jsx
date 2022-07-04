import React, { useState } from 'react';
import './Paginator.css';


function Paginator({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
console.log(totalItemsCount, pagesCount);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumder] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div className='pagination-box'>
      {portionNumber > 1 &&
      <button onClick={() => {setPortionNumder(portionNumber - 1)}}>PREV</button> }
      { pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
          return <span 
          className={currentPage === p ? 'active-page number-page' : 'number-page'}  
          onClick = {(e) => {onPageChanged(p)}}>{p}</span>
        })
      }
      {portionCount > portionNumber &&
      <button onClick={() => {setPortionNumder(portionNumber  + 1)}}>NEXT</button> }

    </div>)
}

export default Paginator;