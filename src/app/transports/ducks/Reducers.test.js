import transportsReducer from './index';
import { types } from './Types';
import * as testValues from '../../../services/TestValues';

describe('transportsReducer reducer', () => {
    const transport = {
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: Date.now()
    }
    it('should return the initial state', () => {
        expect(transportsReducer(undefined, {})).toEqual(
            {
                transports: []
            }
        )
    });

    it('should handle ADD_TRANSPORT_SUCCESS', () => {
        expect(
            transportsReducer({transports: []}, {
                type: types.ADD_TRANSPORT_SUCCESS,
                transport: transport
            })
        ).toEqual({
            transports: [transport]
        })
    });

    it('should handle GET_TRANSPORTS_SUCCESS', () => {
        expect(
            transportsReducer({transports: []}, {
                type: types.GET_TRANSPORTS_SUCCESS,
                transports: [transport]
            })
        ).toEqual({
            transports: [transport]
        });
    });

    it('should handle DELETE_TRANSPORTS_SUCCESS', () => {
        expect(
            transportsReducer({transports: []}, {
                type: types.DELETE_TRANSPORTS_SUCCESS,
                transports: [transport]
            })
        ).toEqual({
            transports: []
        });
    });

});