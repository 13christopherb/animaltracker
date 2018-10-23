import * as transportService from '../services/TransportService';
import { transportConstants} from "../constants/transport.constants";

export const transportActions = {
    addTransport,
    getTransports
};

function addTransport(transport) {
    return dispatch => {
        dispatch(request(transport));
        return transportService.addTransport(transport)
            .then(res => {
                    dispatch(success(transport))
                },
                error=>{
                    dispatch(failure(error))
                });
    };
    function request(transport) {
        return {type: transportConstants.ADD_TRANSPORT_REQUEST, transport}
    }

    function success(transport) {
        return {type: transportConstants.ADD_TRANSPORT_SUCCESS, transport}
    }

    function failure(error) {
        return {type: transportConstants.ADD_TRANSPORT_FAILURE, error}
    }
}

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
        return {type: transportConstants.GET_TRANSPORTS_REQUEST}
    }

    function success(transports) {
        return {type: transportConstants.GET_TRANSPORTS_SUCCESS, transports}
    }

    function failure(error) {
        return {type: transportConstants.GET_TRANSPORTS_FAILURE, error}
    }
}