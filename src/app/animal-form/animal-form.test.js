import React from 'react';
import configureMockStore from 'redux-mock-store';
import {mount} from 'enzyme';
import AnimalForm from './animal-form';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'

const mockStore = configureMockStore();


jest.mock('react-dom');

const onSubmit = jest.fn();
const Decorated = reduxForm({
    form: 'animal-form', onSubmit: {onSubmit}
})(AnimalForm);

describe('<AnimalForm />', () => {
    const defaultProps = {
        pristine: false,
        valid: true,
    };
    test('AnimalForm renders correctly', () => {
        const store = mockStore();
        const tree = renderer.create(
            <Provider store={store}>
                <Decorated
                    {...defaultProps}
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    });
    test('Disables button on form errors', () => {
        const store = mockStore();
        const props = {
            ...defaultProps,
            valid: false,
        };
        const wrapper = mount(<Provider store={store}>
            <Decorated
                {...props}
            />
        </Provider>);
        expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(true);
    });
});