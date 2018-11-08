import {locationTypes} from "./";
import {animalFormTypes} from "../../animal-form/ducks";
import {animalsTypes} from "../../animals/ducks";
const initialState = {
    locations: {}
};

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case locationTypes.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.locations.reduce((acc, cur) => {
                    acc[cur.locationName] = cur;
                    return acc;
                }, {})
            };
        case animalFormTypes.ADD_ANIMAL_SUCCESS:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    [action.animal.location]: {
                        ...state.locations[action.animal.location],
                        animals: [
                            ...state.locations[action.animal.location].animals,
                            action.animal
                        ]
                    }
                }
            };
        case animalsTypes.UPDATE_ANIMAL_SUCCESS:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    [action.oldAnimal.location]: {
                        ...state.locations[action.oldAnimal.location],
                        animals: state.locations[action.oldAnimal.location]
                            .animals.filter((animal) => animal.id !== action.oldAnimal.id)
                    },
                    [action.updatedAnimal.location]: {
                        ...state.locations[action.updatedAnimal.location],
                        animals: [
                            ...state.locations[action.updatedAnimal.location].animals,
                            action.updatedAnimal
                        ]
                    }
                }
            };
        case animalsTypes.DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    [action.animal.location]: {
                        ...state.locations[action.animal.location],
                        animals: state.locations[action.animal.location]
                            .animals.filter((animal) => animal.id !== action.animal.id)
                    }
                }
            };
        default:
            return state
    }
}