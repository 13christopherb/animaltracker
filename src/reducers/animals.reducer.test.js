import { animals } from './animals.reducer';
import * as actions from '../actions/AnimalActions';
import * as testValues from '../services/TestValues'

describe('animals reducer', () => {
    it('should return the initial state', () => {
        expect(animals(undefined, {})).toEqual(
            {
                animals: []
            }
        )
    });

    it('should handle POST_ANIMAL_SUCCESS', () => {
        expect(
            animals({animals: []}, {
                type: actions.POST_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: [testValues.animal1]
        })
    });

    it('should handle FETCH_ANIMALS_SUCCESS', () => {
        expect(
            animals({animals: testValues.animals}, {
                type: actions.FETCH_ANIMALS_SUCCESS,
                animals: testValues.animals
            })
        ).toEqual({
            animals: testValues.animals
        });
    });

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        expect(
            animals({animals: testValues.animals}, {
                type: actions.DELETE_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: testValues.animalsMinusOne
        });
    })
});