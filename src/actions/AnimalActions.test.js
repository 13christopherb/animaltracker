import * as actions from './AnimalActions';
import configureMockStore from 'redux-mock-store'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as testValues from '../utils/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('should fetch array of animals from API', () => {
        fetchMock.getOnce('http://localhost:5000/animals', {
            body: {animals: testValues.animals},
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: actions.FETCH_ANIMALS_SUCCESS, animals: testValues.animals}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.fetchAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it('should handle fetch error', () => {
        const error = new Error('Network error')
        fetchMock.getOnce('http://localhost:5000/animals', {
            throws: error
        });

        const expectedActions = [
            {type: actions.FETCH_ANIMALS_FAILURE, error: error}
        ]

        const store = mockStore({animals: []})
        return store.dispatch(actions.fetchAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it('should POST an animal to API', () => {
        fetchMock.postOnce('http://localhost:5000/animals', {
            body: testValues.animal1,
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: actions.ADD_ANIMAL, animal: testValues.animal1},
            {type: actions.POST_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: []})
        return store.dispatch(actions.postAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        const error = new Error('Network error')
        fetchMock.postOnce('http://localhost:5000/animals', {
            throws: error
        });

        const expectedActions = [
            {type: actions.ADD_ANIMAL, animal: testValues.animal1},
            {type: actions.POST_ANIMAL_FAILURE, error: error}
        ]

        const store = mockStore({animals: []})
        return store.dispatch(actions.postAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should DELETE an animal to API', () => {
        fetchMock.deleteOnce('http://localhost:5000/animals/1', {
            body: {animal: testValues.animal1},
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: actions.DELETE_ANIMAL_SUCCESS, animal: testValues.animal1}
        ];

        const store = mockStore({animals: [testValues.animal1]})
        return store.dispatch(actions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    it('should handle delete error', () => {
        const error = new Error('Network error')
        fetchMock.deleteOnce('http://localhost:5000/animals/1', {
            throws: error
        });

        const expectedActions = [
            {type: actions.DELETE_ANIMAL_FAILURE, error: error}
        ]

        const store = mockStore({animals: [testValues.animal1]})
        return store.dispatch(actions.deleteAnimal(testValues.animal1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});