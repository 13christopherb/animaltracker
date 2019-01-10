import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import AnimalListItem from './animal-list-item';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import {Provider} from 'react-redux';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

const initialState = {
    authentication: {loggedIn: true},
    loading: {},
    locations: {
        locations: [{
            locationName: 'MBO',
            animals: [{
                name: 'Kirt',
                species: 'CSL',
                weight: 85,
                isGettingTubed: true,
                isGettingControlledMeds: false,
                id: 2,
                location: 'MBO'
            }]
        }]
    }
};

library.add(faEllipsisH);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const animal = {
    name: 'Kirt',
    species: 'CSL',
    weight: 85,
    isGettingTubed: true,
    isGettingControlledMeds: false,
    id: 2,
    location: 'MBO'
};

describe('<AnimalListItem />', () => {

    let handleSubmit;
    let wrapper;
    let store;

    describe('render()', () => {
        beforeEach(() => {
            handleSubmit = jest.fn();
            store = mockStore(initialState);
            const props = {
                animal,
                handleSubmit,
            };
            wrapper = mount(
                <Provider store={store}>
                    <AnimalListItem {...props} />
                </Provider>
            )
        });
        it('should render the component', () => {
            expect(toJson(wrapper)).toMatchSnapshot()
        })
    });

    describe('deleting', () => {
        beforeEach(() => {
            const deletingState = {
                ...initialState,
                loading: {
                    DELETE_ANIMAL: true,
                    animal: animal,
                }
            };
            handleSubmit = jest.fn();
            store = mockStore(deletingState);
            const props = {
                animal,
                handleSubmit,
            };
            wrapper = mount(
                <Provider store={store}>
                    <AnimalListItem {...props} />
                </Provider>
            )
        });
        it('should fade while deleting', () => {
            expect(wrapper.find('.list-group-item').first().hasClass('disabled')).toEqual(true);
        })
    })
});