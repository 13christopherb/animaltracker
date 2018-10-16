import _ from 'underscore';
import * as Actions from '../actions/actions.js';

const initialState = {
    animals: []
}

function reducers(state=initialState, action) {
    switch (action.type) {
        case Actions.ADD_ANIMAL:
            var animals = [...state['animals']];
            animals.push(action.animal);
            return {
                ...state,
                ['animals']: animals
            }

        default:
            return state
    }
}

export default reducers;