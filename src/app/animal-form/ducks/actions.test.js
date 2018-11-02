import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {apiInstance} from "../../../utils/api";
import { actions } from './actions';
import { actionTypes} from "./action-types";

import * as testValues from '../../../services/TestValues'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(apiInstance);

describe('async actions', () => {

    it('should POST an animal to API', () => {
        mockAdapter.onPost('/animals').reply(200, {animal: testValues.animal1});

        const expectedActions = [
            {type: actionTypes.ADD_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: actionTypes.ADD_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.addAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        mockAdapter.onPost('/animals').reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: actionTypes.ADD_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: actionTypes.ADD_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.addAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});