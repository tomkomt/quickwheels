import { LOGIN_USER, SHOW_USER, RECEIVE_LOGIN_USER } from '../../scenes/Login/actions';

const currentUser = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
    case RECEIVE_LOGIN_USER:
      return [
        ...state,
        {
          userId: action.userId,
          fullName: action.fullName
        }
      ]

    case SHOW_USER:
      return state
      
    default:
      return state
  }
}

export default currentUser