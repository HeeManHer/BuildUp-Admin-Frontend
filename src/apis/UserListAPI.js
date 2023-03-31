import { SET_USER, CHANGE_USER, SAVE_USER } from "../moduels/user";
import User from '../Pages/User.json';

export function setUserList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_USER, payload: User });
    }
}
export function changeUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: CHANGE_USER, payload: user });
    }
}

export function saveUserList(user) {

    return function (dispatch, getState) {
        dispatch({ type: SAVE_USER, payload: user });
    }
}
