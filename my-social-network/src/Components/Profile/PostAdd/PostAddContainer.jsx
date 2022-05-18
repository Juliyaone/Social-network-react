import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profile-reducer';
import PostAdd from './PostAdd';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    postChange: (text) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    }
  }
}


const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd);

export default PostAddContainer;