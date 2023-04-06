import { createActions, handleActions } from 'redux-actions';

const projectList = [];

export const SET_PROJECT = 'user/SET_PROJECT';
export const SEARCH_PROJECT = 'user/SEARCH_PROJECT';

const action = createActions({
    [SET_PROJECT]: () => { },
    [SEARCH_PROJECT]: () => { },
});


const projectReducer = handleActions(
    {
        [SET_PROJECT]: (state, { payload }) => payload,
        [SEARCH_PROJECT]: (state, { payload }) => {
            const result1 = state.filter(project => project.teamName === payload);
            const result2 = state.filter(project => project.projectName === payload);
            const result3 = state.filter(project => project.manager === payload);
            const result4 = state.filter(project => project.startDate === payload);

            return [...result1, ...result2, ...result3, ...result4];
        }
    },
    projectList
);

export default projectReducer;


