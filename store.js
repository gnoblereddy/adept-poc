import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
console.log('store-------1---', store);
const rReducer = combineReducers(rootReducer)

const store = createStore(rReducer, applyMiddleware(thunk))
console.log('store-------2---', store);
window.store = store;
export default store;