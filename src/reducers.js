import { combineReducers } from 'redux';
import animalsReducer from './app/animals/ducks/index';
import authenticationReducer from './app/authentication/ducks/index';
import transportsReducer from './app/transports/ducks/index';

export default combineReducers({
    animals: animalsReducer,
    authentication: authenticationReducer,
    transports: transportsReducer
});