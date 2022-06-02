const FOLOW = 'FOLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_PAGE = 'SET_TOTAL_COUNT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  folowingProgress: []
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

      case SET_USERS: 
        return { ...state, users: action.users };

      case SET_CURRENT_PAGE:
        return { ...state, currentPage: action.currentPage }

      case SET_TOTAL_COUNT_PAGE:
        return { ...state, totalCount: action.totalCount }

      case TOGGLE_IS_FETCHING: 
        return { ...state, isFetching: action.isFetching }


      case TOGGLE_IS_FOLLOWING_PROGRESS: 
        return { ...state,
          folowingProgress: action.isFetching
          ? [...state.folowingProgress, action.userId]
          : state.folowingProgress.filter(id => id != action.userId)
        }


      default:
        return { ...state }
  }
}

export const follow = (userId) => ({type: FOLOW, userId});
export const unFollow = (userId) => ({type: UNFOLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountUsers = (totalCount) => ({type: SET_TOTAL_COUNT_PAGE, totalCount});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});





export default usersReducer;