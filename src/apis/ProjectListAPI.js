import { SET_PROJECT, SEARCH_PROJECT } from "../moduels/project";
import Project from '../data/ProjectList.json';

export function setProjectList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_PROJECT, payload: Project });
    }
}

export function searchProject(searchValue) {

    return function (dispatch, getState) {
        dispatch({ type: SEARCH_PROJECT, payload: searchValue });
    }
}