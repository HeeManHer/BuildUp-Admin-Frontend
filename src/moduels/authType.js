import { createActions, handleActions } from 'redux-actions';

const authorityList = [{}];

export const GET_AUTH_TYPE = 'authority/GET_AUTH_TYPE';

const action = createActions({
    [GET_AUTH_TYPE]: () => { },
});


const typeReducer = handleActions(
    {
        [GET_AUTH_TYPE]: (state, { payload }) => payload,
    },
    authorityList
);

export default typeReducer;


