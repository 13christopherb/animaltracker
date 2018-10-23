import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {transportActions} from "./TransportActions";
import {transportConstants} from "../constants/transport.constants";
import * as testValues from '../services/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async transportActions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    const transport = {
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: Date.now()
    }

    const transports = [
        transport
    ];

    it('should fetch array of transports from API', () => {
        fetchMock.getOnce('http://localhost:5000/transports', {
            body: {transports: transports},
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: transportConstants.GET_TRANSPORTS_REQUEST},
            {type: transportConstants.GET_TRANSPORTS_SUCCESS, transports: transports}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(transportActions.getTransports()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle fetch error', () => {
        const error = new Error('Network error');
        fetchMock.getOnce('http://localhost:5000/transports', {
            throws: error
        });

        const expectedActions = [
            {type: transportConstants.GET_TRANSPORTS_REQUEST},
            {type: transportConstants.GET_TRANSPORTS_FAILURE, error: error}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(transportActions.getTransports()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should POST an animal to API', () => {
        fetchMock.postOnce('http://localhost:5000/transports', {
            body: transport,
            headers: {'content-type': 'application/json'}
        });

        const expectedActions = [
            {type: transportConstants.ADD_TRANSPORT_REQUEST, transport: transport},
            {type: transportConstants.ADD_TRANSPORT_SUCCESS, transport: transport}
        ];

        const store = mockStore({transports: []});
        return store.dispatch(transportActions.addTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should handle post error', () => {
        const error = new Error('Network error');
        fetchMock.postOnce('http://localhost:5000/transports', {
            throws: error
        });

        const expectedActions = [
            {type: transportConstants.ADD_TRANSPORT_REQUEST, transport: transport},
            {type: transportConstants.ADD_TRANSPORT_FAILURE, error: error}
        ];

        const store = mockStore({animals: []});
        return store.dispatch(transportActions.addTransport(transport)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});