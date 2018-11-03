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

    const transports = [
        transport
    ];


    it('should fetch array of transports from API', () => {


        mockAdapter.onGet('/transports').reply(200, {
                transports: [transport]
        });

        const expectedActions = [
            {type: types.GET_TRANSPORTS_REQUEST},
            {type: types.GET_TRANSPORTS_SUCCESS, transports: transports}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(actions.getTransports()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle fetch error', () => {
        const error = new Error('Request failed with status code 422');

        mockAdapter.onGet('/transports').reply(422);

        const expectedActions = [
            {type: types.GET_TRANSPORTS_REQUEST},
            {type: types.GET_TRANSPORTS_FAILURE, error: error}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(actions.getTransports()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

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
    it('should DELETE an animal to API', () => {
        mockAdapter.onDelete('/transport/'+transport.id).reply(200);

        const expectedActions = [
            {type: types.DELETE_TRANSPORT_REQUEST, transport: transport},
            {type: types.DELETE_TRANSPORT_SUCCESS, transport: transport}
        ];

        const store = mockStore({transports: [transport]});
        return store.dispatch(actions.deleteTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle delete error', () => {
        mockAdapter.onDelete('/transport/'+transport.id).reply(422);
        const error = new Error('Request failed with status code 422');

        const expectedActions = [
            {type: types.DELETE_TRANSPORT_REQUEST, transport: transport},
            {type: types.DELETE_TRANSPORT_FAILURE, error: error}
        ];

        const store = mockStore({transports: [transport]});
        return store.dispatch(actions.deleteTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});