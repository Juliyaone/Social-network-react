import React from 'react';
import Users from './Users';
import PreLoader from '../common/preloader/PreLoader';
import {connect} from 'react-redux';
import {follow, unFollow, setCurrentPage, requestUsers} from '../../redux/users-reducer';
import {compose} from 'redux';

import {getUsers} from '../../redux/users-selectors';

import {getPageSize} from '../../redux/users-selectors';

import {getTotalCount} from '../../redux/users-selectors';

import {getCurrentPage} from '../../redux/users-selectors';

import {getIsFetching} from '../../redux/users-selectors';

import {getFolowingProgress} from '../../redux/users-selectors';


class UsersContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
    // users: getUsers(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    folowingProgress: getFolowingProgress(state)
  }
}

export default compose (
  connect(mapStateToProps, {follow, unFollow, setCurrentPage, requestUsers})
)(UsersContainer)