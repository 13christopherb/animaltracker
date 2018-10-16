import * as Actions from './AnimalActions';
import configureMockStore from 'redux-mock-store'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const animal = {
    name: 'Edginald',
    species: 'CSL',
    weight: 14,
    isGettingTubed: false,
    isGettingControlledMeds: true
}

describe('actions', () => {
    it('should create an action to add an animal', () => {
        const expectedAction = {
            type: Actions.POST_ANIMAL_SUCCESS,
            animal: animal
        }
        expect(Actions.addAnimal(animal)).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('', () => {
        fetchMock.getOnce('http://localhost:5000/animals', {body: {animals: [animal]},
            headers: {'content-type': 'application/json'}})

        const expectedActions = [
            {type: Actions.GET_ANIMALS_SUCCESS, animals: [animal]}
        ]

        const store = mockStore({ animals: [] })
        return store.dispatch(Actions.getAnimals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})