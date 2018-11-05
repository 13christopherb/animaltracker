import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import AnimalFormContainer from "./animal-form-container";
import {animalsTypes} from '../animals/ducks/'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    animals: [],
    animalForm: {fields: {}}
};

const store = mockStore(initialState);


import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'
import {mount} from "enzyme/build";
import {types} from "../transports/ducks/types";

jest.mock('react-dom');

const spy = jest.fn();


const formFieldValues = {name: 'Edginald'};

describe('<AnimalFormContainer>', () => {
    test('AnimalFormContainer renders correctly', () => {
        const Decorated = reduxForm({
            form: 'animal-form', onSubmit: {spy}
        })(AnimalFormContainer);
        const store = mockStore(initialState);
        const tree = renderer.create(
            <Provider store={store}>
                <Decorated
                    {...formFieldValues}
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    });
});
