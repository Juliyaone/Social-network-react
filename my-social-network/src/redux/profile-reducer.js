import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  posts: [
    {id: 5, post: 'LALALA', likescount: 0},
    {id: 6, post: 'PUPUPU', likescount: 30},
  ],
  newPostText: 'Дефолтное значение',
  profile: null
}

const profileReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return { 
        ...state,
        posts: [ ...state.posts, { id: 5, post: state.newPostText, likescount: 0 }],
        newPostText: '',
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };

    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
      default:
        return { ...state }
  }
}

export const addPostActionCreater = () => ({type: ADD_POST});

export const updateNewPostTextActionCreater = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};

export const getProfile = (userId) => (dispath) => {
  usersAPI.getUserProfile(userId).then(data => {
    dispath(setUserProfile(data));
  })
}


export default profileReducer;