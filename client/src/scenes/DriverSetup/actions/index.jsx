import fetch from 'isomorphic-fetch'

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