import React from 'react';
import {shallow, mount} from 'enzyme';
import {TransportForm} from "./transport-form";
import toJson from 'enzyme-to-json';
import moment from 'moment';
import {reduxForm} from "redux-form";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();

const onSubmit = jest.fn();
const Decorated = reduxForm({
    form: 'animal-forms', onSubmit: {onSubmit}
})(TransportForm);

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
            const store = mockStore();
            const props = {
                pristine: false,
                valid: false,
            };
            const wrapper = mount(<Provider store={store}>
                <Decorated
                    {...props}
                />
            </Provider>);
            expect(wrapper.find('button[type="submit"]').props().disabled).toEqual(true);
        });
    })
});