//@flow
import * as animalService from "../../animals/ducks/operations";
import type {Animal, Field, ThunkAction, ChangeFieldAction,
    AddAnimalRequestAction, AddAnimalSuccessAction, AddAnimalFailureAction} from './types';
import {actionTypes} from "./action-types";

export const actions = {
    addAnimal,
    changeFieldValue
};

function addAnimal(animal:Animal): ThunkAction {
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

    function request(animal): AddAnimalRequestAction {
        return {type: actionTypes.ADD_ANIMAL_REQUEST, animal}
    }

    function success(animal): AddAnimalSuccessAction {
        return {type: actionTypes.ADD_ANIMAL_SUCCESS, animal}
    }

    function failure(error): AddAnimalFailureAction {
        return {type: actionTypes.ADD_ANIMAL_FAILURE, error}
    }
}

function changeFieldValue(field:Field): ChangeFieldAction {
    return { type: actionTypes.CHANGE_FIELD_VALUE, field}
}