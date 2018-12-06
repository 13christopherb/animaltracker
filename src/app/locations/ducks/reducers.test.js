import locationsReducer from "./";
import {animalFormTypes} from '../../animal-forms/ducks';
import {animalsTypes} from '../../animals/ducks';

describe('locations reducer', () => {
    it('should return the initial state', () => {
        expect(locationsReducer(undefined, {})).toEqual(
            {
                locations: {}
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
                type: animalFormTypes.ADD_ANIMAL_SUCCESS,
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

    it('should handle UPDATE_ANIMAL_SUCCESS', () => {
        const oldAnimal = {
            name: 'Edginald',
            weight: 14,
            id: 1,
            location: 'MBO',
            isGettingControlledMeds: false,
            isGettingTubed: true,
        };
        const updatedAnimal = {
            ...oldAnimal,
            weight: 16,
            location: 'NRO'
        };
        expect(
            locationsReducer({
                locations: {
                    NRO: {
                        locationName: 'NRO',
                        animals: [],
                    },
                    MBO: {
                        locationName: 'MBO',
                        animals: [oldAnimal],
                    }
                }
            }, {
                type: animalsTypes.UPDATE_ANIMAL_SUCCESS,
                oldAnimal: oldAnimal,
                updatedAnimal: updatedAnimal,
            })
        ).toEqual({
            locations: {
                NRO: {
                    locationName: 'NRO',
                    animals: [updatedAnimal]
                },
                MBO: {
                    locationName: 'MBO',
                    animals: []
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