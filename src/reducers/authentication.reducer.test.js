import {authentication} from './authentication.reducer';
import {userConstants} from "../constants/user.constants";

describe('authentication reducer', () => {
    it('should return the initial state', () => {
        expect(authentication(undefined, {})).toEqual(
            {}
        )
    });

    it('should handle LOGIN_REQUEST', () => {
        expect(
            authentication(undefined, {
                type: userConstants.LOGIN_REQUEST,
                user: 'user'
            })
        ).toEqual({
            loggingIn: true
        })
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            authentication(undefined, {
                type: userConstants.LOGIN_SUCCESS,
                user: 'user'
            })
        ).toEqual({
            loggedIn: true,
            user: 'user'
        })
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            authentication(undefined, {
                type: userConstants.LOGIN_FAILURE,
                user: 'user'
            })
        ).toEqual({})
    });

    it('should handle LOGOUT', () => {
        expect(
            authentication({user: 'name'}, {
                type: userConstants.LOGOUT,
                user: 'user'
            })
        ).toEqual({})
    });
});