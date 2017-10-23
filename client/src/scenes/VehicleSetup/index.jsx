import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux'
import { fetchVehicleSetupIfNeeded, updateVehicleSetup, putUpdateVehicleSetup } from './actions';
import VehicleSetupComponent from './components/VehicleSetupComponent';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.length > 0 ? Immutable.Map(state.currentUser[0]) : Immutable.Map({}),
    vehicleSetup: state.vehicleSetup.length > 0 ? Immutable.Map(state.vehicleSetup[0]) : Immutable.Map({}),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (userId, teamId) => {
      dispatch(fetchVehicleSetupIfNeeded(userId, teamId))
    },
    onSaveChanges: (setupId, json) => {
      dispatch(putUpdateVehicleSetup(setupId, json))
    }
  }
}

const VehicleSetup = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleSetupComponent)

export default VehicleSetup;
