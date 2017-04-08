import { combineReducers } from 'redux';

import {showNote} from './showNote';
import {hideOptional} from './hideOptional';

let rootReducer = combineReducers({
    showNote,
    hideOptional

});

export {rootReducer};