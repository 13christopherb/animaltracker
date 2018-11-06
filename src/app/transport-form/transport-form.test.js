import React from 'react';
import {shallow} from 'enzyme';
import {TransportForm} from "./transport-form";
import toJson from 'enzyme-to-json';
import moment from 'moment';

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<TransportForm />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const mockSubmit = jest.fn();
            const mockChange = jest.fn();
            const mockDateTimeChange = jest.fn();
            const defaultTime = moment('2017-09-15 09:30:00') //Arbitrary time
            const wrapper = shallow(<TransportForm handleSubmit={mockSubmit}
                                                   handleInputChange={mockChange}
                                                   handleDateTimeChange={mockDateTimeChange}
                                                   arrives={transport.arrives}
                                                   departs={transport.departs}
                                                   meetTime={transport.meetTime}
                                                   defaultTime={defaultTime}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});