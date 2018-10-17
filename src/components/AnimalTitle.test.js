import React from 'react';
import {shallow} from 'enzyme';
import AnimalTitle from './AnimalTitle';
import toJson from 'enzyme-to-json';

const animal = {
    name: 'Kirt',
    species: 'CSL',
    weight: 85,
    isGettingTubed: false,
    isGettingControlledMeds: true,
    id: 3

}

describe('<AnimalTitle />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<AnimalTitle animal={animal}/>)

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});