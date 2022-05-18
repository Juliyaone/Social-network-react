import './Mypost.css';
import Post from './Post/Post';

const Myposts = ({posts}) => {

  return (
    <div className='posts-box'>
      <h3>My Posts</h3>

      <div>
        <h3>Posts</h3>
        <ul className='post-list'>
          {posts.map((item) => 
          (<Post post={item.post} likescount={item.likescount}/> ))}
        </ul>
      </div>
    </div>
  )
}
export default Myposts;