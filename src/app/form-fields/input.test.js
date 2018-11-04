import React from 'react';
import {mount} from 'enzyme';
import {Input} from './';
import renderer from 'react-test-renderer'

describe('<Input />', () => {
    const defaultProps = {
        meta: {
            touched: false,
            error: null
        },
        id: 'name',
        name: 'name',
        title: 'Name',
        type: 'text',
    };
    describe('render()', () => {
        test('should render the component normally', () => {
            const component = renderer.create(<Input {...defaultProps} />).toJSON();
            expect(component).toMatchSnapshot()
        });
        test('should highlight incorrect field', () => {
            const props = {
                ...defaultProps,
                meta: {
                    touched: true,
                    error: 'Required'
                }
            };
            const field = mount(<Input {...props} />).find('input');
            expect(field.hasClass('is-invalid')).toEqual(true);
        });
        test('should display error message', () => {
            const props = {
                ...defaultProps,
                meta: {
                    touched: true,
                    error: 'Required'
                }
            };
            const feedback = mount(<Input {...props} />).find('.invalid-feedback');
            expect(feedback.text()).toEqual(props.meta.error);
        })
    });
});