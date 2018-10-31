import _ from 'underscore';
import {locationTypes} from "./";
import {animalsTypes} from "../../animals/ducks";

const initialState = {
    locations: []
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
        case animalsTypes.ADD_ANIMAL_SUCCESS:
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