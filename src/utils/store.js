import {createStore, applyMiddleware} from 'redux';
import formValidationMiddleware from '../middleware/form-validation'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        formValidationMiddleware,
        thunkMiddleware,
    )
);