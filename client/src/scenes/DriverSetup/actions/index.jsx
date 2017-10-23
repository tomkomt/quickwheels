import fetch from 'isomorphic-fetch'
import request from 'superagent';

export const SHOW_DRIVER_SETUP = 'SHOW_DRIVER_SETUP';
function showDiverSetup() {
    return {
        type: SHOW_DRIVER_SETUP
    }
}

export const REQUEST_DRIVER_SETUP = 'REQUEST_DRIVER_SETUP';
function requestDriverSetup() {
    return {
        type: REQUEST_DRIVER_SETUP
    }
}

export const RECEIVE_DRIVER_SETUP = 'RECEIVE_DRIVER_SETUP';
function receiveDriverSetup(json) {
    return {
        type: RECEIVE_DRIVER_SETUP,
        userId: json.userId,
        id: json.id,
        pace: json.pace,
        agresivity: json.agresivity,
        consistency: json.consistency,
        startReaction: json.startReaction,
        receivedAt: Date.now()
    }
}

export function fetchDriverSetup(userId) {
  return (dispatch) => {
    dispatch(requestDriverSetup())
    return fetch('http://localhost:3001/api/UserSetups/findOne?filter=' + encodeURI(JSON.stringify({"userId": userId}))).then(
      response => response.json(),
      error => console.error('Error', error)
    ).then(
      json => dispatch(receiveDriverSetup(json))
    );
  }
}

export function shouldFetchDriverSetup(state) {
  const data = state.driverSetup;
  if(data.length > 0) {
    return false;
  } else {
    return true;
  }
}

export function fetchDriverSetupIfNeeded(userId) {
  return (dispatch, getState) => {
    if(shouldFetchDriverSetup(getState())) {
      return dispatch(fetchDriverSetup(userId));
    } else {
      return Promise.resolve();
    }
  }
}

export const UPDATE_DRIVER_SETUP = 'UPDATE_DRIVER_SETUP';
export function updateDriverSetup(setupId, json) {
  return {
    type: UPDATE_DRIVER_SETUP,
    id: json.id,
    pace: json.pace,
    agresivity: json.agresivity,
    consistency: json.consistency,
    startReaction: json.startReaction,
    receivedAt: Date.now()
  }  
}

export const REQUEST_UPDATE_DRIVER_SETUP = 'REQUEST_UPDATE_DRIVER_SETUP';
function requestUpdateDriverSetup() {
    return {
        type: REQUEST_UPDATE_DRIVER_SETUP
    }
}

export const PUT_UPDATE_DRIVER_SETUP = 'PUT_UPDATE_DRIVER_SETUP';
export function putUpdateDriverSetup(setupId, json) {
  return (dispatch, getState) => {
    dispatch(updateDriverSetup(setupId, json))
    return request
      .put('http://localhost:3001/api/UserSetups/' + setupId)
      .send(json).end((err, res) => {
      if(err) console.error('Error', error);
      dispatch(receiveDriverSetup(res.body))
    })
  }
}