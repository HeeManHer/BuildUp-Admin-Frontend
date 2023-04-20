import { createActions, handleActions } from 'redux-actions';

const authorityList = [{}];

export const GET_DASH_ROLE = 'authority/GET_DASH_ROLE';
export const GET_AUTH_ROLE = 'authority/GET_ROLE';

const action = createActions({
    [GET_DASH_ROLE]: () => { },
    [GET_AUTH_ROLE]: () => { },
});


const roleReducer = handleActions(
    {
        [GET_DASH_ROLE]: (state, { payload }) => payload,
        [GET_AUTH_ROLE]: (state, { payload }) => payload,
    },
    authorityList
);

export default roleReducer;


