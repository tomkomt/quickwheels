import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux'
import { fetchLoginUserIfNeeded } from './actions';
import LoginComponent from './components/LoginComponent';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.length > 0 ? Immutable.Map(state.currentUser[0]) : null
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
