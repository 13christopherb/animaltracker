import React from 'react';
import thunk from 'redux-thunk'
import TransportFormContainer from './transport-form-container';
import {store} from '../../utils/store';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'
import {mount} from "enzyme/build";


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
                <TransportFormContainer {...props}/>
            </Provider>
        )
    });
    it("calls onSubmit", () => {
        const form = subject.find('form');
        const departs = subject.find('#departs').first();
        const arrives = subject.find('#arrives').first();
        departs.simulate('change', { target: { value: 'MBO' } });
        arrives.simulate('change', { target: { value: 'SLO' } });
        form.simulate('submit');
        expect(handleSubmit.mock.calls.length).toBeGreaterThan(0);
    })
});
