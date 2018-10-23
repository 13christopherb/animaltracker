import { combineReducers } from 'redux';
import { animals } from './animals.reducer';
import { authentication } from './authentication.reducer';
import { transports } from './transports.reducer';

export default combineReducers({
    animals,
    authentication,
    transports
});