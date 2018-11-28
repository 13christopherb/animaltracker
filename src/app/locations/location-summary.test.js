import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LocationSummary from './location-summary';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as testValues from '../../services/TestValues'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

const initialState = {
    animals: testValues.animals,
    locations: {locations: {
            'MBO': location
        }}
};


describe('<LocationSummary />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<LocationSummary expanded={false}
                                                     expandSummary={jest.fn()}
                                                     animals={location.animals}
                                                     locationName={location.locationName}

            />);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});