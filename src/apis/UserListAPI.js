import { GET_USER_LIST, SEARCH_USER, GET_USER_DETAIL } from "../moduels/user";


export function getUserList(pageNo, search) {

    const requestUrl = `http://localhost:8888/api/v1/manage-users?page=${pageNo}&search=${search}`;

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json())

        dispatch({ type: GET_USER_LIST, payload: result.data });
    }
}

export function getUserInfo(userNo) {

    const requestUrl = "http://localhost:8888/api/v1/manage-users/" + userNo;

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_USER_DETAIL, payload: result });
    }
}

export function searchUserList(searchValue) {
    const url = "http://localhost:8888/api/v1/manage-users?search=" + searchValue;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: SEARCH_USER, payload: result.data });
    }
}

export function registUser(user) {

    const requestUrl = "http://localhost:8888/api/v1/manage-users";

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(user)
        })
    }
}

export async function deleteUserList(user) {
    for (const userNo in user) {
        const url = "http://localhost:8888/api/v1/manage-users/" + user[userNo];

        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        });
    }

    window.location.reload();
}

export function modifyUserInfo(user, userNo) {

    const requestUrl = "http://localhost:8888/api/v1/manage-users/" + userNo;

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(user)
        })
    }
}
