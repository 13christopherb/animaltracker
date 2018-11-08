import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import {actions} from "./actions";
import {types} from "./types";
import {apiInstance} from "../../../utils/api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(apiInstance);


describe('async actions', () => {

    const transport = {
        id: 1,
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: Date.now()
    };

    it('should POST a transport to API', () => {
        mockAdapter.onPost('/transports').reply(200, transport);

        const expectedActions = [
            {type: types.ADD_TRANSPORT_REQUEST, transport: transport},
            {type: types.ADD_TRANSPORT_SUCCESS, transport: transport}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(actions.addTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        const error = new Error('Request failed with status code 422');
        mockAdapter.onPost('/transports').reply(422, transport);

        const expectedActions = [
            {type: types.ADD_TRANSPORT_REQUEST, transport: transport},
            {type: types.ADD_TRANSPORT_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(actions.addTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});