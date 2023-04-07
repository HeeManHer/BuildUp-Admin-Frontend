import { GET_AUTHORITY, SET_AUTHORITY, CREATE_AUTHORITY, SAVE_AUTHORITY, DELETE_AUTHORITY } from "../moduels/authority";
import AuthorityList from '../data/AuthorityList.json';



export function getAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: GET_AUTHORITY });
    }
}
export function setAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_AUTHORITY, payload: AuthorityList });
    }
}

export function saveAuthorityList(authority) {

    return function (dispatch, getState) {
        dispatch({ type: SAVE_AUTHORITY, payload: authority });
    }
}

export function createAuthorityList(no) {


    const newAuthority = {
        no: no,
        name: "",
        auth: [
            {
                type: "프로젝트",
                state: [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                type: "백로그",
                state: [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                type: "스프린트",
                state: [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                type: "이슈",
                state: [
                    "",
                    "",
                    "",
                    ""
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
