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
    it('should fetch array of animals from API', () => {
        mockAdapter.onGet('/animals').reply(200, {
            animals: testValues.animals
        });

        const expectedActions = [
            {type: actionTypes.GET_ANIMALS_REQUEST},
            {type: actionTypes.GET_ANIMALS_SUCCESS, animals: testValues.animals}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle fetch error', () => {
        mockAdapter.onGet('/animals').reply(422);
        const error = new Error('Request failed with status code 422');

        const expectedActions = [
            {type: actionTypes.GET_ANIMALS_REQUEST},
            {type: actionTypes.GET_ANIMALS_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should DELETE an animal to API', () => {
        mockAdapter.onDelete('/animal/'+testValues.animal1.id).reply(200);

        const expectedActions = [
            {type: actionTypes.DELETE_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: actionTypes.DELETE_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: [testValues.animal1]});
        return store.dispatch(actions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle delete error', () => {
        mockAdapter.onDelete('/animal/'+testValues.animal1.id).reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: actionTypes.DELETE_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: actionTypes.DELETE_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: [testValues.animal1]});
        return store.dispatch(actions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});