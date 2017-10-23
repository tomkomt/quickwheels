import fetch from 'isomorphic-fetch'

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = (userId, fullName) => {
  return {
    type: LOGIN_USER,
    userId,
    fullName,
    assignerTeamId
  }
}

export const SHOW_USER = 'SHOW_USER';
export const showUser = () => {
  return {
    type:  SHOW_USER
  }
}

export const REQUEST_LOGIN_USER = 'REQUEST_LOGIN_USER';
function requestLoginUser() {
  return {
    type: REQUEST_LOGIN_USER
  }
}

export const RECEIVE_LOGIN_USER = 'RECEIVE_LOGIN_USER';
function receiveLoginUser(json) {
  return {
    type: RECEIVE_LOGIN_USER,
    userId: json[0].userId,
    fullName: json[0].firstName + ' ' + json[0].lastName,
    assignerTeamId: json[0].assignerTeamId,
    receivedAt: Date.now()
  }
}

export function fetchLoginUser() {
  return (dispatch) => {
    dispatch(requestLoginUser())
    return fetch('http://localhost:3001/api/UserProfiles').then(
      response => response.json(),
      error => console.error('Error', error)
    ).then(
      json => dispatch(receiveLoginUser(json))
    );
  }
}

export function shouldFetchLoginUser(state) {
  const user = state.currentUser;
  if(user.length > 0) {
    return false;
  } else {
    return true;
  }
}

export function fetchLoginUserIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchLoginUser(getState())) {
      return dispatch(fetchLoginUser());
    } else {
      return Promise.resolve();
    }
  }
}