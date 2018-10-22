import {userActions} from './UserActions';
import * as userConstants from '../constants/user.constants'
import configureMockStore from 'redux-mock-store'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as testValues from '../services/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });


    it('should send login request to API', () => {
        fetchMock.postOnce('http://localhost:5000/login', {
            body: {username: 'user', password: 'password'},
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: userConstants.LOGIN_REQUEST, user:{username: 'user'}},
            {type: userConstants.LOGIN_SUCCESS, user:{username: 'user'}}
        ];

        const store = mockStore({animals: []})
        return store.dispatch(userActions.login({username: 'user', password: 'password'})).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});