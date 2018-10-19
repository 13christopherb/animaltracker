import * as WebAPI from '../utils/WebAPI';

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const POST_ANIMAL_SUCCESS = 'POST_ANIMAL_SUCCESS';
export const POST_ANIMAL_FAILURE = 'POST_ANIMAL_FAILURE';
export const REQUEST_ANIMALS = 'REQUEST_ANIMALS';
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const FETCH_ANIMALS_SUCCESS = 'FETCH_ANIMALS_SUCCESS';
export const FETCH_ANIMALS_FAILURE = 'FETCH_ANIMALS_FAILURE';
export const EDIT_ANIMAL = 'EDIT_ANIMAL';
export const EDIT_ANIMAL_SUCCESS = 'EDIT_ANIMAL_SUCCESS';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const DELETE_ANIMAL_SUCCESS = 'DELETE_ANIMAL_SUCCESS';
export const DELETE_ANIMAL_FAILURE = 'DELETE_ANIMAL_FAILURE';

export function addAnimal(animal) {
    return {
        type: ADD_ANIMAL,
        animal
    }
};

export function postAnimalSuccess(animal) {
    return {
        type: POST_ANIMAL_SUCCESS,
        animal
    }
};

export function postAnimalFailure(error) {
    return {
        type: POST_ANIMAL_FAILURE,
        error
    }
};

export const postAnimal = (animal) => dispatch => {
    dispatch(addAnimal(animal));
    return WebAPI.postAnimal(animal).then(res => {
        dispatch(postAnimalSuccess(res));
    }).catch((error) => {
        dispatch(postAnimalFailure(error))
    });
}


export function fetchAnimalsSuccess(animals) {
    return {
        type: FETCH_ANIMALS_SUCCESS,
        animals: animals
    }
}

export function fetchAnimalsFailure(error) {
    return {
        type: FETCH_ANIMALS_FAILURE,
        error: error
    }
}

export const fetchAnimals = () => dispatch => {
    return WebAPI.getAllAnimals().then(res => {
        dispatch(fetchAnimalsSuccess(res['animals']))
    }).catch((error) => {
        dispatch(fetchAnimalsFailure(error))
    });
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

export function deleteAnimalFailure(error) {
    return {
        type: DELETE_ANIMAL_FAILURE,
        error: error
    }
}

export const deleteAnimal = (animal) => dispatch => {
    return WebAPI.deleteAnimal(animal.id).then(res => {
        dispatch(deleteAnimalSuccess(animal))
    }).catch((error) => {
        dispatch(deleteAnimalFailure(error))
    })
};