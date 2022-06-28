import './Mypost.css';
import Post from './Post/Post';

const Myposts = (props) => {
  return (
    <div className='posts-box'>
      <h3>My Posts</h3>

      <div>
        <h3>Posts</h3>
        <ul className='post-list'>
          {props.posts.map((item) => 
          (<Post key={item.id} post={item.post} likescount={item.likescount}/> )).reverse()}
        </ul>
      </div>
    </div>
  )
}
export default Myposts;