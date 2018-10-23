import { transports } from './transports.reducer';
import { transportConstants } from '../constants/transport.constants';
import * as testValues from '../services/TestValues';

describe('transports reducer', () => {
    const transport = {
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: Date.now()
    }
    it('should return the initial state', () => {
        expect(transports(undefined, {})).toEqual(
            {
                transports: []
            }
        )
    });

    it('should handle ADD_TRANSPORT_SUCCESS', () => {
        expect(
            transports({transports: []}, {
                type: transportConstants.ADD_TRANSPORT_SUCCESS,
                transport: transport
            })
        ).toEqual({
            transports: [transport]
        })
    });

    it('should handle GET_TRANSPORTS_SUCCESS', () => {
        expect(
            transports({transports: []}, {
                type: transportConstants.GET_TRANSPORTS_SUCCESS,
                transports: [transport]
            })
        ).toEqual({
            transports: [transport]
        });
    });

});