import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import NewAnimal from './NewAnimal';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as actions from '../actions/AnimalActions';

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
        describe('user inputs are echoed', () => {
            test('name text echoed', () => {
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
            test('weight text echoed', () => {
                const wrapper = shallow(<NewAnimal store={store}/>);
                const component = wrapper.dive();
                component.find('input[name="weight"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'weight'
                    }
                });
                expect(component.find('input[name="weight"]').props().value).toEqual('new text');
            });
            test('location value echoed', () => {
                const wrapper = shallow(<NewAnimal store={store}/>);
                const component = wrapper.dive();
                component.find('select[name="location"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'location'
                    }
                });
                expect(component.find('select[name="location"]').props().value).toEqual('new text');
            });
            test('species value echoed', () => {
                const wrapper = shallow(<NewAnimal store={store}/>);
                const component = wrapper.dive();
                component.find('select[name="species"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'species'
                    }
                });
                expect(component.find('select[name="species"]').props().value).toEqual('new text');
            });
            test('isGettingTubed value echoed', () => {
                const wrapper = shallow(<NewAnimal store={store}/>);
                const component = wrapper.dive();
                component.find('input[name="isGettingTubed"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'isGettingTubed'
                    }
                });
                expect(component.find('input[name="isGettingTubed"]').props().value).toEqual('new text');
            });
            test('isGettingControlledMeds value echoed', () => {
                const wrapper = shallow(<NewAnimal store={store}/>);
                const component = wrapper.dive();
                component.find('input[name="isGettingControlledMeds"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'isGettingControlledMeds'
                    }
                });
                expect(component.find('input[name="isGettingControlledMeds"]').props().value).toEqual('new text');
            });
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
        });

        test('should fire ADD_ANIMAL action', () => {
            const wrapper = shallow(<NewAnimal store={store}/>);
            const component = wrapper.dive();
            const expectedActions = [
                {type: actions.ADD_ANIMAL}
            ];
            component.find('form').simulate('submit', {
                preventDefault: () => {
                    return false;
                }
            });
            expect(store.getActions()[0]['type']).toEqual(expectedActions[0]['type']);
        })
    });

});
