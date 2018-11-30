import React from 'react';
import thunk from 'redux-thunk'
import TransportFormContainer from './transport-form-container'
import {TransportForm} from "./transport-form";
import {store} from '../../utils/store';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'
import {mount} from "enzyme/build";

const middlewares = [thunk];


jest.mock('react-dom');

describe('<TransportFormContainer>', () => {
    let handleSubmit;
    let subject;
    beforeEach(() => {
        handleSubmit = jest.fn();
        const props = {
            handleSubmit,
        };
        subject = mount(
            <Provider store={store}>
                <TransportFormContainer {...props}><TransportForm/></TransportFormContainer>
            </Provider>
        )
    });
    it("passes its props to child form", () => {
        expect(subject.find('TransportForm').props())
            .toEqual(expect.objectContaining(subject.find('TransportFormContainer').props()))
    })
});
