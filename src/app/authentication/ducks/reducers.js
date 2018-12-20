import { types } from './types';

let user = localStorage.getItem('username');
let userLocation = localStorage.getItem('userLocation');
const initialState = user ? { loggedIn: true, user, userLocation} : {};

export default function authenticationReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                loggingIn: true,
            };
        case types.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
                userLocation: 'MBO'
            };
        case types.LOGIN_FAILURE:
            return {
                loggedIn: false,
                loginError: true
            };
        case types.LOGOUT:
            return {};
        default:
            return state;
    }
}