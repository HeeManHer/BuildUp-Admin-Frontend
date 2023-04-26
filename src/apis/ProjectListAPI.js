import { GET_PROJECT, SEARCH_PROJECT } from "../modules/project";

export function setProjectList(currentPage, searchValue) {
    let url;
    if (searchValue !== undefined || searchValue !== null) {
        url = `http://43.201.211.175:8888/api/v1/manage-projects?page=${currentPage}&search=${searchValue}`;
    } else {
        url = `http://43.201.211.175:8888/api/v1/manage-projects?page=${currentPage}`;
    }

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: GET_PROJECT, payload: result.data });
    }
}

export function searchProject(searchValue) {
    const url = `http://43.201.211.175:8888/api/v1/manage-projects?search=${searchValue}`;

    return async function (dispatch, getState) {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        }).then(res => res.json());

        dispatch({ type: SEARCH_PROJECT, payload: result.data });
    }
}