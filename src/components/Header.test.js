import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

import {Header} from './Header';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('<Header />', () => {
    describe('render()', () => {
        test('should render the component when logged in', () => {
            const initialState = {
                animals: [],
                authentication: {user: 'user'}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<Header store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        });
        test('should render the component when logged out', () => {
            const initialState = {
                animals: [],
                authentication: {}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<Header store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Log in', () => {
        const initialState = {
            animals: [],
            authentication: {}
        };
        const store = mockStore(initialState);
        describe('user inputs are echoed', () => {
            test('username text echoed', () => {
                const wrapper = shallow(<Header store={store}/>);
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
                const wrapper = shallow(<Header store={store}/>);
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
            const wrapper = shallow(<Header store={store}/>);
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
