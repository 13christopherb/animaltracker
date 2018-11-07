import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import {MemoryRouter} from 'react-router-dom';

import {HeaderLoggedOut, HeaderLoggedIn} from "./headers";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mountWithRouter = node => mount(<MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>{
    node}</MemoryRouter>);

describe('<HeaderLoggedIn />', () => {
    describe('render()', () => {
        it('should render correctly', () => {
            const initialState = {
                animals: [],
                authentication: {user: 'user'}
            };

            const store = mockStore(initialState);
            const wrapper = mountWithRouter(<HeaderLoggedIn store={store}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        });
        it('should render the component when logged out', () => {
            const initialState = {
                animals: [],
                authentication: {}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<HeaderLoggedOut store={store}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});

describe('<HeaderLoggedOut />', () => {
    describe('render()', () => {
        it('should render the component when logged out', () => {
            const initialState = {
                animals: [],
                authentication: {}
            };

            const store = mockStore(initialState);
            const wrapper = shallow(<HeaderLoggedOut store={store}/>);

            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });
});

