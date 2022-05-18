const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS = 'SET_USERS';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  users: [
    {id: 5, fullname: 'Sveta Svetova', followed: true, status: 'I love Tbilisi', location: { cantry: 'Turky', citi: 'Stambul'}},
    {id: 6, fullname: 'Anjelika Anjelikova', followed: false, status: 'I love JS', location: { cantry: 'Russia', citi: 'Saint-Petersburg'}},
    {id: 7, fullname: 'Artem Artemov', followed: true, status: 'I love fullstack', location: { cantry: 'Russia', citi: 'Saint-Petersburg'}},
    {id: 8, fullname: 'Darina Darinova', followed: false, status: 'I love frends', location: { cantry: 'Russia', citi: 'Saint-Petersburg'}},
  ]
}

const usersReducer = (state=initialState, action) => {
  switch(action.type) {
    case FOLOW:
      return { 
        ...state,

        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return  user;
        })
      };

    case UNFOLOW: 
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return  user;
        })
      };

      default:
        return { ...state }
  }
}

export const folowAC = (userId) => ({type: FOLOW, userId});
export const unFolowAC = (userId) => ({type: UNFOLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;