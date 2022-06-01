import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component {
  
  componentDidMount () {


    let userId = this.props.router.params.id;
    if(userId = null) {
      userId = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    })
  }

  render () {
    return <Profile {...this.props}  />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

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

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);