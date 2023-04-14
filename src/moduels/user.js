import { createActions, handleActions } from 'redux-actions';

const userList = [];

export const GET_USER = 'user/GET_USER';
export const SEARCH_USER = 'user/SEARCH_USER';
export const CREATE_USER = 'user/CREATE_USER';
export const DELETE_USER = 'user/DELETE_USER';
export const UPDATE_USER = 'user/UPDATE_USER';


const action = createActions({
    [GET_USER]: () => { },
    [SEARCH_USER]: () => { },
    [CREATE_USER]: () => { },
    [DELETE_USER]: () => { },
    [UPDATE_USER]: () => { },
});

const userReducer = handleActions(
    {
        [GET_USER]: (state, { payload }) => payload,
        [SEARCH_USER]: (state, { payload }) => payload,
        [CREATE_USER]: (state, { payload }) => payload,
        [DELETE_USER]: (state, { payload }) => payload,
        [UPDATE_USER]: (state, { payload }) => payload,
    },
    userList
);

export default userReducer;


