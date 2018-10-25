import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import jwt from 'jsonwebtoken'
import {actions} from './actions';
import {types} from './types';
import {authInstance} from "../../../utils/authentication.api";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(authInstance);

describe('async actions', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('should send login request to API and handle successful response', () => {
        mockAdapter.onPost('/login').reply(200, {
            username: 'user'
        });
        const login = {username: 'user', password: 'password'};
        const expectedActions = [
            {type: types.LOGIN_REQUEST, user: {username: 'user'}},
            {type: types.LOGIN_SUCCESS, user: {username: 'user'}}
        ];

        const store = mockStore({});
        return store.dispatch(actions.login(login)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should send login request to API and handle error response', () => {
        mockAdapter.onPost('/login').reply(422);
        const error = new Error('Request failed with status code 422');
        const login = {username: 'user', password: 'password'};
        const expectedActions = [
            {type: types.LOGIN_REQUEST, user: {username: 'user'}},
            {type: types.LOGIN_FAILURE, error: error}
        ];

        const store = mockStore({});
        return store.dispatch(actions.login(login)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should send registration request to API and handle response', () => {
        mockAdapter.onPost('/registration').reply(200, {
            username: 'user'
        });

        const expectedActions = [
            {type: types.REGISTER_REQUEST, user: 'user'},
            {type: types.REGISTER_SUCCESS, user: 'user'}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.register({username: 'user', password: 'password'})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});