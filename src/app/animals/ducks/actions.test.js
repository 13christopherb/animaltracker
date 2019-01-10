import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {apiInstance} from "../../../utils/api";
import { actions } from './actions';
import { types} from "./types";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(apiInstance);

const nymeria = {
    name: 'Nymeria',
    weight: 33,
    species: 'Dire Wolf',
    location: 'MBO',
    id: 1
};

const lady =  {
    name: 'Lady',
    weight: 33,
    species: 'Dire Wolf',
    location: 'MBO',
    id: 2
};

const animals = [nymeria, lady];

describe('async actions', () => {
    it('should fetch array of animals from API', () => {
        mockAdapter.onGet('/animals').reply(200, {
            animals: animals
        });

        const expectedActions = [
            {type: types.GET_ANIMALS_REQUEST},
            {type: types.GET_ANIMALS_SUCCESS, animals: animals}
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
            {type: types.GET_ANIMALS_REQUEST},
            {type: types.GET_ANIMALS_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should DELETE an animal to API', () => {
        mockAdapter.onDelete('/animal/'+nymeria.id).reply(200);

        const expectedActions = [
            {type: types.DELETE_ANIMAL_REQUEST, animal: nymeria},
            {type: types.DELETE_ANIMAL_SUCCESS, animal: nymeria}
        ];

        const store = mockStore({animals: [animals]});
        return store.dispatch(actions.deleteAnimal(nymeria)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle delete error', () => {
        mockAdapter.onDelete('/animal/'+nymeria.id).reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: types.DELETE_ANIMAL_REQUEST, animal: nymeria},
            {type: types.DELETE_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: [animals]});
        return store.dispatch(actions.deleteAnimal(nymeria)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});