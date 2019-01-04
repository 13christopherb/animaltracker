import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import {UserLogin} from './user-login';

const handleSubmit = jest.fn();
const handleChange = jest.fn();
const onSubmit = jest.fn();

describe('<UserLogin />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<UserLogin handleSubmit={handleSubmit}
                                               handleChange={handleChange}
                                               onSubmit={onSubmit}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });
});
