import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {apiInstance} from "../../../utils/api";
import { actions } from './actions';
import { types} from "./types";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(apiInstance);

const greyWind = {
    name: 'Grey Wind',
    weight: 34,
    species: 'Dire Wolf',
    location: 'Winterfell'
}

describe('async actions', () => {

    it('should POST an animal to API', () => {
        mockAdapter.onPost('/animals').reply(200, {animal: greyWind});

        const expectedActions = [
            {type: types.ADD_ANIMAL_REQUEST, animal: greyWind},
            {type: types.ADD_ANIMAL_SUCCESS, animal: greyWind}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.addAnimal(greyWind)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        mockAdapter.onPost('/animals').reply(422);
        const error = new Error('Request failed with status code 422');
        const expectedActions = [
            {type: types.ADD_ANIMAL_REQUEST, animal: greyWind},
            {type: types.ADD_ANIMAL_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.addAnimal(greyWind)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});