import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import sidebarReducer from '../redux/sidebar-reducer';



let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;