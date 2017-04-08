import { combineReducers } from 'redux';

import {showNote} from './showNote';
import {hideOptional} from './hideOptional';

import { reducer as formReducer } from 'redux-form';


let rootReducer = combineReducers({
    showNote,
    hideOptional,
    form: formReducer
});

export {rootReducer};