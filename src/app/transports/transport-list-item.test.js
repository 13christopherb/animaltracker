import React from 'react';
import {shallow} from 'enzyme';
import {TransportListItem} from "./transport-list-item";
import moment from 'moment';
import toJson from 'enzyme-to-json';

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<TransportListItem />', () => {

    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<TransportListItem transport={transport}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});