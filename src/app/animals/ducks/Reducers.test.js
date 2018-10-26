import animalsReducer from './index';
import { types} from "./Types";
import * as testValues from '../../../services/TestValues';

describe('animalsReducer reducer', () => {
    it('should return the initial state', () => {
        expect(animalsReducer(undefined, {})).toEqual(
            {
                animals: []
            }
        )
    });

    it('should handle ADD_ANIMAL_SUCCESS', () => {
        expect(
            animalsReducer({animals: []}, {
                type: types.ADD_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: [testValues.animal1]
        })
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

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        expect(
            animalsReducer({animals: testValues.animals}, {
                type: types.DELETE_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: testValues.animalsMinusOne
        });
    });
});