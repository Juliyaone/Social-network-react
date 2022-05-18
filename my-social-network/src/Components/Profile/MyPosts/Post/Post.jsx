import './Post.css'

const Post = ({post, likescount}) => {
  
return (
    <li className='post'>

      <div className='post__img-wrapper'>
        <img className='post__img' width='50' height='autho' src='https://pbs.twimg.com/media/EckWzVgWkAMcFXk.jpg' alt='avatar'/> 
      </div>
      <p>{post}</p>

      <button>Like</button>
      <span>{likescount}</span>


    </li>
  )
}
export default Post;