import authenticationReducer from './index';
import {types} from "./types";

describe('authentication reducer', () => {
    it('should return the initial state', () => {
        expect(authenticationReducer(undefined, {})).toEqual(
            {}
        )
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            authenticationReducer(undefined, {
                type: types.LOGIN_REQUEST,
                user: 'user'
            })
        ).toEqual({
            loggingIn: true
        })
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            authenticationReducer(undefined, {
                type: types.LOGIN_SUCCESS,
                user: 'user'
            })
        ).toEqual({
            loggedIn: true,
            user: 'user',
            userLocation: 'MBO'
        })
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            authenticationReducer(undefined, {
                type: types.LOGIN_FAILURE,
                user: 'user'
            })
        ).toEqual({
            loggedIn: false,
            loginError: true,
        })
    });

    it('should handle LOGOUT', () => {
        expect(
            authenticationReducer({user: 'name'}, {
                type: types.LOGOUT,
                user: 'user'
            })
        ).toEqual({})
    });
});