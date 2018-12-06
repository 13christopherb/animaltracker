import React from 'react';
import {shallow} from 'enzyme';
import {TransportModalForm} from "./transport-modal-form";
import toJson from 'enzyme-to-json';
import moment from 'moment';

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

describe('<TransportModalForm />', () => {
    const mockSubmit = jest.fn();
    const mockChange = jest.fn();
    const hideModal = jest.fn();
    const defaultTime = moment('2017-09-15 09:30:00') //Arbitrary time

    beforeEach(() => {
        hideModal.mockReset();
    });
    describe('render()', () => {
        it('should render the component', () => {
            const wrapper = shallow(<TransportModalForm handleSubmit={mockSubmit}
                                                        handleChange={mockChange}
                                                        hideModal={hideModal}
                                                        id="MBO"
                                                        defaultTime={defaultTime}/>);
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
    describe('submit', () => {
        it('should close on form submit', () => {
            const wrapper = shallow(<TransportModalForm handleSubmit={mockSubmit}
                                                        handleChange={mockChange}
                                                        hideModal={hideModal}
                                                        id="MBO"
                                                        defaultTime={defaultTime}/>);
            wrapper.find('button[type="submit"]').simulate('click');
            expect(hideModal.mock.calls.length).toBe(1);
        });
        it('should disable button on form errors', () => {
            const wrapper = shallow(<TransportModalForm handleSubmit={mockSubmit}
                                                        handleChange={mockChange}
                                                        hideModal={hideModal}
                                                        id="MBO"
                                                        defaultTime={defaultTime}
                                                        pristine={false}
                                                        errors={{departs: 'Error'}}/>);
            expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(true);
        });
    })
});