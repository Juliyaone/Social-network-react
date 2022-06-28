import './Profile.css';
import PostInfo from './PostInfo/PostInfo';
import MypostsContainer from './MyPosts/MypostContainer';
import PostAddContainer from './PostAdd/PostAddContainer';

const Profile = ({profile, status, updateUserStatus}) => {
  return (
    <>
    <PostInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
    <PostAddContainer/>
  
    <div className='content-box'>
      <MypostsContainer/>
    </div>
    </>
)}
export default Profile;