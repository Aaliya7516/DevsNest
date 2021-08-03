import inputReducer from "./inputReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter: inputReducer });

export default rootReducer;