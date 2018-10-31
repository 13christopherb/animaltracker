import * as locationService from "./Operations";
import {types} from "./Types";

export const actions = {
    getLocations
};

function getLocations() {
    return dispatch => {
        dispatch(request());
        return locationService.getAllLocations()
            .then(
                res => {
                    console.log(res);
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