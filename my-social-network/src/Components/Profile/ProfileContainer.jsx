import React from 'react';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import {compose} from 'redux';
import withRouter from '../hoc/withRouter';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    let userId = this.props.router.params.id;

    if(userId == null) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render () {
    return <Profile profile = { this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose (
  connect(mapStateToProps, { getProfile }),
  withRouter
)(ProfileContainer)