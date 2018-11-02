import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import {types} from "./ducks/types";
import AnimalFormContainer from "./animal-form-container";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    animals: [],
    animalForm: {fields: {}}
};

const store = mockStore(initialState);

describe('<AnimalFormContainer />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<AnimalFormContainer store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Creating new animalsReducer', () => {
        describe('user inputs are echoed', () => {
            test('name text echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('input[name="name"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'name'
                    }
                });
                expect(wrapper.find('input[name="name"]').props().value).toEqual('new text');
            });
            test('weight text echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('input[name="weight"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'weight'
                    }
                });
                expect(wrapper.find('input[name="weight"]').props().value).toEqual('new text');
            });
            test('location value echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('select[name="location"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'location'
                    }
                });
                expect(wrapper.find('select[name="location"]').props().value).toEqual('new text');
            });
            test('species value echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('select[name="species"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'species'
                    }
                });
                expect(wrapper.find('select[name="species"]').props().value).toEqual('new text');
            });
            test('isGettingTubed value echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('input[name="isGettingTubed"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'isGettingTubed'
                    }
                });
                expect(wrapper.find('input[name="isGettingTubed"]').props().value).toEqual('new text');
            });
            test('isGettingControlledMeds value echoed', () => {
                const wrapper = mount(<AnimalFormContainer store={store}/>);
                wrapper.find('input[name="isGettingControlledMeds"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'isGettingControlledMeds'
                    }
                });
                expect(wrapper.find('input[name="isGettingControlledMeds"]').props().value).toEqual('new text');
            });
        });

        test('should prevent default browser submit event', () => {
            const wrapper = mount(<AnimalFormContainer store={store}/>);
            let prevented = false;
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                    prevented = true;
                }
            });
            expect(prevented).toBe(true);
        });

        test('should fire ADD_ANIMAL action', () => {
            const wrapper = mount(<AnimalFormContainer store={store}/>);
            const expectedActions = [
                {type: types.ADD_ANIMAL_REQUEST}
            ];
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                    return false;
                }
            });
            expect(store.getActions()[0]['type']).toEqual(expectedActions[0]['type']);
        })
    });

});
