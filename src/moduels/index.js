import { combineReducers } from 'redux';
import userReducer from "./user";
import projectReducer from "./project";
import authorityReducer from "./authority";

const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    authorityReducer
});

export default rootReducer;