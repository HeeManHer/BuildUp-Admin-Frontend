import { createActions, handleActions } from 'redux-actions';

const sprint = [];

export const GET_DASH_SPRINT = 'authority/GET_DASH_SPRINT';

const action = createActions({
    [GET_DASH_SPRINT]: () => { },
});


const sprintReducer = handleActions(
    {
        [GET_DASH_SPRINT]: (state, { payload }) => payload,
    },
    sprint
);

export default sprintReducer;


