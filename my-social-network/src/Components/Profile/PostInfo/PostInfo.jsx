import PreLoader from '../../common/preloader/PreLoader';
import userPhoto from '../../../assecs/img/user_icon.svg';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

import './PostInfo.css'

const PostInfo = ({profile, status, updateUserStatus}) => {

  if(profile == null) {
    return <PreLoader />
  }

  return (
    <>
      <div>
        <img src={(profile.photos.large) ? profile.photos.large : userPhoto} width="200px" height="200px" alt='profile-avatar'></img>
      </div>
      <div>{profile.aboutMe}</div>
      <ProfileStatus profile={profile} status={status} updateUserStatus={updateUserStatus}/>
    </>
  )
}
export default PostInfo;