import Mypost from './Mypost';
import './Mypost.css';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = () => {
  return {
    
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost);

export default MypostsContainer;