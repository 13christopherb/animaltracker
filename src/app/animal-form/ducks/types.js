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

export type Field = {
    name: string,
    value: string | boolean
}

export type State = {
    +animals: Array<{
        +id: string,
        +name: string,
        +weight: string,
        +location: string,
        +isGettingTubed: boolean,
        +isGettingControlledMeds: boolean
    }>,
    +fields: {
        +name: string,
        +weight: string,
        +location: string,
        +isGettingTubed: boolean,
        +isGettingControlledMeds: boolean
    }
};

export type ChangeFieldAction = {
    type: 'CHANGE_FIELD_VALUE',
    field: {name: string, value: string | boolean}
}

export type AddAnimalSuccessAction = {
    type: 'ADD_ANIMAL_SUCCESS',
    animal: {
        id: string,
        name: string,
        weight: string,
        location: string,
        isGettingTubed: boolean,
        isGettingControlledMeds: boolean}
}

export type AddAnimalFailureAction = {
    type: 'ADD_ANIMAL_FAILURE',
}

export type AddAnimalRequestAction = {
    type: 'ADD_ANIMAL_REQUEST',
    animal: {
        id: string,
        name: string,
        weight: string,
        location: string,
        isGettingTubed: boolean,
        isGettingControlledMeds: boolean}
}

export type Action = ChangeFieldAction | AddAnimalSuccessAction | AddAnimalFailureAction | AddAnimalRequestAction

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;