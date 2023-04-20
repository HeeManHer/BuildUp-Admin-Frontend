import { combineReducers } from 'redux';
import userReducer from "./user";
import projectReducer from "./project";
import authorityReducer from "./authority";
import backlogReducer from "./backlog";
import issueReducer from "./issue";
import sprintReducer from "./sprint";
import typeReducer from "./authType";
import roleReducer from './authRole';
import adminReducer from './admin';

const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    authorityReducer,
    typeReducer,
    roleReducer,
    backlogReducer,
    issueReducer,
    sprintReducer,
    adminReducer
});

export default rootReducer;