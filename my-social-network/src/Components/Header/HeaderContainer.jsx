import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import './Header.css';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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
  

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);