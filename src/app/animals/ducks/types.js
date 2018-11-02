//@flow

import {actionTypes} from "./action-types";

export type Animal = {
    id: string,
    name: string,
    weight: string,
    location: string,
    isGettingTubed: boolean,
    isGettingControlledMeds: boolean
}

export type ReadOnlyAnimal = {
    +id: string,
    +name: string,
    +weight: string,
    +location: string,
    +isGettingTubed: boolean,
    +isGettingControlledMeds: boolean
}

export type State = {
    +animals: Array<{
        +id: string,
        +name: string,
        +weight: string,
        +location: string,
        +isGettingTubed: boolean,
        +isGettingControlledMeds: boolean
    }>
};

export type GetAnimalsRequestAction = {
    type: 'GET_ANIMALS_REQUEST'
}

export type GetAnimalsFailureAction = {
    type: 'GET_ANIMALS_FAILURE',
}

export type GetAnimalsSuccessAction = {
    type: 'GET_ANIMALS_SUCCESS',
    animals: Array<{
        id: string,
        name: string,
        weight: string,
        location: string,
        isGettingTubed: boolean,
        isGettingControlledMeds: boolean
    }>
}

export type DeleteAnimalRequestAction = {
    type: 'DELETE_ANIMAL_REQUEST',
    animal: {
        id: string,
        name: string,
        weight: string,
        location: string,
        isGettingTubed: boolean,
        isGettingControlledMeds: boolean
    }
}

export type DeleteAnimalFailureAction = {
    type: 'DELETE_ANIMAL_FAILURE'
}

export type DeleteAnimalSuccessAction = {
    type: 'DELETE_ANIMAL_SUCCESS',
    animal: {
        id: string,
        name: string,
        weight: string,
        location: string,
        isGettingTubed: boolean,
        isGettingControlledMeds: boolean
    }
}

export type Action = GetAnimalsFailureAction | GetAnimalsRequestAction | GetAnimalsSuccessAction | DeleteAnimalFailureAction | DeleteAnimalRequestAction | DeleteAnimalSuccessAction

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;