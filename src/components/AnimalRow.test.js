import React from 'react';
import {shallow} from 'enzyme';
import AnimalTitle from './AnimalRow';
import toJson from 'enzyme-to-json';

const animal = {
    name: 'Kirt',
    species: 'CSL',
    weight: 85,
    isGettingTubed: false,
    isGettingControlledMeds: true,
    id: 3

}

describe('<AnimalRow />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<AnimalTitle animal={animal}/>)

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
    describe('Buttons', () => {
        test('delete button calles deleteAnimal', () => {
            const mockDelete = jest.fn();
            const wrapper = shallow(
                <AnimalTitle deleteAnimal={mockDelete} animal={animal}/>
            );

            wrapper.find('#delete').simulate('click', { preventDefault() {} })
            expect(mockDelete).toHaveBeenCalled()
        });
    });
});