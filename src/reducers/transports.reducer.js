import {transportConstants} from "../constants/transport.constants";

const initialState = {
    transports: []
};

export function transports(state=initialState, action) {
    switch (action.type) {
        case transportConstants.ADD_TRANSPORT_SUCCESS:
            var transports = [...state['transports']];
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
        default:
            return state
    }
}