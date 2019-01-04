import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LocationCard from './location-card';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import * as testValues from "../../services/TestValues";

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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState)

let location = {
    locationName: 'MBO',
    animals: [{
        name: 'Kirt',
        species: 'CSL',
        weight: 85,
        isGettingTubed: true,
        isGettingControlledMeds: false,
        id: 2,
        location: 'MBO'
    }
    ]
};


describe('<LocationCard />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<LocationCard expanded={false}
                                                  expandSummary={jest.fn()}
                                                  animals={location.animals}
                                                  locationName={location.locationName}
                                                  store={store}

            />);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});