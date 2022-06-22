import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload}

      default:
        return { ...state }
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth} });

export const getAuthUserData = () => (dispath) => {
  return authAPI.me()
  .then(data => {
    if(data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispath(setAuthUserData(id, email, login, true));
    }
  })
}


export const login = (email, password, rememberMe, isAuth) => (dispath) => {
  authAPI.login(email, password, rememberMe, isAuth).then(data => {
    if(data.resultCode === 0) {
      dispath(getAuthUserData());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispath(stopSubmit("login", {_error: message}));
    }
  })
}

export const logout = () => (dispath) => {
  authAPI.logout().then(data => {
    if(data.resultCode === 0) {
      dispath(setAuthUserData(null, null, null, false));
    }
  })

}


export default authReducer;