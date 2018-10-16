export const ADD_ANIMAL = 'ADD_ANIMAL'
export const GET_ANIMALS = 'GET_ANIMALS'
export const EDIT_ANIMAL = 'EDIT_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_COMMENT'

export function addAnimal(animal) {
    return {
        type: ADD_ANIMAL,
        animal: animal
    }
}

export function getAnimals() {
    return {
        type: GET_ANIMALS
    }
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