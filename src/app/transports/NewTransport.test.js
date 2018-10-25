import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import moment from 'moment';
import {NewTransport} from "./NewTransport";
import {types} from "./ducks/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    transports: []
};


const store = mockStore(initialState);

describe('<NewTransport />', () => {
    describe('render()', () => {
        let props = {
            currentTime: moment('2017-09-15 09:30:00')
        };
        test('should render the component', () => {
            const wrapper = shallow(<NewTransport {...props} store={store}/>);
            const component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot()
        })
    });

    describe('Creating new transportsReducer', () => {
        let props = {
            currentTime: moment('2017-09-15 09:30:00')
        };
        describe('user inputs are echoed', () => {
            test('departs select is echoed', () => {
                const wrapper = shallow(<NewTransport {...props} store={store}/>);
                const component = wrapper.dive();
                component.find('select[name="departs"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'departs'
                    }
                });
                expect(component.find('select[name="departs"]').props().value).toEqual('new text');
            });
            test('arrives select is echoed', () => {
                const wrapper = shallow(<NewTransport {...props} store={store}/>);
                const component = wrapper.dive();
                component.find('select[name="arrives"]').simulate('change', {
                    target: {
                        value: 'new text',
                        type: 'test',
                        name: 'arrives'
                    }
                });
                expect(component.find('select[name="arrives"]').props().value).toEqual('new text');
            });
        });

        test('should prevent default browser submit event', () => {
            const wrapper = shallow(<NewTransport {...props} store={store}/>);
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
            const wrapper = shallow(<NewTransport {...props} store={store}/>);
            const component = wrapper.dive();
            const expectedActions = [
                {type: types.ADD_TRANSPORT_REQUEST}
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
