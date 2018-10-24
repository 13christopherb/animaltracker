import * as animalService from '../services/AnimalsService';
import {animalConstants} from "../constants/animal.constants";
import {userActions} from "./UserActions";

export const animalActions = {
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
                    console.log(res);
                    dispatch(success(res['animal']))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request(animal) {
        return {type: animalConstants.ADD_ANIMAL_REQUEST, animal}
    }

    function success(animal) {
        return {type: animalConstants.ADD_ANIMAL_SUCCESS, animal}
    }

    function failure(error) {
        return {type: animalConstants.ADD_ANIMAL_FAILURE, error}
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
                    console.log(error.message);
                    dispatch(failure(error))
                }
            );
    };

    function request() {
        return {type: animalConstants.GET_ANIMALS_REQUEST}
    }

    function success(animals) {
        return {type: animalConstants.GET_ANIMALS_SUCCESS, animals}
    }

    function failure(error) {
        return dispatch => {
            dispatch(userActions.unauthorized(this))
            return {
                type: animalConstants.GET_ANIMALS_FAILURE, error
            }
        }
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
        return {type: animalConstants.DELETE_ANIMAL_REQUEST, animal}
    }

    function success(animal) {
        return {type: animalConstants.DELETE_ANIMAL_SUCCESS, animal}
    }

    function failure(error) {
        return {type: animalConstants.DELETE_ANIMAL_FAILURE, error}
    }
}