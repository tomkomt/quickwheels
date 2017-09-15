import React from 'react';
import { connect } from 'react-redux'
import { fetchLoginUserIfNeeded } from './actions';
import LoginComponent from './components/LoginComponent';

const getCurrentUser = (currentUser) => {
  return currentUser;
}

const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state.currentUser)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(fetchLoginUserIfNeeded())
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login;
