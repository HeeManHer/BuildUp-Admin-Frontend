import { SET_AUTHORITY } from "../moduels/authority";
import AuthorityList from '../Pages/AuthorityList.json';

export function setAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_AUTHORITY, payload: AuthorityList });
    }
}
