import {types} from "./Types";
import _ from "underscore";

const initialState = {
    transports: []
};

export default function transportsReducer(state=initialState, action) {
    switch (action.type) {
        case types.ADD_TRANSPORT_SUCCESS:
            let transports = [...state['transports']];
            transports.push(action.transport);
            return {
                ...state,
                transports: transports
            };
        case types.GET_TRANSPORTS_SUCCESS:
            return {
                ...state,
                transports: action.transports
            };
        case types.DELETE_TRANSPORT_SUCCESS:
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