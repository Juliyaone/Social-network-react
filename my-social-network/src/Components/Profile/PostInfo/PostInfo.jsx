import PreLoader from '../../common/preloader/PreLoader';
import userPhoto from '../../../assecs/img/user_icon.svg';

import './PostInfo.css'

const PostInfo = (props) => {

  // console.log(profile);

  if(props.profile == null) {
    return <PreLoader />
  }

  return (
    <>
      <div>
        <img src={(props.profile.photos.large) ? props.profile.photos.large : userPhoto} width="200px" height="200px" alt='profile-avatar'></img>
      </div>
      <div>{props.profile.aboutMe}</div>
    </>
  )
}
export default PostInfo;