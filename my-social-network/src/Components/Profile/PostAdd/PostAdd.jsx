import './PostAdd.css'
import {createRef} from 'react';

const PostAdd = ({ postChange, addPost, newPostText }) => {

  let newPostElement = createRef(null);

  const onAddPost = () => {
    addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    postChange(text);
  }

  return (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}></textarea>
      </div>
      <button onClick={onAddPost}>Добавить</button>
    </div>
  )
}


export default PostAdd;