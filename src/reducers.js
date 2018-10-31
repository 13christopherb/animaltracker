import { combineReducers } from 'redux';
import animalsReducer from './app/animals/ducks';
import authenticationReducer from './app/authentication/ducks';
import locationReducer from './app/locations/ducks';
import transportsReducer from './app/transports/ducks';

export default combineReducers({
    animals: animalsReducer,
    authentication: authenticationReducer,
    locations: locationReducer,
    transports: transportsReducer
});