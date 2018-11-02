import React from 'react';
import {shallow} from 'enzyme';
import {AnimalForm} from "./animal-form";
import toJson from 'enzyme-to-json';
import moment from 'moment';

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<AnimalForm />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const mockSubmit = jest.fn();
            const mockChange = jest.fn();
            const wrapper = shallow(<AnimalForm    handleSubmit={mockSubmit}
                                                   handleInputChange={mockChange}
                                                   location={''}
                                                   name={''}
                                                   species={''}
                                                   weight={''}
                                                   isGettingTubed={false}
                                                   isGettingControlledMeds={false}
                                                   />);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});