import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import NewAnimal from './NewAnimal';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    animals: []
}

const store = mockStore(initialState)

describe('<NewAnimal />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<NewAnimal store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Creating new animals', () => {
        test('user text is echoed', () => {
            const wrapper = shallow(<NewAnimal store={store}/>);
            const component = wrapper.dive();
            component.find('input[name="name"]').simulate('change', {
                target: {
                    value: 'new text',
                    type: 'test',
                    name: 'name'
                }
            });
            expect(component.find('input[name="name"]').props().value).toEqual('new text');
        });

        test('should prevent default browser submit event', () => {
            const wrapper = shallow(<NewAnimal store={store}/>);
            const component = wrapper.dive();
            let prevented = false;
            component.find('form').simulate('submit', {
                preventDefault: () => {
                    prevented = true;
                }
            });
            expect(prevented).toBe(true);
        })
    })

});
