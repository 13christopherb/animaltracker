import React from 'react';
import configureMockStore from 'redux-mock-store';
import {mount, shallow, ReactWrapper} from 'enzyme';
import {AnimalModalForm} from './animal-modal-form';
import {Button} from 'react-bootstrap';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'

const mockStore = configureMockStore();


jest.mock('react-dom');

const onSubmit = jest.fn();
const Decorated = reduxForm({
    form: 'animal-forms', onSubmit: {onSubmit}
})(AnimalModalForm);

describe('<AnimalModalForm />', () => {
    const mockSubmit = jest.fn();
    const mockChange = jest.fn();
    const hideModal = jest.fn();
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
        const wrapper = shallow(<AnimalModalForm handleSubmit={mockSubmit}
                                               handleChange={mockChange}
                                               hideModal={hideModal}
                                               id="MBO"
                                               pristine={false}
                                               errors={{name: 'Error'}}/>);
        expect(wrapper.find({type: 'submit'}).props().disabled).toEqual(true);
    });
});