import React from 'react';
import {shallow} from 'enzyme';
import {TransportRow} from "./transport-row";
import moment from 'moment';
import toJson from 'enzyme-to-json';

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<TransportRow />', () => {

    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<TransportRow transport={transport}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
    describe('Buttons', () => {
        test('delete button calls deleteAnimal', () => {
            const mockDelete = jest.fn();
            const wrapper = shallow(
                <TransportRow deleteTransport={mockDelete} transport={transport}/>
            );

            wrapper.find('#delete').simulate('click', { preventDefault() {} });
            expect(mockDelete).toHaveBeenCalled()
        });
    });
});