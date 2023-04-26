import { POST_LOGIN } from '../modules/admin';

export const postLoginAPI = (form) => {
    const requestURL = `http://43.201.211.175:8888/auth/login`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(form)
        }).then(response => response.json());

        // result에 data가 없어서 안 뜨는 것 같음.
        if (result.status === 200) {
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }
        dispatch({ type: POST_LOGIN, payload: result });

    };
}

export const callLogoutAPI = () => {


    return async (dispatch, getState) => {

        dispatch({ type: POST_LOGIN, payload: '' });
    };
}