import React from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}


function withAuthRedirect(Component) {
  let RedirectComponent = (props) => {
    if(!props.isAuth) { return <Navigate to='/login' /> }
    return <Component { ...props }/>
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;