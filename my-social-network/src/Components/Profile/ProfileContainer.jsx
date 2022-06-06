import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { getProfile } from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

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

let AuthRedirectComponent = (props) => {
  if( !this.props.isAuth) { return <Navigate to='/login' /> }
  return <ProfileContainer { ...props } />
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}


export default connect(mapStateToProps, { getProfile })(withRouter(AuthRedirectComponent));