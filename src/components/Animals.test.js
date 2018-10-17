import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Animals from './Animals';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
    animals: [
        {
            name: 'Edginald',
            species: 'CSL',
            weight: 14,
            isGettingTubed: true,
            isGettingControlledMeds: false,
            id: 1
        },
        {
            name: 'Pipester',
            species: 'NFS',
            weight: 8,
            isGettingTubed: true,
            isGettingControlledMeds: false,
            id: 2
        },
        {
            name: 'Kirt',
            species: 'CSL',
            weight: 85,
            isGettingTubed: false,
            isGettingControlledMeds: true,
            id: 3
        }

    ]
}

const store = mockStore(initialState)

describe('<Animals />', () => {
    describe('render()', () => {
        test('should render the component', () => {
        const wrapper = shallow(<Animals store={store} />)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
        })
    })
});