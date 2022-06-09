import React from 'react';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect'; // позднее подключим после авторизации
import {compose} from 'redux';
import withRouter from '../hoc/withRouter';


class ProfileContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount () {
    let userId = this.props.router.params.id;

    if(userId == null) {
      userId = 24280;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render () {
    return <Profile profile = {this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose (
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer)