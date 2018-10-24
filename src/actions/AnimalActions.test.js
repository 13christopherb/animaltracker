import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {apiInstance} from "../helpers/api";
import { animalActions } from './AnimalActions';
import { animalConstants} from "../constants/animal.constants";

import * as testValues from '../services/TestValues'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(apiInstance);

describe('async animalActions', () => {
    it('should fetch array of animals from API', () => {
        mockAdapter.onGet('/animals').reply(200, {
            animals: testValues.animals
        });

        const expectedActions = [
            {type: animalConstants.GET_ANIMALS_REQUEST},
            {type: animalConstants.GET_ANIMALS_SUCCESS, animals: testValues.animals}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(animalActions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle fetch error', () => {
        mockAdapter.onGet('/animals').reply(422);
        const error = new Error('Request failed with status code 422');

        const expectedActions = [
            {type: animalConstants.GET_ANIMALS_REQUEST},
            {type: animalConstants.GET_ANIMALS_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(animalActions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should POST an animal to API', () => {
        mockAdapter.onPost('/animals').reply(200, {animal: testValues.animal1});

        const expectedActions = [
            {type: animalConstants.ADD_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: animalConstants.ADD_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(animalActions.addAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        mockAdapter.onPost('/animals').reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: animalConstants.ADD_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: animalConstants.ADD_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(animalActions.addAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should DELETE an animal to API', () => {
        mockAdapter.onDelete('/animal/'+testValues.animal1.id).reply(200);

        const expectedActions = [
            {type: animalConstants.DELETE_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: animalConstants.DELETE_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: [testValues.animal1]});
        return store.dispatch(animalActions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle delete error', () => {
        mockAdapter.onDelete('/animal/'+testValues.animal1.id).reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: animalConstants.DELETE_ANIMAL_REQUEST, animal: testValues.animal1},
            {type: animalConstants.DELETE_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: [testValues.animal1]});
        return store.dispatch(animalActions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});