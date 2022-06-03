import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';
import './Header.css';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then(data => {
      if(data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    })
  }

  render() {
    return <Header { ...this.props } />
  }
}

const mapStateToProps = (state) => {
 return {
  login: state.auth.login,
  isAuth: state.auth.isAuth
 }
}
  

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);