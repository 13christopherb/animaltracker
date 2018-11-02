//@flow

import {actionTypes} from "./action-types";
import type {State, Action} from './types';

let initialState: State = {
    animals: [],
    fields: {
        name: '',
        weight: '',
        location: '',
        isGettingTubed: false,
        isGettingControlledMeds: false
    }
};

export default function animalFormReducer(state:State=initialState, action:Action): State {
    switch (action.type) {
        case actionTypes.CHANGE_FIELD_VALUE:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.field.name]: action.field.value
                }
            };
        default:
            return state
    }
}