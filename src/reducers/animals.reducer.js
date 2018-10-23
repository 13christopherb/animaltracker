import _ from 'underscore';
import { animalConstants} from "../constants/animal.constants";

const initialState = {
    animals: []
};

export function animals(state=initialState, action) {
    switch (action.type) {
        case animalConstants.ADD_ANIMAL_SUCCESS:
            var animals = [...state['animals']];
            animals.push(action.animal);
            return {
                ...state,
                animals: animals
            };
        case animalConstants.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: action.animals
            };
        case animalConstants.DELETE_ANIMAL_SUCCESS:
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