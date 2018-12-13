import {types} from "./types";

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

export default function animalFormReducer(state=initialState, action) {
    switch (action.type) {
        case types.CHANGE_FIELD_VALUE:
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