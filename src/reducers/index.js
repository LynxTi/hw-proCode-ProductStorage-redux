import { combineReducers, createStore } from "redux";

import productsReducer from './storage';

const rootReducer = combineReducers( {
    userProducts: productsReducer
});

const store = createStore(rootReducer);
export default store;