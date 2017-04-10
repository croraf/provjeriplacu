//import styles from './style1.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {rootReducer} from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunkMidleware from 'redux-thunk';
/*import logger from 'redux-logger';*/

import { createStore, applyMiddleware } from 'redux';


let store = createStore(rootReducer, applyMiddleware(thunkMidleware/*, logger*/));


ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
);
