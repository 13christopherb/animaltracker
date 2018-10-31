import {types} from "./Types";

const initialState = {
    animals: []
};

export default function animalsReducer(state=initialState, action) {
    switch (action.type) {
        case types.ADD_ANIMAL_SUCCESS:
            return {
                ...state,
                animals: [
                    ...state['animals'],
                    action.animal
                ]
            };
        case types.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: action.animals
            };
        case types.DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                animals: state.animals.filter((animal) => animal.id !== action.animal.id)
            };
        default:
            return state
    }
}