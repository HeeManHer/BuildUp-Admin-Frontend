import { createActions, handleActions } from 'redux-actions';

const issue = [];

export const GET_DASH_ISSUE = 'authority/GET_DASH_ISSUE';

const action = createActions({
    [GET_DASH_ISSUE]: () => { },
});


const issueReducer = handleActions(
    {
        [GET_DASH_ISSUE]: (state, { payload }) => payload,
    },
    issue
);

export default issueReducer;


