import React from 'react';
import {Select} from './';
import renderer from 'react-test-renderer'

describe('<Input />', () => {
    const defaultProps = {
        meta: {
            touched: false,
            error: null
        },
        id: 'location',
        name: 'location',
        title: 'Location',
        options: (['NRO', 'MBO', 'SLO'])
    };

    describe('render()', () => {
        test('should render the component normally', () => {
            const component = renderer.create(<Select {...defaultProps} />).toJSON();
            expect(component).toMatchSnapshot()
        });
    });
});