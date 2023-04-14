import { createActions, handleActions } from 'redux-actions';

const backlog = [];

export const GET_DASH_BACKLOG = 'authority/GET_DASH_BACKLOG';

const action = createActions({
    [GET_DASH_BACKLOG]: () => { },
});


const backlogReducer = handleActions(
    {
        [GET_DASH_BACKLOG]: (state, { payload }) => payload,
    },
    backlog
);

export default backlogReducer;


