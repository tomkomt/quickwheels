import { 
	SHOW_DRIVER_SETUP, 
	REQUEST_DRIVER_SETUP, 
	RECEIVE_DRIVER_SETUP, 
	UPDATE_DRIVER_SETUP 
} from '../../scenes/DriverSetup/actions';

const driverSetup = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_DRIVER_SETUP:
			return [
				...state,
				{
					id: action.id,
					userId: action.userId,
					pace: action.pace,
					agresivity: action.agresivity,
					consistency: action.consistency,
					startReaction: action.startReaction,
					receivedAt: action.receivedAt
				}
			]

		case SHOW_DRIVER_SETUP:
			return state

		case UPDATE_DRIVER_SETUP:
			return Object.assign({}, state, {
				id: state[0].id,
				userId: state[0].userId,
				pace: action.pace,
				agresivity: action.agresivity,
				consistency: action.consistency,
				startReaction: action.startReaction,
				receivedAt: action.receivedAt
			});

		default:
			return state
	}
}

export default driverSetup