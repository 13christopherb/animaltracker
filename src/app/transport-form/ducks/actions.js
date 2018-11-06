import * as api from "./operations";
import {types} from "./types";

export const actions = {
    addTransport,
};

function addTransport(transport) {
    return dispatch => {
        dispatch(request(transport));
        return api.addTransport(transport)
            .then(res => {
                    dispatch(success(res))
                },
                error=>{
                    dispatch(failure(error))
                });
    };
    function request(transport) {
        return {type: types.ADD_TRANSPORT_REQUEST, transport}
    }

    function success(transport) {
        return {type: types.ADD_TRANSPORT_SUCCESS, transport}
    }

    function failure(error) {
        return {type: types.ADD_TRANSPORT_FAILURE, error}
    }
}