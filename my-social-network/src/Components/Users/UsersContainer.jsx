import React from 'react';
import Users from './Users';
import PreLoader from '../common/preloader/PreLoader';
import {connect} from 'react-redux';
import {follow, unFollow, setCurrentPage, toggleIsFolowingProgress, getUsers} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export default connect(
  mapStateToProps,
  {follow, unFollow, setCurrentPage, toggleIsFolowingProgress, getUsers})(UsersContainer);