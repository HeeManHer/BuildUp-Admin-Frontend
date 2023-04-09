import { GET_USER, SET_USER, CHANGE_USER, SAVE_USER, DELETE_USER, SEARCH_USER } from "../moduels/user";
import User from '../data/User.json';

export function getUserList() {

    const requestUrl = "http://localhost:8888/api/v1/users";

    return async function (dispatch, getState) {
        const result = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());


        dispatch({ type: SET_USER, payload: result });
    }
}

export function setUserList() {

    const requestUrl = "http://localhost:8888/api/v1/users";

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        console.log(result);

        dispatch({ type: SET_USER, payload: result });
    }
}

export function changeUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: CHANGE_USER, payload: user });
    }
}

export function saveUserList(user) {

    const requestUrl = "http://localhost:8888/api/v1/users";

    return async function (dispatch, getState) {

        const result = await fetch(requestUrl, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            }
        }).then(res => res.json());

        console.log(result);

        dispatch({ type: SAVE_USER, payload: user });
    }
}

export function deleteUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: DELETE_USER, payload: user });
    }
}

export function searchUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: SEARCH_USER, payload: user });
    }
}
