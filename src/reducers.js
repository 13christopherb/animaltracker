import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import animalsReducer from './app/animals/ducks';
import animalFormReducer from './app/animal-form/ducks'
import authenticationReducer from './app/authentication/ducks';
import locationReducer from './app/locations/ducks';
import transportsReducer from './app/transports/ducks';

export default combineReducers({
    animals: animalsReducer,
    animalForm : animalFormReducer,
    authentication: authenticationReducer,
    locations: locationReducer,
    transports: transportsReducer,
    form: formReducer
});