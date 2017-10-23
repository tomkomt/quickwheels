import { combineReducers } from 'redux';
import currentUser from './currentUser';
import driverSetup from './driverSetup';
import vehicleSetup from './vehicleSetup';

const appReducers = combineReducers({
    currentUser,
    driverSetup,
    vehicleSetup
})

export default appReducers