import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
  _state: {
    profilePage: {
      postsData: {
        posts: [
          {id: 5, post: 'LALALA', likescount: 0},
          {id: 6, post: 'PUPUPU', likescount: 30},
        ],
        newPostText: 'Дефолтное значение'
      }
    },
    dialogPage: {
      messageData: {
        messages: [
          {id: 5, message: 'LALALA', likescount: 0},
          {id: 6, message: 'PUPUPU', likescount: 30},
        ],
        newMessageBody: ''
      },
      dialogData: {
        dialogs: [
          {id: 1, name: 'Juliya'},
          {id: 2, name: 'Anjelika'},
          {id: 3, name: 'Darina'},
          {id: 4, name: 'Artem'},
        ]
      }
    },
    sidebar: {
      frendsData: {
        frends: [
          {id: 1, name: 'Juliya'},
          {id: 2, name: 'Anjelika'},
          {id: 3, name: 'Darina'},
          {id: 4, name: 'Artem'},
        ]
      }
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log('State changed');
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}
  
export default store;
window.store = store;
