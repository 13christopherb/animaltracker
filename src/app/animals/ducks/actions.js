import * as animalService from './operations';
import {types} from "./types";

export const actions = {
    addAnimal,
    getAnimals,
    deleteAnimal
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

function getAnimals() {
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

    function request() {
        return {type: types.GET_ANIMALS_REQUEST}
    }

    function success(animals) {
        return {type: types.GET_ANIMALS_SUCCESS, animals}
    }

    function failure(error) {
        return {type: types.GET_ANIMALS_FAILURE, error}
    }
}

function deleteAnimal(animal) {
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

    function request(animal) {
        return {type: types.DELETE_ANIMAL_REQUEST, animal}
    }

    function success(animal) {
        return {type: types.DELETE_ANIMAL_SUCCESS, animal}
    }

    function failure(error) {
        return {type: types.DELETE_ANIMAL_FAILURE, error}
    }
}