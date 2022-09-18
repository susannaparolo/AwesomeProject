import { createStore, combineReducers } from 'redux';
import userReducer from './reducer';

const reducer = userReducer();

export const Store = createStore(rootReducer);