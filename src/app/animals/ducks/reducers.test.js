import animalsReducer from './index';
import { types} from "./types";

const animals = [{
    name: 'Nymeria',
    weight: 33,
    species: 'Dire Wolf',
    location: 'MBO'
},
    {
        name: 'Lady',
        weight: 33,
        species: 'Dire Wolf',
        location: 'MBO'
    }

];

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
            animalsReducer({animals: animals}, {
                type: types.GET_ANIMALS_SUCCESS,
                animals: animals
            })
        ).toEqual({
            animals: animals
        });
    });
});