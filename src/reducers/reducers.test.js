import reducer from './reducers';
import * as actions from '../actions/AnimalActions';
import * as testValues from '../utils/TestValues'

describe('animals reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                animals: []
            }
        )
    })

    it('should handle ADD_ANIMAL_SUCCESS', () => {
        expect(
            reducer({animals: []}, {
                type: actions.ADD_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: [testValues.animal1]
        })
    })

    it('should handle FETCH_ANIMALS_SUCCESS', () => {
        expect(
            reducer({animals: testValues.animals}, {
                type: actions.FETCH_ANIMALS_SUCCESS,
                animals: testValues.animals
            })
        ).toEqual({
            animals: testValues.animals
        });
    })

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        expect(
            reducer({animals: testValues.animals}, {
                type: actions.DELETE_ANIMAL_SUCCESS,
                animal: testValues.animal1
            })
        ).toEqual({
            animals: testValues.animalsMinusOne
        });
    })
})