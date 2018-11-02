//@flow

import {actionTypes} from './action-types';
import type {State, Action, Animal, ReadOnlyAnimal} from './types'

const initialState:State = {
    animals: []
};

export default function animalsReducer(state:State=initialState, action:Action): State {
    switch (action.type) {
        case actionTypes.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: [...action.animals]
            };
        case actionTypes.DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                animals: state.animals.filter((animal) => animal.id === action.animal)
            };
        default:
            return state
    }
}