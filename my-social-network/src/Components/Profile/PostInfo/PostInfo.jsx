import PreLoader from '../../common/preloader/PreLoader';
import './PostInfo.css'

const PostInfo = (props) => {

  console.log(props.profile.photos);

  if(props.profile === null) {
    return <PreLoader/>
  }

  return (
    <>
      <div>
        <img src={props.profile.photos.large} width="200px" height="200px" alt='profile-avatar'></img>
      </div>
      <div>{props.profile}</div>
    </>
  )
}
export default PostInfo;