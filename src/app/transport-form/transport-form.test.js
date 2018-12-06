import React from 'react';
import {shallow} from 'enzyme';
import {TransportForm} from "./transport-form";
import toJson from 'enzyme-to-json';
import moment from 'moment';
import {TransportModalForm} from "./transport-modal-form";

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<TransportForm />', () => {
    const mockSubmit = jest.fn();
    const mockChange = jest.fn();
    const defaultTime = moment('2017-09-15 09:30:00') //Arbitrary time

    describe('render()', () => {
        it('should render the component', () => {
            const wrapper = shallow(<TransportForm handleSubmit={mockSubmit}
                                                   handleChange={mockChange}
                                                   defaultTime={defaultTime}/>);
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
    describe('submit', () => {
        it('should disable button on form errors', () => {
            const wrapper = shallow(<TransportForm handleSubmit={mockSubmit}
                                                        handleChange={mockChange}
                                                        id="MBO"
                                                        defaultTime={defaultTime}
                                                        pristine={false}
                                                        errors={{departs: 'Error'}}/>);
            expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(true);
        });
    })
});