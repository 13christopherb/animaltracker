import React from 'react';
import {shallow, mount} from 'enzyme';
import Location from './location';
import toJson from 'enzyme-to-json';

const animals = [{
    name: 'Nymeria',
    weight: 33,
    species: 'Dire Wolf',
    location: 'MBO'
},
    {
        name: 'Lady',
        weight: 33,
        species: 'Dire Wolf',
        location: 'MBO'
    }

];

describe('<Location />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<Location animals={animals} location="MBO"/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});