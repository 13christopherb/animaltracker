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
                    dispatch(success({
                        animal: res['animal'],
                        lastUpdated: res['lastUpdated']
                    }))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request(animal) {
        return {type: types.ADD_ANIMAL_REQUEST, animal}
    }

    function success({animal, lastUpdated}) {
        return {type: types.ADD_ANIMAL_SUCCESS, animal, lastUpdated}
    }

    function failure(error) {
        return {type: types.ADD_ANIMAL_FAILURE, error}
    }
}

function changeFieldValue(field) {
    return { type: types.CHANGE_FIELD_VALUE, field}
}