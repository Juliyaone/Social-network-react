import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { reducer as formReducer } from 'redux-form'

import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import sidebarReducer from '../redux/sidebar-reducer';
import usersReduser from '../redux/users-reducer';
import authReducer from '../redux/auth-reducer';
import appReducer from '../redux/app-reducer';
import thunkMiddleWare from 'redux-thunk';



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth: authReducer,
  form: formReducer,
  app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;