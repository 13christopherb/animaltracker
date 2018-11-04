import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import AnimalFormContainer from "./animal-form-container";

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

jest.mock('react-dom');

const spy = jest.fn();
const Decorated = reduxForm({
    form: 'animal-form', onSubmit: {spy}
})(AnimalFormContainer);

const formFieldValues = {name: 'Edginald'};

describe('<AnimalFormContainer>', () => {
        test('AnimalFormContainer renders correctly', () => {
            const store = mockStore(initialState);
            const tree = renderer.create(
                <Provider store={store}>
                    <Decorated
                        {...formFieldValues}
                    />
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot()
        })
    }
);
