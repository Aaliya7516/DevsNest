import inputReducer from "./inputReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ inputReducer });

export default rootReducer;