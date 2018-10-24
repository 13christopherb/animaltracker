import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { userActions } from './UserActions';
import { userConstants } from '../constants/user.constants';
import {authInstance} from "../helpers/authentication.api";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(authInstance);

describe('async userActions', () => {
    it('should send login request to API and handle successful response', () => {
        mockAdapter.onPost('/login').reply(200, {
            username: 'user'
        });
        const login = {username: 'user', password: 'password'};
        const expectedActions = [
            {type: userConstants.LOGIN_REQUEST, user: {username: 'user'}},
            {type: userConstants.LOGIN_SUCCESS, user: {username: 'user'}}
        ];

        const store = mockStore({});
        return store.dispatch(userActions.login(login)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should send login request to API and handle error response', () => {
        mockAdapter.onPost('/login').reply(422);
        const error = new Error('Request failed with status code 422');
        const login = {username: 'user', password: 'password'};
        const expectedActions = [
            {type: userConstants.LOGIN_REQUEST, user: {username: 'user'}},
            {type: userConstants.LOGIN_FAILURE, error: error}
        ];

        const store = mockStore({});
        return store.dispatch(userActions.login(login)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should send registration request to API and handle response', () => {
        mockAdapter.onPost('/registration').reply(200, {
                username: 'user'
            });

        const expectedActions = [
            {type: userConstants.REGISTER_REQUEST, user:'user'},
            {type: userConstants.REGISTER_SUCCESS, user:'user'}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(userActions.register({username: 'user', password: 'password'})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});