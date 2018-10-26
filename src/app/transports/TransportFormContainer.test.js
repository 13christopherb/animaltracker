import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import moment from 'moment';
import TransportFormContainer from "./TransportFormContainer";
import {types} from "./ducks/Types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    transports: []
};


const store = mockStore(initialState);

describe('<TransportFormContainer />', () => {
    describe('render()', () => {
        let props = {
            currentTime: moment('2017-09-15 09:30:00')
        };
        test('should render the component', () => {
            const wrapper = shallow(<TransportFormContainer {...props} store={store}/>);
            const component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Creating new transport', () => {
        let props = {
            currentTime: moment('2017-09-15 09:30:00')
        };
        describe('user inputs are echoed', () => {
            test('departs select is echoed', () => {
                const wrapper = mount(<TransportFormContainer {...props} store={store}/>)
                wrapper.find('select[name="departs"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'departs'
                    }
                });
                expect(wrapper.find('select[name="departs"]').props().value).toEqual('new text');
            });
            test('arrives select is echoed', () => {
                const wrapper = mount(<TransportFormContainer {...props} store={store}/>);
                wrapper.find('select[name="arrives"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'arrives'
                    }
                });
                expect(wrapper.find('select[name="arrives"]').props().value).toEqual('new text');
            });
        });

        test('should prevent default browser submit event', () => {
            const wrapper = mount(<TransportFormContainer {...props} store={store}/>);
            let prevented = false;
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {
                    prevented = true;
                }
            });
            expect(prevented).toBe(true);
        });

        test('should fire ADD_ANIMAL action', () => {
            const wrapper = mount(<TransportFormContainer {...props} store={store}/>);
            const expectedActions = [
                {type: types.ADD_TRANSPORT_REQUEST}
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
