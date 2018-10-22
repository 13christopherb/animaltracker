import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as actions from '../actions/AnimalActions';
import * as userConstants from '../constants/user.constants';
import {userActions} from "../actions/UserActions";
import NewUser from './NewUser';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    animals: []
}

const store = mockStore(initialState)

describe('<NewUser />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<NewUser store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Register User', () => {
        describe('user inputs are echoed', () => {
            test('username text echoed', () => {
                const wrapper = shallow(<NewUser store={store}/>);
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
                const wrapper = shallow(<NewUser store={store}/>);
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
            const wrapper = shallow(<NewUser store={store}/>);
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
