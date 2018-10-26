import _ from 'underscore';
import { types} from "./Types";

const initialState = {
    animals: []
};

export default function animalsReducer(state=initialState, action) {
    switch (action.type) {
        case types.ADD_ANIMAL_SUCCESS:
            let animals = [...state['animals']];
            animals.push(action.animal);
            return {
                ...state,
                animals: animals
            };
        case types.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: action.animals
            };
        case types.DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                animals: _.reject(state['animals'], (a) => {
                    return action.animal.id === a.id;
                })
            };
        default:
            return state
    }
}