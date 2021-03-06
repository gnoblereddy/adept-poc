import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
const rReducer = combineReducers(rootReducer)

const store = createStore(rReducer, applyMiddleware(thunk))
window.store = store;
export default store;