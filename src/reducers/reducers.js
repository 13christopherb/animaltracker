import _ from 'underscore';
import * as Actions from '../actions/AnimalActions.js';

const initialState = {
    animals: []
}

function reducers(state=initialState, action) {
    switch (action.type) {
        case Actions.POST_ANIMAL_SUCCESS:
            console.log(state)
            var animals = [...state['animals']];
            animals.push(action.animal);
            return {
                ...state,
                ['animals']: animals
            }
        case Actions.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                ['animals']: action.animals
            }

        default:
            return state
    }
}

export default reducers;