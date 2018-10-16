import * as WebAPI from '../utils/WebAPI';

export const POST_ANIMAL = 'POST_ANIMAL'
export const POST_ANIMAL_SUCCESS = 'POST_ANIMAL_SUCCESS'
export const GET_ANIMALS = 'GET_ANIMALS'
export const GET_ANIMALS_SUCCESS = 'GET_ANIMALS_SUCCESS'
export const EDIT_ANIMAL = 'EDIT_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_ANIMAL'

export function addAnimal(animal) {
    return {
        type: POST_ANIMAL_SUCCESS,
        animal: animal
    }
}

export const postAnimal = (animal) => dispatch => {
    WebAPI.postAnimal(animal).then(res => {
        dispatch(addAnimal(animal));
    });
}

export function getAnimalsSuccess(animals) {
    return {
        type: GET_ANIMALS_SUCCESS,
        animals: animals
    }
}

export const getAnimals = () => dispatch => {
    return WebAPI.getAllAnimals().then(res => {
        return dispatch(getAnimalsSuccess(res['animals']))
    })
}

export function editAnimal(animal) {
    return {
        type: EDIT_ANIMAL,
        animal: animal
    }
}

export function removeAnimal(animal) {
    return {
        type: DELETE_ANIMAL,
        animal: animal
    }
}

export const deleteAnimal = (animal) => dispatch => {
    WebAPI.deleteAnimal(animal.id).then(res => {
        dispatch(removeAnimal(animal))
    })
}