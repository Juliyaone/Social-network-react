import './Profile.css';
import PostInfo from './PostInfo/PostInfo';
import MypostsContainer from './MyPosts/MypostContainer';
import PostAddContainer from './PostAdd/PostAddContainer';


const Profile = (props) => {

  return (
    <>
    <PostInfo profile={props.profile} />
    <PostAddContainer/>
  
    <div className='content-box'>
      <img width='100%' height='auto' src="https://mmc.tirto.id/image/otf/1024x535/2020/01/06/header-nikola-tesla--mozaik--nauval.jpg" alt='Tesla'/>
      <MypostsContainer/>
    </div>
    </>
)}
export default Profile;