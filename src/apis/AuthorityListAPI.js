import { SET_AUTHORITY, CREATE_AUTHORITY, SAVE_AUTHORITY, DELETE_AUTHORITY } from "../moduels/authority";
import AuthorityList from '../data/AuthorityList.json';

export function setAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_AUTHORITY, payload: AuthorityList });
    }
}

export function saveAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: SAVE_AUTHORITY, payload: AuthorityList });
    }
}

export function createAuthorityList(no) {


    const newAuthority = {
        no: 1,
        name: "PM",
        auth: [
            {
                type: "프로젝트",
                state: [
                    "c",
                    "r",
                    "u",
                    "d"
                ]
            },
            {
                type: "백로그",
                state: [
                    "c",
                    "r",
                    "u",
                    "d"
                ]
            },
            {
                type: "스프린트",
                state: [
                    "c",
                    "r",
                    "u",
                    "d"
                ]
            },
            {
                type: "이슈",
                state: [
                    "c",
                    "r",
                    "u",
                    "d"
                ]
            }
        ]
    }

    return function (dispatch, getState) {
        dispatch({ type: CREATE_AUTHORITY, payload: newAuthority });
    }
}

export function deleteAuthorityList(authority) {

    return function (dispatch, getState) {
        dispatch({ type: DELETE_AUTHORITY, payload: authority });
    }
}
