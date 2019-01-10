import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Animals from './animals-table';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

const animal = {
    name: 'Ghost',
    weight: 42,
    species: 'Dire Wolf',
    location: 'Castle Black',
};

const initialState = {
    animals: [animal]
}

const store = mockStore(initialState);

describe('<Animals />', () => {
    describe('render()', () => {
        test('should render the component', () => {
        const wrapper = shallow(<Animals store={store} animals={[animal]} />)
        //const component = wrapper.dive()

        expect(toJson(wrapper)).toMatchSnapshot()
        })
    })
});