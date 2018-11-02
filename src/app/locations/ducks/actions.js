import * as locationService from "./operations";
import {types} from "./types";

export const actions = {
    getLocations
};

function getLocations() {
    return dispatch => {
        dispatch(request());
        return locationService.getAllLocations()
            .then(
                res => {
                    dispatch(success(res['locations']))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request() {
        return {type: types.GET_LOCATIONS_REQUEST}
    }

    function success(locations) {
        return {type: types.GET_LOCATIONS_SUCCESS, locations}
    }

    function failure(error) {
        return {type: types.GET_LOCATIONS_FAILURE, error}
    }
}