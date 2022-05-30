import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import sidebarReducer from '../redux/sidebar-reducer';
import usersReduser from '../redux/users-reducer';



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser
});

let store = createStore(reducers);

window.store = store;

export default store;