import React from 'react';
import Users from './Users';
import { usersAPI } from '../../api/api';
import PreLoader from '../common/preloader/PreLoader';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, toggleIsFetching, toggleIsFolowingProgress} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCountUsers(data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {

    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    })
  }

  render () {
    return <>
    {this.props.isFetching ? <PreLoader  isFetching={this.props.isFetching}/> : null }
    <Users onPageChanged={this.onPageChanged}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      unFollow={this.props.unFollow}
      follow={this.props.follow}
      currentPage={this.props.currentPage}
      toggleIsFolowingProgress={this.props.toggleIsFolowingProgress}
      folowingProgress={this.props.folowingProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    folowingProgress: state.usersPage.folowingProgress
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollow(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setTotalCountUsers: (totalCount) => {
//       dispatch(setTotalCountUsers(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching));
//     }
//   }
// }

export default connect(
  mapStateToProps,
  {follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, toggleIsFetching, toggleIsFolowingProgress})(UsersContainer);