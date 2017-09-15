import { combineReducers } from 'redux';
import currentUser from './currentUser';

const appReducers = combineReducers({
    currentUser
})

export default appReducers