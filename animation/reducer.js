import { combineReducers } from 'redux';
import frameReducer from './Frame/reducer.js';

export default combineReducers({
  frame: frameReducer
});