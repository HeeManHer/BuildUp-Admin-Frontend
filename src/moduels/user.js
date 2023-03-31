import { createActions, handleActions } from 'redux-actions';

const userList = [];

export const SET_USER = 'user/SET_USER';
export const CHANGE_USER = 'user/CHANGE_USER';
export const SAVE_USER = 'user/SAVE_USER';

const action = createActions({
    [SET_USER]: () => { },
    [CHANGE_USER]: () => { },
    [SAVE_USER]: () => { },
});

const userReducer = handleActions(
    {
        [SET_USER]: (state, { payload }) => payload,
        [CHANGE_USER]: (state, { payload }) => state.map(user => user.name == payload.name ? { ...payload } : user),
        [SAVE_USER]: (state, { payload }) => [...state, payload]

    },
    userList
);

export default userReducer;


