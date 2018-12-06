import React from 'react';
import {shallow} from 'enzyme';
import {TransportCard} from "./transport-card";
import moment from 'moment';
import toJson from 'enzyme-to-json';

const transports = [
    {
        id: 0,
        departs: 'MBO',
        arrives: 'NRO',
        meetTime: moment('2010-06-09T15:20:00-07:00')
    },
    {
        id: 1,
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: moment('2010-06-09T15:20:00-07:00')
    }
];

describe('<TransportCard />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<TransportCard transports={transports}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});