import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {reduxForm} from 'redux-form'
import {HeaderLogin} from './header-login';

const mockStore = configureMockStore();


jest.mock('react-dom');

const onSubmit = jest.fn();
const Decorated = reduxForm({
    form: 'HeaderLogin', onSubmit: {onSubmit}
})(HeaderLogin);

describe('<HeaderLogin />', () => {
    const defaultProps = {
        pristine: false,
        valid: true,
    };
    test('HeaderLogin renders correctly', () => {
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
});