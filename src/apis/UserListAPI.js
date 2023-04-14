import { GET_USER, CREATE_USER, UPDATE_USER, DELETE_USER, SEARCH_USER } from "../moduels/user";


export function getUserList() {

    const requestUrl = "http://localhost:8888/api/v1/manage-users";

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_USER, payload: result.data });
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

export function createUserList(user) {

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
}

export function updateUserAuthority(userNoList) {
    console.log(JSON.stringify(userNoList));

    const requestUrl = "http://localhost:8888/api/v1/manage-users";

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(userNoList)
        })
    }
}
