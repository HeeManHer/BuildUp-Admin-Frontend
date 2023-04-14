import { GET_DASH_PROJECT } from "../moduels/project";
import { GET_DASH_ROLE } from "../moduels/authRole";
import { GET_DASH_SPRINT } from "../moduels/sprint";
import { GET_DASH_BACKLOG } from "../moduels/backlog";
import { GET_DASH_ISSUE } from "../moduels/issue";

export function getDashBacklog() {
    const url = 'http://localhost:8888/api/v1/dash-backlog';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_BACKLOG, payload: result.data });

    }
}

export function getDashIssue() {
    const url = 'http://localhost:8888/api/v1/dash-issue';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_ISSUE, payload: result.data });

    }
}

export function getDashSprint() {
    const url = 'http://localhost:8888/api/v1/dash-sprint';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_SPRINT, payload: result.data });

    }
}

export function getDashDoardProject() {
    const url = 'http://localhost:8888/api/v1/dash-project';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_PROJECT, payload: result.data });

    }
}

export function getDashAuth() {
    const url = 'http://localhost:8888/api/v1/dash-auth';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_ROLE, payload: result.data });

    }
}