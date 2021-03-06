import React from 'react';
import thunk from 'redux-thunk'
import {AnimalFormContainer} from "./animal-form-container";
import {AnimalForm} from "./animal-form";
import {store} from '../../utils/store';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'
import {mount} from "enzyme/build";

const middlewares = [thunk];


jest.mock('react-dom');

describe('<AnimalFormContainer>', () => {
    let handleSubmit;
    let subject;
    beforeEach(() => {
        handleSubmit = jest.fn();
        const props = {
            handleSubmit,
        };
        subject = mount(
            <Provider store={store}>
                <AnimalFormContainer {...props}><AnimalForm/></AnimalFormContainer>
            </Provider>
        )
    });
    it("passes its props to child form", () => {
        expect(subject.find('AnimalForm').props())
            .toEqual(expect.objectContaining(subject.find('AnimalFormContainer').props()))
    });
    it("calls onSubmit", () => {
        const form = subject.find('form');
        const name = subject.find('#name').first();
        const weight = subject.find('#weight').first();
        const species = subject.find('#species').first();
        const location = subject.find('#location').first();
        name.simulate('change', { target: { value: 'Edginald' } });
        weight.simulate('change', { target: { value: '14' } });
        species.simulate('change', { target: { value: 'CSL' } });
        location.simulate('change', { target: { value: 'MBO' } });
        form.simulate('submit');
        expect(handleSubmit.mock.calls.length).toBeGreaterThan(0);
    });
});
