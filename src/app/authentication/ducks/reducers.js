import { types } from './types';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user} : {};

export default function authenticationReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                loggingIn: true,
            };
        case types.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case types.LOGIN_FAILURE:
            return {};
        case types.LOGOUT:
            return {};
        default:
            return state;
    }
}