import {types} from "./types";
import _ from "underscore";

const initialState = {
    transports: []
};

export default function transportsReducer(state=initialState, action) {
    switch (action.type) {
        case types.ADD_TRANSPORT_SUCCESS:
            return {
                ...state,
                transports: [
                    ...state['transports'],
                    action.transport
                ]
            };
        case types.GET_TRANSPORTS_SUCCESS:
            return {
                ...state,
                transports: action.transports
            };
        case types.DELETE_TRANSPORT_SUCCESS:
            return {
                ...state,
                transports: state.transports.filter((transport) => transport.id !== action.transport.id)
            };
        default:
            return state
    }
}