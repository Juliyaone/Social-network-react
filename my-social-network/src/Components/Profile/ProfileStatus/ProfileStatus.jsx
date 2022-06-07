import React from 'react';
import {useState} from 'react';

function ProfileStatus(props) {

  const [state, setState] = useState(true);
  

  return (
    <>
    {(state === true) ?
    <div>
      <span onDoubleClick={() => setState(prevCount => !prevCount)}>Спан</span>
    </div> : 
    <div>
      <input onBlur={() => setState(prevCount => !prevCount)} autoFocus={true} value='введите статус' />
    </div>
    }
    </>
  );
}

export default ProfileStatus;