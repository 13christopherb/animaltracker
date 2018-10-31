import locationsReducer from "./";
import {animalsTypes} from '../../animals/ducks';

describe('locations reducer', () => {
    it('should return the initial state', () => {
        expect(locationsReducer(undefined, {})).toEqual(
            {
                locations: []
            }
        )
    });

    it('should handle ADD_ANIMAL_SUCCESS', () => {
        const animal = {
            name: 'Edginald',
            weight: 14,
            id: 1,
            location: 'MBO',
            isGettingControlledMeds: false,
            isGettingTubed: true,
        };
        expect(
            locationsReducer({
                locations: {
                    MBO: {
                        locationName: 'MBO',
                        animals: []
                    }
                }
            }, {
                type: animalsTypes.ADD_ANIMAL_SUCCESS,
                animal: animal
            })
        ).toEqual({
            locations: {
                MBO: {
                    locationName: 'MBO',
                    animals: [animal]
                }
            }
        })
    });

    it('should handle DELETE_ANIMAL_SUCCESS', () => {
        const animal = {
            name: 'Edginald',
            weight: 14,
            id: 1,
            location: 'MBO',
            isGettingControlledMeds: false,
            isGettingTubed: true,
        };
        expect(
            locationsReducer({
                locations: {
                    MBO: {
                        locationName: 'MBO',
                        animals: [animal]
                    }
                }
            }, {
                type: animalsTypes.DELETE_ANIMAL_SUCCESS,
                animal: animal
            })
        ).toEqual({
            locations: {
                MBO: {
                    locationName: 'MBO',
                    animals: []
                }
            }
        })
    });
});