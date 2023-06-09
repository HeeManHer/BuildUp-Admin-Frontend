import { GET_DASH_PROJECT } from "../modules/project";
import { GET_DASH_ROLE } from "../modules/authRole";
import { GET_DASH_SPRINT } from "../modules/sprint";
import { GET_DASH_BACKLOG } from "../modules/backlog";
import { GET_DASH_ISSUE } from "../modules/issue";

export function getDashBacklog() {
    const url = 'http://43.201.211.175:8888/api/v1/dash-backlog';

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
    const url = 'http://43.201.211.175:8888/api/v1/dash-issue';

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
    const url = 'http://43.201.211.175:8888/api/v1/dash-sprint';

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
    const url = 'http://43.201.211.175:8888/api/v1/dash-project';

    return async function (dispatch, getState) {

        const result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_DASH_PROJECT, payload: result });

    }
}

export function getDashAuth() {
    const url = 'http://43.201.211.175:8888/api/v1/dash-auth';

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