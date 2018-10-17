import * as WebAPI from '../utils/WebAPI';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMAL_SUCCESS = 'ADD_ANIMAL_SUCCESS';
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const EDIT_ANIMAL = 'EDIT_ANIMAL';
export const EDIT_ANIMAL_SUCCESS = 'EDIT_ANIMAL_SUCCESS';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const DELETE_ANIMAL_SUCCESS = 'DELETE_ANIMAL_SUCCESS';

export function addAnimalSuccess(animal) {
    return {
        type: ADD_ANIMAL_SUCCESS,
        animal: animal
    }
}

export const addAnimal = (animal) => dispatch => {
    return WebAPI.postAnimal(animal).then(res => {
        dispatch(addAnimalSuccess(res));
    });
}

export function fetchAnimalsSuccess(animals) {
    return {
        type: FETCH_ANIMALS_SUCCESS,
        animals: animals
    }
}

export const fetchAnimals = () => dispatch => {
    return WebAPI.getAllAnimals().then(res => {
        dispatch(fetchAnimalsSuccess(res['animals']))
    })
}

export function editAnimal(animal) {
    return {
        type: EDIT_ANIMAL,
        animal: animal
    }
}

export function deleteAnimalSuccess(animal) {
    return {
        type: DELETE_ANIMAL_SUCCESS,
        animal: animal
    }
}

export const deleteAnimal = (animal) => dispatch => {
    return WebAPI.deleteAnimal(animal.id).then(res => {
        dispatch(deleteAnimalSuccess(animal))
    })
}