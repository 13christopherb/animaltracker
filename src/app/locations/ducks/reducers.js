import _ from 'underscore';
import {locationTypes} from "./";
import {animalFormTypes} from "../../animal-form/ducks";

const initialState = {
    locations: []
};

export default function locationsReducer(state = initialState, action) {
    console.log(animalFormTypes.ADD_ANIMAL_SUCCESS);
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
        case animalFormTypes.DELETE_ANIMAL_SUCCESS:
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