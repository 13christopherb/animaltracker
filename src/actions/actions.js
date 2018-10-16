import * as WebAPI from '../utils/WebAPI';

export const ADD_ANIMAL = 'ADD_ANIMAL'
export const POST_ANIMAL = 'POST_ANIMAL'
export const GOT_ANIMALS = 'GOT_ANIMALS'
export const GET_ANIMALS = 'GET_ANIMALS'
export const EDIT_ANIMAL = 'EDIT_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_COMMENT'

export function addAnimal(animal) {
    return {
        type: ADD_ANIMAL,
        animal: animal
    }
}

export const postAnimal = (animal) => dispatch => {
    WebAPI.postAnimal(animal).then(res => {
        dispatch(addAnimal(animal));
    });
}

export function gotAnimals(animals) {
    return {
        type: GOT_ANIMALS,
        animals: animals
    }
}

export const getAnimals = () => dispatch => {
    WebAPI.getAllAnimals().then(res => {
        dispatch(gotAnimals(res))
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