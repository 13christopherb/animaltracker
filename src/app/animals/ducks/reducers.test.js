import animalsReducer from './index';
import { types} from "./types";
import * as testValues from '../../../services/TestValues';

describe('animalsReducer reducer', () => {
    it('should return the initial state', () => {
        expect(animalsReducer(undefined, {})).toEqual(
            {
                animals: []
            }
        )
    });

    it('should handle FETCH_ANIMALS_SUCCESS', () => {
        expect(
            animalsReducer({animals: testValues.animals}, {
                type: types.GET_ANIMALS_SUCCESS,
                animals: testValues.animals
            })
        ).toEqual({
            animals: testValues.animals
        });
    });
});