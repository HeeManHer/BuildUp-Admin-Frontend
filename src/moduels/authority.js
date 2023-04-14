import { createActions, handleActions } from 'redux-actions';

const authorityList = [{}];

export const GET_DASH_AUTHORITY = 'authority/GET_DASH_AUTHORITY';
export const GET_AUTHORITY = 'authority/GET_AUTHORITY';
export const SAVE_AUTHORITY = 'authority/SAVE_AUTHORITY';
export const CREATE_AUTHORITY = 'authority/CREATE_AUTHORITY';
export const DELETE_AUTHORITY = 'authority/DELETE_AUTHORITY';

const action = createActions({
    [GET_DASH_AUTHORITY]: () => { },
    [GET_AUTHORITY]: () => { },
    [SAVE_AUTHORITY]: () => { },
    [CREATE_AUTHORITY]: () => { },
    [DELETE_AUTHORITY]: () => { },
});


const authorityReducer = handleActions(
    {
        [GET_DASH_AUTHORITY]: (state, { payload }) => payload,
        [GET_AUTHORITY]: (state, { payload }) => payload,
        [SAVE_AUTHORITY]: (state, { payload }) => payload,
        [CREATE_AUTHORITY]: (state, { payload }) => payload,
        [DELETE_AUTHORITY]: (state, { payload }) => payload,
    },
    authorityList
);

export default authorityReducer;


