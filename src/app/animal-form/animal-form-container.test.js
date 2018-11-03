import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk'
import {types} from "./ducks/types";
import AnimalFormContainer from "./animal-form-container";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    animals: [],
    animalForm: {fields: {}}
};

const store = mockStore(initialState);

describe('<AnimalFormContainer />', () => {
    describe('render()', () => {
        test('should render the component', () => {
            const wrapper = shallow(<AnimalFormContainer store={store}/>);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot()
        })
    });
});


import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import YourReduxFormComponent from 'path where it sitting in your project'
import { reduxForm } from 'redux-form'

jest.mock('react-dom')

const spy = jest.fn()
const initialStateValues = {/* initial state values that your form component expects */}
const Decorated = reduxForm({
    form: 'animal-form', onSubmit: { spy }
})(YourReduxFormComponent)

const formFieldValues = {/*Form field values*/}

it('YourReduxFormComponent renders correctly', () => {
    const store = createStore((state) => state, initialStateValues)
    const tree = renderer.create(
        <Provider store={store}>
            <Decorated
                {...formFieldValues}
            />
        </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})
