import { GET_AUTHORITY, UPDATE_AUTHORITY } from "../modules/authority";
import { GET_AUTH_TYPE } from "../modules/authType";

export function getAuthority(pageNo) {

    const url = `http://43.201.211.175:8888/api/v1/manage-auths?page=${pageNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_AUTHORITY, payload: result.data });
    }
}

export function getOneAuthority(authNo) {

    const url = `http://43.201.211.175:8888/api/v1/manage-auths/${authNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(res => res.json());

        dispatch({ type: GET_AUTHORITY, payload: result.data });
    }
}

export function getAuthType() {

    const url = 'http://43.201.211.175:8888/api/v1/manage-auths/types';

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

    const url = 'http://43.201.211.175:8888/api/v1/manage-auths';

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

    const url = `http://43.201.211.175:8888/api/v1/manage-auths`;

    return async function (dispatch, getState) {
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(authority)
        });
        window.location.reload();
    }
}

export async function deleteAuthorityList(authNo) {

    const url = "http://43.201.211.175:8888/api/v1/manage-auths/" + authNo;

    await fetch(url, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Accept": "*/*"
        }
    });

}