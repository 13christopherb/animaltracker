import React from 'react';
import configureMockStore from 'redux-mock-store';
import {mount} from 'enzyme';
import {AnimalListItemForm} from "./animal-list-item-form";
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'

const mockStore = configureMockStore();


jest.mock('react-dom');

const onSubmit = jest.fn();
const Decorated = reduxForm({
    form: 'testForm', onSubmit: {onSubmit}
})(AnimalListItemForm);

describe('<AnimalListeItemForm />', () => {
    const defaultProps = {
        pristine: false,
        valid: true,
        animal: {
            name: 'Kirt',
            species: 'CSL',
            location: 'MBO',
            weight: 42
        }
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