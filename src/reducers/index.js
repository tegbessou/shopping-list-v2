import { combineReducers } from 'redux';
//Import reducers
import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
    authentication
});

export default rootReducer;
