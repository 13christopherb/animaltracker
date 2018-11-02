import {types} from './types';

const initialState = {
    animals: []
};

export default function animalsReducer(state=initialState, action): State {
    switch (action.type) {
        case types.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: [...action.animals]
            };
        default:
            return state
    }
}