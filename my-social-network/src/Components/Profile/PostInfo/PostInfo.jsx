import PreLoader from '../../common/preloader/PreLoader';
import './PostInfo.css'

const PostInfo = (props) => {

  if(!props.profile) {
    return <PreLoader/>
  }

  return (
    <>
      <div>
        <img src={props.profile.photos.large} width="200px" height="200px" alt='profile-avatar'></img>
      </div>
      <div> + Description</div>
    </>
  )
}
export default PostInfo;