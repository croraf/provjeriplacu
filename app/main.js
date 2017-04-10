//import styles from './style1.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {rootReducer} from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunkMidleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';


let store = createStore(rootReducer, applyMiddleware(thunkMidleware));

let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    window.console.log('dispatching', action);
    let result = next(action);
    window.console.log('next state', store.getState());
    return result;
};


ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
);
