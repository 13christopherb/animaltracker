import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Location from './location';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as testValues from '../../services/TestValues'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

location = {
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

const store = mockStore(initialState);



describe('<Location />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<Location store={store} location="MBO"/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});