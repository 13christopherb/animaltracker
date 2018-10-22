import * as userService from '../services/UserService';
import { userConstants } from '../constants/user.constants.js';


export const userActions = {
    login,
    logout,
    register
};

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
        dispatch(request({username: login.username}));
        userService.register(login)
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

