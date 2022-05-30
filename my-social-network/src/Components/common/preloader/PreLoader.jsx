import React from 'react';
import preLoaderImg from "../../../assecs/img/preLoader.svg"


function PreLoader(props) {
  return (
    <div>
      {props.isFetching ? <img src={preLoaderImg} width="200px" height="100px"/> : null }
    </div>
  );
}

export default PreLoader;