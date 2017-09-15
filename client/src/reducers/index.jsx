import { combineReducers } from 'redux';
import currentUser from './currentUser';
import driverSetup from './driverSetup';

const appReducers = combineReducers({
    currentUser,
    driverSetup
})

export default appReducers