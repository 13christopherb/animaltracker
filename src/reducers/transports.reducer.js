import {transportConstants} from "../constants/transport.constants";
import _ from "underscore";

const initialState = {
    transports: []
};

export function transports(state=initialState, action) {
    switch (action.type) {
        case transportConstants.ADD_TRANSPORT_SUCCESS:
            let transports = [...state['transports']];
            transports.push(action.transport);
            return {
                ...state,
                transports: transports
            };
        case transportConstants.GET_TRANSPORTS_SUCCESS:
            return {
                ...state,
                transports: action.transports
            };
        case transportConstants.DELETE_TRANSPORT_SUCCESS:
            return {
                ...state,
                transports: _.reject(state['transports'], (t) => {
                    return action.transport.id === t.id;
                })
            };
        default:
            return state
    }
}