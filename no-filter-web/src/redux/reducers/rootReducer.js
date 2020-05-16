import { combineReducers } from 'redux';
import movieInfo from './movieReducer';

const rootReducer = combineReducers({
    movieInfo
});

export default rootReducer;