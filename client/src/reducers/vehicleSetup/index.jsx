import { SHOW_VEHICLE_SETUP, REQUEST_VEHICLE_SETUP, RECEIVE_VEHICLE_SETUP, UPDATE_VEHICLE_SETUP } from '../../scenes/VehicleSetup/actions';

const vehicleSetup = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_VEHICLE_SETUP:
			return [
				...state,
				{
					id: action.id,
                    assignedUserId: action.assignedUserId,
                    teamId: action.teamId,
					frontWing: action.frontWing,
					rearWing: action.rearWing,
					gearbox: action.gearbox,
                    suspension: action.suspension,
                    turbo: action.turbo,
					receivedAt: action.receivedAt
				}
			]

		case SHOW_VEHICLE_SETUP:
			return state

		case UPDATE_VEHICLE_SETUP:
			return Object.assign({}, state, {
				id: state[0].id,
                assignedUserId: state[0].assignedUserId,
                teamId: state[0].teamId,
				frontWing: action.frontWing,
				rearWing: action.rearWing,
				gearbox: action.gearbox,
                suspension: action.suspension,
                turbo: action.turbo,
				receivedAt: action.receivedAt
			});

		default:
			return state
	}
}

export default vehicleSetup