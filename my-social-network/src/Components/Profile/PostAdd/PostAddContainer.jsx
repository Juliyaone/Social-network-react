import {addPostActionCreater} from '../../../redux/profile-reducer';
import PostAdd from './PostAdd';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreater(post));
    }
  }
}


const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd);

export default PostAddContainer;