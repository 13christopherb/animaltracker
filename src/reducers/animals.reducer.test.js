import { animals } from './animals.reducer';
import { animalConstants} from "../constants/animal.constants";
import * as testValues from '../services/TestValues';

describe('animals reducer', () => {
    it('should return the initial state', () => {
        expect(animals(undefined, {})).toEqual(
            {
                animals: []
            }
        )
    });

    it('should handle ADD_ANIMAL_SUCCESS', () => {
        expect(
            animals({animals: []}, {
                type: animalConstants.ADD_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: [testValues.animal1]
        })
    });

    it('should handle FETCH_ANIMALS_SUCCESS', () => {
        expect(
            animals({animals: testValues.animals}, {
                type: animalConstants.GET_ANIMALS_SUCCESS,
                animals: testValues.animals
            })
        ).toEqual({
            animals: testValues.animals
        });
    });

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        expect(
            animals({animals: testValues.animals}, {
                type: animalConstants.DELETE_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: testValues.animalsMinusOne
        });
    });
});