import React from 'react';
import {shallow} from 'enzyme';
import {TransportCard} from "./transport-card";
import moment from 'moment';
import toJson from 'enzyme-to-json';

const transports = [
    {
        departs: 'MBO',
        arrives: 'NRO',
        meetTime: moment('2017-09-15 09:30:00')
    },
    {
        departs: 'SLO',
        arrives: 'MBO',
        meetTime: moment('2017-09-15 011:30:00')
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