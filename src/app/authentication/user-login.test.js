import React from 'react';
import {shallow} from 'enzyme';
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
        describe('user inputs are echoed', () => {
            test('username text echoed', () => {
                const wrapper = shallow(<UserLogin store={store}/>);
                const component = wrapper.dive();
                component.find('input[name="username"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'username'
                    }
                });
                expect(component.find('input[name="username"]').props().value).toEqual('new text');
            });
            test('password text echoed', () => {
                const wrapper = shallow(<UserLogin store={store}/>);
                const component = wrapper.dive();
                component.find('input[name="password"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'password'
                    }
                });
                expect(component.find('input[name="password"]').props().value).toEqual('new text');
            });
        });

        test('should prevent default browser submit event', () => {
            const wrapper = shallow(<UserLogin store={store}/>);
            const component = wrapper.dive();
            let prevented = false;
            component.find('form').simulate('submit', {
                preventDefault: () => {
                    prevented = true;
                }
            });
            expect(prevented).toBe(true);
        });
    });

});
