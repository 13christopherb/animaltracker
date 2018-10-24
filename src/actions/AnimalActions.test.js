import { animalActions } from './AnimalActions';
import { animalConstants} from "../constants/animal.constants";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as testValues from '../services/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async animalActions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should fetch array of animals from API', () => {
        fetchMock.getOnce('http://localhost:5000/animals', {
            body: {animals: testValues.animals},
            headers: {'content-type': 'application/json'}
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
        const error = new Error('Network error');
        fetchMock.getOnce('http://localhost:5000/animals', {
            throws: error
        });

        const expectedActions = [
            {type: animalConstants.GET_ANIMALS_REQUEST},
            {type: animalConstants.GET_ANIMALS_FAILURE, error: error}
        ];

        const store = mockStore({animals: []})
        return store.dispatch(animalActions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should POST an animal to API', () => {
        fetchMock.postOnce('http://localhost:5000/animals', {
            body: {animal: testValues.animal1},
            headers: {'content-type': 'application/json'}
        });


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
        const error = new Error('Network error');
        fetchMock.postOnce('http://localhost:5000/animals', {
            throws: error
        });

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
        fetchMock.deleteOnce('http://localhost:5000/animal/1', {
            body: {animal: testValues.animal1},
            headers: {'content-type': 'application/json'}
        });

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
        const error = new Error('Network error');
        fetchMock.deleteOnce('http://localhost:5000/animal/1', {
            throws: error
        });

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