import * as transportService from './operations';
import { types} from "./types";

export const actions = {
    getTransports,
    deleteTransport
};



function getTransports() {
    return dispatch => {
        dispatch(request());
        return transportService.getAllTransports()
            .then(
                res => {
                    dispatch(success(res['transports']))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() {
        return {type: types.GET_TRANSPORTS_REQUEST}
    }

    function success(transports) {
        return {type: types.GET_TRANSPORTS_SUCCESS, transports}
    }

    function failure(error) {
        return {type: types.GET_TRANSPORTS_FAILURE, error}
    }
}

function deleteTransport(transport) {
    return dispatch => {
        dispatch(request(transport));
        return transportService.deleteTransport(transport.id)
            .then(
                res => {
                    dispatch(success(transport))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request(transport) {
        return {type: types.DELETE_TRANSPORT_REQUEST, transport}
    }

    function success(transport) {
        return {type: types.DELETE_TRANSPORT_SUCCESS, transport}
    }

    function failure(error) {
        return {type: types.DELETE_TRANSPORT_FAILURE, error}
    }
}