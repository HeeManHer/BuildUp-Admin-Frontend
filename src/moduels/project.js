import { createActions, handleActions } from 'redux-actions';

const projectList = [];

export const SET_PROJECT = 'user/SET_PROJECT';

const action = createActions({
    [SET_PROJECT]: () => { }
});


const projectReducer = handleActions(
    {
        [SET_PROJECT]: (state, { payload }) => payload
    },
    projectList
);

export default projectReducer;


