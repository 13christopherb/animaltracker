import * as userService from '../services/UserService';
import {userConstants} from '../constants/user.constants.js';
import jwt from "jsonwebtoken";


export const userActions = {
    login,
    logout,
    register
};

const isExpired = (token) => {
    if (token && jwt.decode(token)) {
        const expiry = jwt.decode(token).exp;
        const now = new Date();
        return now.getTime() > expiry * 1000;
    }
    return false;
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function login(login) {
    return dispatch => {
        dispatch(request({username: login.username}));

        return userService.login(login)
            .then(
                login => {
                    dispatch(success({username: login.username}));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}


function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
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
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

