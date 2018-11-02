import animalsReducer from './index';
import { actionTypes} from "./action-types";
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
                type: actionTypes.ADD_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: [testValues.animal1]
        })
    });

    it('should handle FETCH_ANIMALS_SUCCESS', () => {
        expect(
            animalsReducer({animals: testValues.animals}, {
                type: actionTypes.GET_ANIMALS_SUCCESS,
                animals: testValues.animals
            })
        ).toEqual({
            animals: testValues.animals
        });
    });

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        expect(
            animalsReducer({animals: testValues.animals}, {
                type: actionTypes.DELETE_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: testValues.animalsMinusOne
        });
    });
});