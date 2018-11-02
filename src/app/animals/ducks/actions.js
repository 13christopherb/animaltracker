//@flow

import * as animalService from './operations';
import {actionTypes} from "./action-types";
import type {Animal, ThunkAction, DeleteAnimalSuccessAction, DeleteAnimalRequestAction, DeleteAnimalFailureAction,
    GetAnimalsSuccessAction, GetAnimalsFailureAction, GetAnimalsRequestAction} from './types';

export const actions = {
    getAnimals,
    deleteAnimal
};

function getAnimals(): ThunkAction {
    return dispatch => {
        dispatch(request());
        return animalService.getAllAnimals()
            .then(
                res => {
                    dispatch(success(res['animals']))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request(): GetAnimalsRequestAction {
        return {type: actionTypes.GET_ANIMALS_REQUEST}
    }

    function success(animals:Array<Animal>): GetAnimalsSuccessAction {
        return {type: actionTypes.GET_ANIMALS_SUCCESS, animals}
    }

    function failure(error): GetAnimalsFailureAction {
        return {type: actionTypes.GET_ANIMALS_FAILURE, error}
    }
}

function deleteAnimal(animal:Animal): ThunkAction {
    return dispatch => {
        dispatch(request(animal));
        return animalService.deleteAnimal(animal.id)
            .then(
                res => {
                    dispatch(success(animal))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    }

    function request(animal): DeleteAnimalRequestAction {
        return {type: actionTypes.DELETE_ANIMAL_REQUEST, animal}
    }

    function success(animal): DeleteAnimalSuccessAction {
        return {type: actionTypes.DELETE_ANIMAL_SUCCESS, animal}
    }

    function failure(error): DeleteAnimalFailureAction {
        return {type: actionTypes.DELETE_ANIMAL_FAILURE, error}
    }
}