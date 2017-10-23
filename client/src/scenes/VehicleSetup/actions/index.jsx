import fetch from 'isomorphic-fetch'
import request from 'superagent';

export const SHOW_VEHICLE_SETUP = 'SHOW_VEHICLE_SETUP';
function showDiverSetup() {
    return {
        type: SHOW_VEHICLE_SETUP
    }
}

export const REQUEST_VEHICLE_SETUP = 'REQUEST_VEHICLE_SETUP';
function requestVehicleSetup() {
    return {
        type: REQUEST_VEHICLE_SETUP
    }
}

export const RECEIVE_VEHICLE_SETUP = 'RECEIVE_VEHICLE_SETUP';
function receiveVehicleSetup(json) {
    return {
        type: RECEIVE_VEHICLE_SETUP,
        id: json.id,
        assignedUserId: json.assignedUserId,
        teamId: json.teamId,
        frontWing: json.frontWing,
        rearWing: json.rearWing,
        gearbox: json.gearbox,
        suspension: json.suspension,
        turbo: json.turbo,
        receivedAt: Date.now()
    }
}

export function fetchVehicleSetup(userId, teamId) {
  return (dispatch) => {
    dispatch(requestVehicleSetup())
    return fetch('http://localhost:3001/api/VehicleSetups/findOne?filter=' + encodeURI(JSON.stringify({"assignedUserId": userId, "teamId": teamId}))).then(
      response => response.json(),
      error => console.error('Error', error)
    ).then(
      json => dispatch(receiveVehicleSetup(json))
    );
  }
}

export function shouldFetchVehicleSetup(state) {
  const data = state.vehicleSetup;
  if(data.length > 0) {
    return false;
  } else {
    return true;
  }
}

export function fetchVehicleSetupIfNeeded(userId, teamId) {
  return (dispatch, getState) => {
    if(shouldFetchVehicleSetup(getState())) {
      return dispatch(fetchVehicleSetup(userId, teamId));
    } else {
      return Promise.resolve();
    }
  }
}

export const UPDATE_VEHICLE_SETUP = 'UPDATE_VEHICLE_SETUP';
export function updateVehicleSetup(setupId, json) {
  return {
    type: UPDATE_VEHICLE_SETUP,
    assignedUserId: json.assignedUserId,
    teamId: json.teamId,
    id: json.id,
    frontWing: json.frontWing,
    rearWing: json.rearWing,
    gearbox: json.gearbox,
    suspension: json.suspension,
    turbo: json.turbo,
    receivedAt: Date.now()
  }  
}

export const REQUEST_UPDATE_VEHICLE_SETUP = 'REQUEST_UPDATE_VEHICLE_SETUP';
function requestUpdateVehicleSetup() {
    return {
        type: REQUEST_UPDATE_VEHICLE_SETUP
    }
}

export const PUT_UPDATE_VEHICLE_SETUP = 'PUT_UPDATE_VEHICLE_SETUP';
export function putUpdateVehicleSetup(setupId, json) {
  return (dispatch, getState) => {
    dispatch(updateVehicleSetup(setupId, json))
    return request
      .put('http://localhost:3001/api/VehicleSetups/' + setupId)
      .send(json).end((err, res) => {
      if(err) console.error('Error', error);
      dispatch(receiveVehicleSetup(res.body))
    })
  }
}