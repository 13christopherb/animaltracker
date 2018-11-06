import {transportTypes} from './';
import {transportFormTypes} from "../../transport-form/ducks";

const initialState = {
    transports: []
};

export default function transportsReducer(state=initialState, action) {
    switch (action.type) {
        case transportFormTypes.ADD_TRANSPORT_SUCCESS:
            return {
                ...state,
                transports: [
                    ...state['transports'],
                    action.transport
                ]
            };
        case transportTypes.GET_TRANSPORTS_SUCCESS:
            return {
                ...state,
                transports: action.transports
            };
        case transportTypes.DELETE_TRANSPORT_SUCCESS:
            return {
                ...state,
                transports: state.transports.filter((transport) => transport.id !== action.transport.id)
            };
        default:
            return state
    }
}