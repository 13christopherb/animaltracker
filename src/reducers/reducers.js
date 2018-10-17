import _ from 'underscore';
import * as Actions from '../actions/AnimalActions.js';

const initialState = {
    animals: []
}

function reducers(state=initialState, action) {
    switch (action.type) {
        case Actions.ADD_ANIMAL_SUCCESS:
            var animals = [...state['animals']];
            animals.push(action.animal);
            return {
                ...state,
                animals: animals
            };
        case Actions.FETCH_ANIMALS_SUCCESS:
            return {
                ...state,
                animals: action.animals
            };
        case Actions.DELETE_ANIMAL_SUCCESS:
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

export default reducers;