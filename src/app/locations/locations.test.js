import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Locations from './locations';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as testValues from '../../services/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);


const initialState = {
    authentication: {loggedIn: true},
    loading: {},
    animals: testValues.animals,
    locations: {
        locations: [{
            locationName: 'MBO',
            animals: [{
                name: 'Kirt',
                species: 'CSL',
                weight: 85,
                isGettingTubed: true,
                isGettingControlledMeds: false,
                id: 2,
                location: 'MBO'
            }]
        }]
    }
};

const store = mockStore(initialState)

describe('<Locations />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<Locations store={store}/>)
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    })
});