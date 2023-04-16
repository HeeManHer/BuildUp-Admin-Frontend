import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import '../../css/admin.css';

import Title from '../commons/Title';
import { getAuthType, getOneAuthority, updateAuthority } from '../../apis/AuthorityListAPI';

function AuthInfo() {

    const { authNo } = useParams();

    const authority = useSelector(state => state.authorityReducer)
    const authType = useSelector(state => state.typeReducer);

    const [authInfo, setAuthInfo] = useState(authority.filter(auth => auth.roleNo === authNo)[0]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(getOneAuthority(authNo));
            dispatch(getAuthType());
        },
        []
    )

    useEffect(
        () => {
            setAuthInfo(authority[0]);
        },
        [authority]
    )

    const checkState = e => {
        setAuthInfo({
            ...authInfo,
            type: authInfo.type.map(type => {
                if (type.typeName === e.target.name) {
                    if (e.target.checked) {
                        return {
                            ...type,
                            state: [...type.state, e.target.value]
                        }
                    } else {
                        return {
                            ...type,
                            state: type.state.filter(state => state !== e.target.value)
                        }
                    }
                } else {
                    return type
                }
            })
        });
    }
    // console.log(authInfo);


    const modifyAuthority = () => {
        if (authInfo.roleName === null || authInfo.roleName === '') return;
        dispatch(updateAuthority(authInfo));
        goPrevPage();
    }

    const goPrevPage = () => {
        navigate("../");
        window.location.reload();
    }

    return (
        authInfo === undefined ?
            <h1>Loading...</h1> :
            <div className="container-fluid">

                <Title title='권한 등록' />

                <div className="admin">
                    <div>
                        <label>역할 이름 : </label>
                        <input
                            type="text"
                            value={authInfo.roleName}
                            onChange={e => setAuthInfo({ ...authInfo, roleName: e.target.value })}
                        />
                    </div>

                    <table className="admin-table" width="40%">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th colSpan={authType.length}>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authInfo === undefined ?
                                    <h1>Loading...</h1> :
                                    authType.map((type, index) => (
                                        <tr>
                                            <td>{type.typeName}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={type.typeName}
                                                    value='C'
                                                    defaultChecked={authInfo.type.map(item => item.state.indexOf('C') >= 0)[0]}
                                                    onChange={checkState}
                                                />
                                                <label >C</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={type.typeName}
                                                    value='R'
                                                    defaultChecked={authInfo.type.map(item => item.state.indexOf('R') >= 0)[0]}
                                                    onChange={checkState}
                                                />
                                                <label >R</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={type.typeName}
                                                    value='U'
                                                    defaultChecked={authInfo.type.map(item => item.state.indexOf('U') >= 0)[0]}
                                                    onChange={checkState}
                                                />
                                                <label >U</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={type.typeName}
                                                    value='D'
                                                    defaultChecked={authInfo.type.map(item => item.state.indexOf('D') >= 0)[0]}
                                                    onChange={checkState}
                                                />
                                                <label >D</label>
                                            </td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>

                    <div className='button'>
                        <button type="button" className='btn btn-primary' onClick={modifyAuthority}>수정</button>
                        <button type="button" className='btn btn-warning' onClick={goPrevPage}>취소</button>
                    </div>
                </div>
            </div >
    );
}

export default AuthInfo;