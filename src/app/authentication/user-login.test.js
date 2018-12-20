import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

import UserLogin from './user-login';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    animals: [],
    authentication: {}
}

const store = mockStore(initialState);

describe('<UserLogin />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<UserLogin store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Log in', () => {
        test('should prevent default browser submit event', () => {
            const wrapper = mount(<UserLogin store={store}/>);
            let prevented = false;
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                    prevented = true;
                }
            });
            expect(prevented).toBe(true);
        });
    });

});
