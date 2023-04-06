import { createActions, handleActions } from 'redux-actions';

const authorityList = [];

export const SET_AUTHORITY = 'authority/SET_AUTHORUTY';
export const SAVE_AUTHORITY = 'authority/SAVE_AUTHORITY';
export const CREATE_AUTHORITY = 'authority/CREATE_AUTHORITY';
export const DELETE_AUTHORITY = 'authority/DELETE_AUTHORITY';

const action = createActions({
    [SET_AUTHORITY]: () => { },
    [SAVE_AUTHORITY]: () => { },
    [CREATE_AUTHORITY]: () => { },
    [DELETE_AUTHORITY]: () => { },
});


const authorityReducer = handleActions(
    {
        [SET_AUTHORITY]: (state, { payload }) => payload,
        [SAVE_AUTHORITY]: (state, { payload }) => state,
        [CREATE_AUTHORITY]: (state, { payload }) => {

            console.log(payload);
            return [...state, payload]
        },
        [DELETE_AUTHORITY]: (state, { payload }) => {
            for (let k = 0; k < payload.length; k++) {
                state = state.filter(authority => authority.no != payload[k]);
            }

            return state;
        },
    },
    authorityList
);

export default authorityReducer;


