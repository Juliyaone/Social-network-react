import { profileAPI } from '../api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'


let initialState = {
  posts: [
    {id: 5, post: 'LALALA', likescount: 0},
    {id: 6, post: 'PUPUPU', likescount: 30},
  ],
  profile: null,
  status: ""
}

const profileReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return { 
        ...state,
        posts: [ ...state.posts, { id: 5, post: action.post, likescount: 0 }],
      };
    }

    case DELETE_POST: {
      return { 
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case SET_STATUS: {
      return { ...state, status: action.status }
    }

      default:
        return { ...state }
  }
}

export const addPostActionCreater = (post) => ({type: ADD_POST, post});

export const deletePost = (postId) => ({type: DELETE_POST, postId});


export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};

export const setUserStatus = (status) => {
  return {type: SET_STATUS, status}
};

export const getUserProfile = (userId) => async (dispath) => {
  let response = await profileAPI.getProfile(userId)
    dispath(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispath) => {
  let response = await profileAPI.getStatus(userId)
    dispath(setUserStatus(response));
}

export const updateUserStatus = (status) => async (dispath) => {
  let response = await profileAPI.updateStatus(status)
    if(response.resultCode === 0) {
      dispath(setUserStatus(status));
    }
}


export default profileReducer;