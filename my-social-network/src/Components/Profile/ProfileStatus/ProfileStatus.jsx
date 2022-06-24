import React from 'react';
import {useState, useEffect} from 'react';

function ProfileStatus(props) {

  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(props.status);



useEffect(() => {
      setStatus(props.status)
  }, [props.status]);

  const onChangeStatus = (evt) => {
    setStatus(evt.currentTarget.value);
  }

  const onChangeElement = () => {
    setToggle(false);

    props.updateUserStatus(status);
  }
  
  return (
    <>
    {(toggle === false) ?
    <div>
      <span onDoubleClick={() =>{setToggle(true)} }> {props.status || "no status yet"}</span>
    </div> : 
    <div>
      <input 
        autoFocus={true}
        placeholder="Заполни поле статус"
        onBlur={onChangeElement}
        onChange={onChangeStatus}
        value={status}
      />
    </div>
    }
    </>
  );
}

export default ProfileStatus;