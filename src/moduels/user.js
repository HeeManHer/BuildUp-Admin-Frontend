import { createActions, handleActions } from 'redux-actions';

const userList = [];

export const GET_USER_LIST = 'user/GET_USER_LIST';
export const GET_USER_DETAIL = 'user/GET_USER_DETAIL';
export const SEARCH_USER = 'user/SEARCH_USER';


const action = createActions({
    [GET_USER_LIST]: () => { },
    [GET_USER_DETAIL]: () => { },
    [SEARCH_USER]: () => { },
});

const userReducer = handleActions(
    {
        [GET_USER_LIST]: (state, { payload }) => payload,
        [GET_USER_DETAIL]: (state, { payload }) => payload,
        [SEARCH_USER]: (state, { payload }) => payload,
    },
    userList
);

export default userReducer;


