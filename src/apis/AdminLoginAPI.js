import { POST_LOGIN } from '../modules/admin';

export const postLoginAPI = (form) => {
    const requestURL = `http://localhost:8888/api/v1/manage-login`;

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
        console.log('[EmployeeAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}

export const registAdminAPI = (form) => {
    const requestURL = `http://localhost:8888/api/v1/manage-admin`;

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
        })

        // result에 data가 없어서 안 뜨는 것 같음.
        console.log('[EmployeeAPICalls] callLoginAPI RESULT : ', result);        
    };
}

export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[EmployeeAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}


// export const callRegisterAPI = ({form}) => {
//     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/auth/signup`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "*/*"
//             },
//             body: JSON.stringify({
//                 memberId: form.memberId,
//                 memberPassword: form.memberPassword,
//                 memberName: form.memberName,
//                 memberEmail: form.memberEmail                
//             })
//         })
//         .then(response => response.json());

//         console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
//         if(result.status === 201){
//             dispatch({ type: POST_REGISTER,  payload: result });
//         }        
//     };
// }