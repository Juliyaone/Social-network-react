import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const getAuthUserData = () => async (dispath) => {
  let response = await authAPI.me();
    if(response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispath(setAuthUserData(id, email, login, true));
    }
}


export const login = (email, password, rememberMe, isAuth) => async (dispath) => {
  let response = await authAPI.login(email, password, rememberMe, isAuth)
    if(response.resultCode === 0) {
      dispath(getAuthUserData());
    } else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some error";
      dispath(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispath) => {
  let response = await authAPI.logout()
    if(response.resultCode === 0) {
      dispath(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;