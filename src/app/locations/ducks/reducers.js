import {locationTypes} from "./";
import {animalFormTypes} from "../../animal-forms/ducks";
import {animalsTypes} from "../../animals/ducks";
const initialState = {
    locations: {},
    isLoading: false,
    isSaving: false,
    hasSaved: false,
    error: null,
    isDeletingAnimal: false,
    deletedAnimal: {},
};

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case locationTypes.GET_LOCATIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case locationTypes.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                locations: action.locations.reduce((acc, cur) => {
                    acc[cur.locationName] = cur;
                    return acc;
                }, {})
            };
        case animalFormTypes.ADD_ANIMAL_REQUEST:
            return {
                ...state,
            };
        case animalFormTypes.ADD_ANIMAL_FAILURE:
            return {
                ...state,
                error: action.error,
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
        case animalsTypes.DELETE_ANIMAL_REQUEST:
            return {
                ...state,
                isDeletingAnimal: true,
                deletedAnimal: action.animal
            };
        case animalsTypes.DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                isDeletingAnimal: false,
                deletedAnimal: {},
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