import { SHOW_DRIVER_SETUP, REQUEST_DRIVER_SETUP, RECEIVE_DRIVER_SETUP } from '../../scenes/DriverSetup/actions';

const driverSetup = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DRIVER_SETUP:
      return [
        ...state,
        {
          userId: action.userId,
          pace: action.pace,
          agresivity: action.agresivity,
          consistency: action.consistency,
          startReaction: action.startReaction
        }
      ]

    case SHOW_DRIVER_SETUP:      
      return state
      
    default:
      return state
  }
}

export default driverSetup