import { types } from './Types';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user} : {};

export default function authenticationReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                loggingIn: true,
            };
        case types.LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.user.accessToken)
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