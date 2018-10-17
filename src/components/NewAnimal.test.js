import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import NewAnimal from './NewAnimal';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    animals: []
}

const store = mockStore(initialState)

describe('<NewAnimal />', () => {
    describe('render()', () => {
        test('should render the component', () => {
        const wrapper = shallow(<NewAnimal store={store} />)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
        })
    });
});
