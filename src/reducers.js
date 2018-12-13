import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import animalsReducer from './app/animals/ducks';
import {animalFormTypes} from './app/animal-forms/ducks'
import {transportFormTypes} from "./app/transport-form/ducks";
import authenticationReducer from './app/authentication/ducks';
import locationReducer from './app/locations/ducks';
import transportsReducer from './app/transports/ducks';

export default combineReducers({
    animals: animalsReducer,
    authentication: authenticationReducer,
    locations: locationReducer,
    transports: transportsReducer,
    form: formReducer.plugin({
        AnimalForm: (state, action) => {
            switch (action.type) {
                case animalFormTypes.ADD_ANIMAL_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        },
        TransportForm: (state, action) => {
            switch (action.type) {
                case transportFormTypes.ADD_TRANSPORT_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        }
    })
});