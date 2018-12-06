import * as animalService from "../../animals/ducks/operations";
import {types} from "./types";

export const actions = {
    addAnimal,
    changeFieldValue
};

function addAnimal(animal) {
    return dispatch => {
        dispatch(request(animal));
        return animalService.addAnimal(animal)
            .then(
                res => {
                    dispatch(success(res['animal']))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request(animal) {
        return {type: types.ADD_ANIMAL_REQUEST, animal}
    }

    function success(animal) {
        return {type: types.ADD_ANIMAL_SUCCESS, animal}
    }

    function failure(error) {
        return {type: types.ADD_ANIMAL_FAILURE, error}
    }
}

function changeFieldValue(field) {
    return { type: types.CHANGE_FIELD_VALUE, field}
}