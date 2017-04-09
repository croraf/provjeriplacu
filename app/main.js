//import styles from './style1.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {rootReducer} from './reducers/rootReducer';
import {Provider} from 'react-redux';

import { createStore } from 'redux';


let store = createStore(rootReducer);

/*let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
    window.console.log('dispatching', action);
    let result = next(action);
    window.console.log('next state', store.getState());
    return result;
};*/


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
