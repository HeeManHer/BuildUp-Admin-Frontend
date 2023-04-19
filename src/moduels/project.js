import { createActions, handleActions } from 'redux-actions';

const projectList = {
    data: [],
    pageInfo: {

    }
};

export const GET_DASH_PROJECT = 'user/GET_DASH_PROJECT';
export const GET_PROJECT = 'user/SET_PROJECT';
export const SEARCH_PROJECT = 'user/SEARCH_PROJECT';

const action = createActions({
    [GET_DASH_PROJECT]: () => { },
    [GET_PROJECT]: () => { },
    [SEARCH_PROJECT]: () => { },
});


const projectReducer = handleActions(
    {
        [GET_DASH_PROJECT]: (state, { payload }) => payload,
        [GET_PROJECT]: (state, { payload }) => payload,
        [SEARCH_PROJECT]: (state, { payload }) => payload
    },
    projectList
);

export default projectReducer;


