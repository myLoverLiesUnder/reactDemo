import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducer';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware, loggerMiddleware));


export default store;