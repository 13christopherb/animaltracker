import React from 'react';
import {shallow} from 'enzyme';
import TransportListItem from "./transport-list-item";
import moment from 'moment';
import toJson from 'enzyme-to-json';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const transport = {
    departs: 'MBO',
    arrives: 'NRO',
    meetTime: moment('2017-09-15 09:30:00') //Arbitrary time
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<TransportListItem />', () => {

    describe('render()', () => {
        const store = mockStore()

        test('should render the component', () => {
            const wrapper = shallow(<TransportListItem store={store} transport={transport}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});