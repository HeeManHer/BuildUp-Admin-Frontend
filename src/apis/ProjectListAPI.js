import { SET_PROJECT } from "../moduels/project";
import Project from '../Pages/Project.json';

export function setProjectList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_PROJECT, payload: Project });
    }
}
