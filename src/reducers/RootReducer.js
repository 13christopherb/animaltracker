import { combineReducers } from 'redux';
import { animals } from './animals.reducer';
import { authentication } from './authentication.reducer';

export default combineReducers({
    animals,
    authentication
});