import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import {MemoryRouter} from 'react-router-dom';

import Header from './header';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mountWithRouter = node => mount(<MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>{
    node}</MemoryRouter>);


describe('<Headers />', () => {
    describe('render()', () => {
        test('should render the component when logged in', () => {
            const initialState = {
                animals: [],
                authentication: {user: 'user'}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<Header store={store}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        });
        test('should render the component when logged out', () => {
            const initialState = {
                animals: [],
                authentication: {}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<Header store={store}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});
