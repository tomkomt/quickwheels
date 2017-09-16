import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux'
import { fetchDriverSetupIfNeeded, updateDriverSetup, putUpdateDriverSetup } from './actions';
import DriverSetupComponent from './components/DriverSetupComponent';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.length > 0 ? Immutable.Map(state.currentUser[0]) : Immutable.Map({}),
    driverSetup: state.driverSetup.length > 0 ? Immutable.Map(state.driverSetup[0]) : Immutable.Map({}),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (userId) => {
      dispatch(fetchDriverSetupIfNeeded(userId))
    },
    onSaveChanges: (setupId, json) => {
      dispatch(putUpdateDriverSetup(setupId, json))
    }
  }
}

const DriverSetup = connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverSetupComponent)

export default DriverSetup;
