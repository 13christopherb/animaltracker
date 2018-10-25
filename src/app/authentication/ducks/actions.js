import * as userService from './operations';
import {types} from './types.js';
import jwt from "jsonwebtoken";


export const actions = {
    login,
    logout,
    register
};

function login(login) {
    return dispatch => {
        dispatch(request({username: login.username}));
        return userService.login(login)
            .then(
                res => {
                    dispatch(success(res['data']));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: types.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: types.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: types.LOGIN_FAILURE, error}
    }
}


function logout() {
    userService.logout();
    return {type: types.LOGOUT};
}

function register(login) {
    return dispatch => {
        dispatch(request(login.username));
        return userService.register(login)
            .then(res => {
                    dispatch(success(login.username));
                }, error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: types.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: types.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: types.REGISTER_FAILURE, error}
    }
}

