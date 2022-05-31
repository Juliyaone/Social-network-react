import React from 'react';
import * as axios from 'axios'
import Users from './Users';
import PreLoader from '../common/preloader/PreLoader';
import {connect} from 'react-redux';
import {follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, toggleIsFetching} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalCountUsers(response.data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {

    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
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
      currentPage={this.props.currentPage}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
  {follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, toggleIsFetching})(UsersContainer);