import { combineReducers } from 'redux';
import catDetails_reducer from './catDetails_reducer';

export default combineReducers({
    catDetails: catDetails_reducer
});