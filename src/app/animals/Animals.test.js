import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Animals from './AnimalsTable';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import * as testValues from '../../services/TestValues'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



const initialState = {
    animals: testValues.animals
}

const store = mockStore(initialState)

describe('<Animals />', () => {
    describe('render()', () => {
        test('should render the component', () => {
        const wrapper = shallow(<Animals store={store} animals={testValues.animals} />)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
        })
    })
});