import { GET_AUTHORITY, SAVE_AUTHORITY } from "../moduels/authority";
import { GET_AUTH_TYPE } from "../moduels/authType";
import { GET_AUTH_ROLE } from "../moduels/authRole";

export function getAuthority() {

    const url = 'http://localhost:8888/api/v1/manage-auths';

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(res => res.json())
            .then(res => res.data);

        dispatch({ type: GET_AUTHORITY, payload: result });
    }
}

export function getOneAuthority(authNo) {

    const url = `http://localhost:8888/api/v1/manage-auths/${authNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(res => res.json())
            .then(res => res.data);

        dispatch({ type: GET_AUTHORITY, payload: result });
    }
}



export function getAuthRole() {

    const url = 'http://localhost:8888/api/v1/manage-auths/roles';

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(res => res.json())
            .then(res => res.data);

        dispatch({ type: GET_AUTH_ROLE, payload: result });
    }
}
export function getAuthType() {

    const url = 'http://localhost:8888/api/v1/manage-auths/types';

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(res => res.json())
            .then(res => res.data);

        dispatch({ type: GET_AUTH_TYPE, payload: result });
    }
}

export function registAuthority(authority) {

    const url = 'http://localhost:8888/api/v1/manage-auths';

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(authority)
        });
    }
}

export function updateAuthority(authority) {

    const url = `http://localhost:8888/api/v1/manage-auths`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(authority)
        });
    }
}

export async function deleteAuthorityList(authNo) {

    const url = "http://localhost:8888/api/v1/manage-auths/" + authNo;

    await fetch(url, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Accept": "*/*"
        }
    });

}
